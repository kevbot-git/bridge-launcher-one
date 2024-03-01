import './app.css'
import App from './App.svelte'
import { nn } from './lib/utils'

const app = new App({
  target: nn(document.getElementById('app')),
})

export default app
