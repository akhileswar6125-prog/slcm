import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Academics from './pages/Academics'
import Schedule from './pages/Schedule'
import Applications from './pages/Applications'
import SupportRequest from './pages/SupportRequest'
import Attendance from './pages/Attendance'
import StudentSuccess from './pages/StudentSuccess'
import PlacementDrives from './pages/PlacementDrives'
import Feedback from './pages/Feedback'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/support-request" element={<SupportRequest />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/student-success" element={<StudentSuccess />} />
          <Route path="/placement-drives" element={<PlacementDrives />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
