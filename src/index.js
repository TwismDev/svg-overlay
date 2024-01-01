import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { AppProvider } from './components/Context'
import { BrowserRouter as Router } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const searchParams = new URLSearchParams(useLocation().search)
const id = searchParams.get('id')

library.add(faCircleCheck, faSpinner)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <React.StrictMode>
      <AppProvider id={id}>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
