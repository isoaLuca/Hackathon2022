import './App.css'
import { Navbar, Webinar } from './components'
import { initInternationalization } from './i18next'
import MyRoutes from './routes'

function App() {

  initInternationalization(navigator.language || 'en')

  return (
    // useContext
    <div className="App">
      <Webinar />
      <Navbar />
      <MyRoutes /> 
    </div>
  )
}

export default App
