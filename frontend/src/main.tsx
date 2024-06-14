import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import {persistor, store} from "@/redux/store";
import {PersistGate} from 'redux-persist/integration/react'

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root as HTMLElement)
reactRoot.render(
    <React.StrictMode>
        <PersistGate persistor={persistor} loading={null}>
            <Provider store={store}>
                <App />
            </Provider>
        </PersistGate>
    </React.StrictMode>
)

