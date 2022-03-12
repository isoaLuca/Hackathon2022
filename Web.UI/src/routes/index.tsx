import { Routes, Route } from 'react-router-dom'
import { AboutPage, BackOffice, Login } from '../pages'
import { AboutUsPage } from '../pages/about-us-page/AboutUsPage'
import { ContactPage } from '../pages/contact-page/ContactPage'
import { DevicePage } from '../pages/device-page/DevicePage'
import { HomePage } from '../pages/home-page/HomePage'
import { SciencePage } from '../pages/scientific-page/SciencePage'
import { StudiesPage } from '../pages/studies-page/Studies'

export default function MyRoutes() {
    return (
      <div className='container-routes'>
          <Routes>
            Route: <Route path="/admin" element={<BackOffice />} />
            Route: <Route path="/login" element={<Login />} />
            Route: <Route path="/" element={<HomePage />} />
            Route: <Route path="/what-we-do" element={<AboutPage />} />
            Route: <Route path="/our-devices" element={<DevicePage />} />
            Route: <Route path="/who-we-are" element={<AboutUsPage />} />
            Route: <Route path="/scientific-validation" element={<SciencePage />} />
            Route: <Route path="/studies" element={<StudiesPage />} />
            Route: <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
      </div>
        
    )
}