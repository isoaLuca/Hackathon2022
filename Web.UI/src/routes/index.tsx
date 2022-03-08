import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BackOffice } from '../pages'

export default function MyRoutes() {
    return (
        <Router>
          <Routes>
            Route: <Route path="/admin" element={<BackOffice />} />
          </Routes>
        </Router>
    )
}