import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes/Routes.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Login/Firebase/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={Routes} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
