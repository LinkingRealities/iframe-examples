import { createApp } from 'vue'
import * as apps from './apps'
import { Plugin } from '@unionavatars/iframe/vue'

const initialOptions = {
  color: 'cyan',
  logo: 'https://picsum.photos/120/40',
  background: 'https://picsum.photos/2800/1400'
}

export function renderApp(name: keyof typeof apps) {
  if (!(name in apps)) throw new Error(`View ${name} not found inside apps. Available views are "${Object.keys(apps).join('", "')}"`)
  const app = createApp(apps[name])
  app.use(Plugin({ ...initialOptions }))
  app.mount('#root')
}
