import Router from "./Router/Index"
import LandingPage from "./pages/LandingPage/LandingPage"
import {
  PDFViewer,
  Document,
  Page,
  Text,
} from "@react-pdf/renderer"

function App() {
  return (
    <div className="App font-['Montserrat'] text-white">
      <Router/>
    </div>
  )
}

export default App
