import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { persistQueryClient } from "react-query/persistQueryClient-experimental"
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

const localStoragePersistor = createWebStoragePersistor({
  storage: window.localStorage,
})

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals()
