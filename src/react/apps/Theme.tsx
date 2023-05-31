import { Iframe, Provider, useIframeContext } from '@unionavatars/iframe/react';

function NavBar () {
  const { eventer } = useIframeContext()
  const themes = [
    { logo: window.location.origin + '/logos/bouquet.webp', color: 'violet', bg: window.location.origin + '/backgrounds/flowers.jpeg'},
    { logo: window.location.origin + '/logos/graffitti.png', color: 'gold', bg: window.location.origin + '/backgrounds/graffitti.jpg'},
    { logo: window.location.origin + '/logos/stone.png', color: 'gray', bg: window.location.origin + '/backgrounds/gravel.jpeg'},
  ]
  function setTheme (num: 0 | 1 | 2) {
    const { logo, color, bg } = themes[num]
    eventer?.request('set-color', color)
    eventer?.request('set-background', bg)
    eventer?.request('set-logo', logo)
  }
  return (
    <aside>
      <header>Set theme:</header>
      <ul>
        <li><button onClick={() => setTheme(0)}>First</button></li>
        <li><button onClick={() => setTheme(1)}>Second</button></li>
        <li><button onClick={() => setTheme(2)}>Third</button></li>
      </ul>
    </aside>
  )
}

export default function Theme () {
  return (
    <Provider>
      <article>
        <NavBar />
        <section>
          <Iframe src="http://iframe.unionavatars.com" />
        </section>
      </article>
    </Provider>
  )
}
