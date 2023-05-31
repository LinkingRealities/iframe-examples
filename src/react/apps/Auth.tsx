import { Iframe, Provider, useIframeContext } from '@unionavatars/iframe/react'
import React, { FormEventHandler, useState } from 'react'

function NavBar () {
  const { eventer } = useIframeContext()
  const [display, setDisplay] = useState(false)

  const logout = () => {
    setDisplay(false)
    eventer?.request('logout')
  }
  const login: FormEventHandler = (evt) => {
    evt.preventDefault()
    const data = new FormData(evt.currentTarget as HTMLFormElement)
    const email = data.get('email') as string
    const password = data.get('password') as string
    eventer?.request('login', email, password).then(() => {
      setDisplay(true)
    })
  }

  if (display) return <button onClick={logout}>Logout</button>

  return (
    <form onSubmit={login}>
      <input type="email" name="email" placeholder="Email" required autoComplete="off" />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}

export default function Login () {
  return (
    <Provider>
      <article>
        <aside>
          <header>Auth</header>
          <NavBar />
        </aside>
        <section>
          <Iframe src="http://iframe.unionavatars.com" />
        </section>
      </article>
    </Provider>
  )
}