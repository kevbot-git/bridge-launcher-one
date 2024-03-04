import type { JSToBridgeAPI } from '@bridgelauncher/api'
import { BridgeMock } from '@bridgelauncher/api-mock'
import './app.css'
import App from './App.svelte'
import { nn } from './lib/utils'

if (typeof window.Bridge === 'undefined') {
  const mock = new BridgeMock() satisfies JSToBridgeAPI
  window.Bridge = mock
}

const app = new App({
  target: nn(document.getElementById('app')),
})

export default app
