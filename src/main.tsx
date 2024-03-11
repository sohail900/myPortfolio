import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './app'
import './index.scss'
const queryClient = new QueryClient({
    // Reset the default options
    // change the network mode to offline first
    // to fetching data offline
    defaultOptions: {
        queries: {
            networkMode: 'offlineFirst',
        },
        mutations: {
            networkMode: 'offlineFirst',
        },
    },
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
)
