import React from 'react'
import ReactDOM from 'react-dom/client'
import * as apps from './apps'

export function renderApp (name: keyof typeof apps) {
  if (!(name in apps)) throw new Error(`View ${name} not found inside apps. Available views are "${Object.keys(apps).join('", "')}"`)
  const AppView = React.createElement(apps[name])
  const root = document.getElementById('root') as HTMLElement
  const reactRoot = ReactDOM.createRoot(root)
  reactRoot.render(React.createElement(React.StrictMode, null, AppView))
}