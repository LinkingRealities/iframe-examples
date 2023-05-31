import * as apps from './apps'

export function renderApp (name: keyof typeof apps) {
  if (!(name in apps)) throw new Error(`View ${name} not found inside apps. Available views are "${Object.keys(apps).join('", "')}"`)
  apps[name]()
}