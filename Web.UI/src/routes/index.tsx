import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BackOffice, Login } from '../pages'
import { HomePage } from '../pages/home-page/HomePage'

export default function MyRoutes() {
    return (
      <div className='container-routes'>
        <Router>
          <Routes>
            Route: <Route path="/admin" element={<BackOffice />} />
            Route: <Route path="/login" element={<Login />} />
            Route: <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
        
    )
}