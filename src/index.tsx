/* @refresh reload */
import { render } from 'solid-js/web'
import type {} from "solid-styled-jsx";
import "../node_modules/prism-themes/themes/prism-coldark-dark.css"

import './index.css'
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)
