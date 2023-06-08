/* eslint-disable react-hooks/rules-of-hooks */
import { defineComponent, h } from 'vue';
import { Iframe, useIframeContext } from '@unionavatars/iframe/vue' 

const NavBar = defineComponent({
  setup () {
    const ctx = useIframeContext()
    const goto = (page: string) => {
      ctx?.eventer?.request('goto', page)
    }
    return () => (
      h('aside', [
        h('header', 'Go to:'),
        h('ul', [
          h('li', h('button', { onClick: () => goto('Login') }, 'Login')),
          h('li', h('button', { onClick: () => goto('Register') }, 'Register')),
          h('li', h('button', { onClick: () => goto('RecoverPassword') }, 'Recover Password'))
        ])
      ])
    )
  }
})

const Nav = defineComponent({
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
export default Nav
