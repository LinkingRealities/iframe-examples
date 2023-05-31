import React from 'react'
import { Iframe, Provider, useIframeContext } from '@unionavatars/iframe/react'

function NavBar () {
  const { eventer } = useIframeContext()
  const goto = (page: string) => {
    eventer?.request('goto', page)
  }
  return (
    <aside>
      <header>Go to:</header>
      <ul>
        <li><button onClick={() => goto('Login')}>Login</button></li>
        <li><button onClick={() => goto('Register')}>Register</button></li>
        <li><button onClick={() => goto('RecoverPassword')}>Recover Password</button></li>
      </ul>
    </aside>
  )
}

export default function Nav () {
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