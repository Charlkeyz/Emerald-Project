import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { ContextApiProvider } from './components/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApiProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ContextApiProvider>
  </StrictMode>,
)
