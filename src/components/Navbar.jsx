import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import manipalLogo from '../assets/manipal_logo.png'
import studentPhoto from '../assets/student.jpeg'

const MORE_ITEMS = [
  { label: 'Academic Calendar', href: '#' },
  { label: 'Student Success', href: '#' },
  { label: 'Placement Drives', href: '#' },
  { label: 'Feedback', href: '#' },
]

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-logo">
          <img src={manipalLogo} alt="Manipal Logo" className="header-logo-img" />
          <div className="header-logo-text">
            <span className="header-brand">MANIPAL</span>
            <span className="header-sub">ACADEMY OF HIGHER EDUCATION</span>
            <span className="header-sub2">Institution of Eminence Deemed to be University</span>
          </div>
        </div>
        <div className="header-icons">
          <button className="notif-btn" title="Notifications" aria-label="Notifications">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button className="profile-icon-btn" title="Profile" aria-label="Profile">
            <img src={studentPhoto} alt="Profile" />
          </button>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Home
        </NavLink>
        <a href="#" className="nav-link">Profile</a>
        <a href="#" className="nav-link">Schedule</a>
        <NavLink
          to="/academics"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Academics
        </NavLink>
        <a href="#" className="nav-link">Applications</a>
        <a href="#" className="nav-link">Support Request</a>
        <a href="#" className="nav-link">Attendance</a>

        <div className="more-wrapper" ref={dropdownRef}>
          <button
            className={`more-btn${dropdownOpen ? ' open' : ''}`}
            onClick={() => setDropdownOpen(v => !v)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            More
            <svg
              className={`more-arrow${dropdownOpen ? ' rotated' : ''}`}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="2 5 7 10 12 5" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {MORE_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
