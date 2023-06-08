/* eslint-disable react-hooks/rules-of-hooks */
import { Iframe, useIframeContext } from '@unionavatars/iframe/vue'
import { defineComponent, h, ref } from 'vue'

const Form = defineComponent({
  emits: ['submit'],
  setup (props, { emit }) {
    const onSubmit = (evt: Event) => {
      evt.stopPropagation()
      evt.preventDefault()
      const data = new FormData(evt.target as HTMLFormElement)
      emit('submit', data.get('email'), data.get('password'))
    }
    return () => (
      h('form', { ...props, onSubmit }, [
        h('input', { type: 'email', name: 'email', placeholder: 'Email', required: true, autoComplete: 'off'}),
        h('input', { type: 'password', name: 'password', placeholder: 'Password', required: true }),
        h('button', { type: 'submit'}, 'Login')
      ])
    )
  }
})

const NavBar = defineComponent({
  setup () {
    const loggedIn = ref(false)
    const ctx = useIframeContext()
    const logout = () => {
      loggedIn.value = false
      ctx?.eventer?.request('logout')
    }
    const login = (email: string, password: string) => {
      loggedIn.value = true
      ctx?.eventer?.request('login', email, password)
    }

    return () => (
      h('aside', [
        h('header', 'Auth'),
        !loggedIn.value ? h(Form, { onSubmit: login }) : h('button', { onClick: logout }, 'Logout')
      ])
    )
  }
})

const Auth = defineComponent({
  setup () {
    return () => (
      h('article', [
        h(NavBar),
        h('section', [
          h(Iframe, { src: 'http://iframe.unionavatars.com' })
        ])
      ])
    )
  }
})

export default Auth
