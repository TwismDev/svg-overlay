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

library.add(faCircleCheck, faSpinner)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <React.StrictMode>
            <AppProvider>
                <App />
            </AppProvider>
        </React.StrictMode>
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
