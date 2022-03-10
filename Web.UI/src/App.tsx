import './App.css'
import { initInternationalization } from './i18next'
import MyRoutes from './routes'

function App() {

  initInternationalization(navigator.language || 'en')

  return (
    // useContext
    <div className="App">
      <MyRoutes />
    </div>
  )
}

export default App
