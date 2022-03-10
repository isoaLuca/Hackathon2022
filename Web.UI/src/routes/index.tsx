import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BackOffice, Login } from '../pages'

export default function MyRoutes() {
    return (
        <Router>
          <Routes>
            Route: <Route path="/admin" element={<BackOffice />} />
            Route: <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    )
}