import { setup } from "@unionavatars/iframe";

function $q (query: string) { return document.querySelector(query) }

export default function Auth () {
   // get iframe
   const iframe = $q('iframe#iframe') as HTMLIFrameElement
   // get form
   const form = $q('form#login-form') as HTMLFormElement
   // get logout button
   const logout = $q('button#logout') as HTMLButtonElement
   iframe.onload  = () => {
      const client = setup(iframe)
      // hide button
      logout.style.display = 'none'
      // set listener on logout button
      logout.addEventListener('click', () => {
        client.request('logout').then(
          () => {
            logout.style.display = 'none'
            form.style.display = 'block'
          }
        )
      })
      // add listeners
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = new FormData(form)
        const email = data.get('email') as string
        const password = data.get('password') as string
        client.request('login', email, password).then(
          () => {
            logout.style.display = 'block'
            form.style.display = 'none'
          }
        )
     })
   }
}