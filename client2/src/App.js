import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'

import { About } from './pages/About'
import { Announcements } from './pages/Announcements'
import { Staff } from './pages/Staff'
import { SponsoringComittee } from './pages/SponsoringComittee'
import { FAQ } from './pages/FAQ'

import { Contact } from './pages/Contact'
import { Join } from './pages/Join'
import { Calendar } from './pages/Calendar'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='announcements' element={<Announcements />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/sponsoringcomittee" element={<SponsoringComittee />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>

    </div>
  )
}

export default App