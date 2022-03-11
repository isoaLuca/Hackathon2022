import { Routes, Route } from 'react-router-dom'
import { AboutPage, BackOffice, Login } from '../pages'
import { DevicePage } from '../pages/device-page/DevicePage'
import { HomePage } from '../pages/home-page/HomePage'

export default function MyRoutes() {
    return (
      <div className='container-routes'>
          <Routes>
            Route: <Route path="/admin" element={<BackOffice />} />
            Route: <Route path="/login" element={<Login />} />
            Route: <Route path="/" element={<HomePage />} />
            Route: <Route path="/about" element={<AboutPage />} />
            Route: <Route path="/device" element={<DevicePage />} />
          </Routes>
      </div>
        
    )
}