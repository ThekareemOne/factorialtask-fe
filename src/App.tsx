import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Landing from "./pages/Landing"
import { MetricsProvider } from "./context/MetricContext"
import { PeriodProvider } from "./context/PeriodContext"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <MetricsProvider>
        <PeriodProvider>
          <div className="App">
            <Landing />
            <ToastContainer position="top-center" theme="light" />
          </div>
        </PeriodProvider>
      </MetricsProvider>
    </Router>
  )
}

export default App
