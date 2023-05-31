import { setup } from "@unionavatars/iframe"

type Client = ReturnType<typeof setup>

function $q (query: string) { return document.querySelector(query) }

function setTheme1 (client: Client) {
  client.request('set-color', 'violet')
  client.request('set-logo', window.location.origin + '/logos/bouquet.webp')
  client.request('set-background', window.location.origin + '/backgrounds/flowers.jpeg')
}

function setTheme2 (client: Client) {
  client.request('set-color', 'gold')
  client.request('set-logo', window.location.origin + '/logos/graffitti.png')
  client.request('set-background', window.location.origin + '/backgrounds/graffitti.jpg')
}

function setTheme3 (client: Client) {
  client.request('set-color', 'gray')
  client.request('set-logo', window.location.origin + '/logos/stone.png')
  client.request('set-background', window.location.origin + '/backgrounds/gravel.jpeg')
}

export default function Theme () {
  // get iframe
  const iframe = $q('iframe#iframe') as HTMLIFrameElement
  // get theme button 1
  const theme1 = $q('button#first') as HTMLButtonElement
  // get theme button 2
  const theme2 = $q('button#second') as HTMLButtonElement
  // get theme button 3
  const theme3 = $q('button#third') as HTMLButtonElement
  iframe.onload  = () => {
    const client = setup(iframe)
    // set listener on theme button 1
    theme1.addEventListener('click', () => { setTheme1(client) })
    // set listener on theme button 2
    theme2.addEventListener('click', () => { setTheme2(client) })
    // set listener on theme button 3
    theme3.addEventListener('click', () => { setTheme3(client) })
  }
}
