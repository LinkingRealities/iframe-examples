import { setup } from "@unionavatars/iframe";

function $q (query: string) { return document.querySelector(query) }

export default function Nav () {
  // get iframe
  const iframe = $q('iframe#iframe') as HTMLIFrameElement
  iframe.onload  = () => {
    const client = setup(iframe)
    // add listeners to buttons
    $q('button#login')?.addEventListener('click', () => {
      client.request('goto', 'Login')
    })
    $q('button#register')?.addEventListener('click', () => {
      client.request('goto', 'Register')
    })
    $q('button#recover')?.addEventListener('click', () => {
      client.request('goto', 'RecoverPassword')
    })
  }
}
