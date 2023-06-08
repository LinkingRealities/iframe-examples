/* eslint-disable react-hooks/rules-of-hooks */
import { Iframe, useIframeContext } from '@unionavatars/iframe/vue'
import { defineComponent, h } from 'vue'

const NavBar = defineComponent({
  setup () {
    const ctx = useIframeContext()
    const themes = [
      { logo: window.location.origin + '/logos/bouquet.webp', color: 'violet', bg: window.location.origin + '/backgrounds/flowers.jpeg'},
      { logo: window.location.origin + '/logos/graffitti.png', color: 'gold', bg: window.location.origin + '/backgrounds/graffitti.jpg'},
      { logo: window.location.origin + '/logos/stone.png', color: 'gray', bg: window.location.origin + '/backgrounds/gravel.jpeg'},
    ]
    function setTheme (num: 0 | 1 | 2) {
      const { logo, color, bg } = themes[num]
      ctx?.eventer?.request('set-color', color)
      ctx?.eventer?.request('set-background', bg)
      ctx?.eventer?.request('set-logo', logo)
    }
    return () => (
      h('aside', [
        h('header', [
          'Set theme',
          h('ul', [
            h('li', h('button', { onClick: () => setTheme(0) }, 'First')),
            h('li', h('button', { onClick: () => setTheme(1) }, 'Second')),
            h('li', h('button', { onClick: () => setTheme(2) }, 'Third')),
          ])
        ])
      ])
    )
  }
})

const Theme = defineComponent({
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
export default Theme