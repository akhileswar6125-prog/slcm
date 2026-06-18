import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import manipalLogo from '../assets/manipal_logo.png'
import studentPhoto from '../assets/student.jpeg'
import notificationsData from '../data/notifications.json'

const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'Profile', to: '/profile' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Academics', to: '/academics' },
  { label: 'Applications', to: '/applications' },
  { label: 'Support Request', to: '/support-request' },
  { label: 'Attendance', to: '/attendance' },
]

const MORE_ITEMS = [
  { label: 'Academic Calendar', to: null },
  { label: 'Student Success', to: '/student-success' },
  { label: 'Placement Drives', to: '/placement-drives' },
  { label: 'Feedback', to: '/feedback' },
]

function NotificationPanel({ onClose }) {
  const unreadCount = notificationsData.filter(n => n.isNew).length

  const handleNotifClick = (pdf) => {
    window.open(pdf, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="notif-panel">
      <div className="notif-panel-header">
        <span className="notif-panel-title">Notifications</span>
        {unreadCount > 0 && (
          <span className="notif-panel-badge">{unreadCount} new</span>
        )}
      </div>
      <div className="notif-panel-list">
        {notificationsData.map((n) => (
          <button
            key={n.id}
            className={`notif-item${n.isNew ? ' notif-item-new' : ''}`}
            onClick={() => handleNotifClick(n.pdf)}
            title="Click to open notice PDF"
          >
            <div className="notif-item-left">
              {n.isNew && <span className="notif-dot" />}
            </div>
            <div className="notif-item-body">
              <div className="notif-item-title">{n.title}</div>
              <div className="notif-item-meta">
                <span className="notif-item-cat">{n.category}</span>
                <span className="notif-item-sep">·</span>
                <span className="notif-item-date">{n.date}</span>
                <span className="notif-item-sep">·</span>
                <span className="notif-item-pdf-label">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight:2,verticalAlign:'middle'}}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  View PDF
                </span>
              </div>
            </div>
            {n.isNew && <span className="notif-item-new-badge">NEW</span>}
          </button>
        ))}
      </div>
      <div className="notif-panel-footer">
        <button className="notif-view-all" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const dropdownRef = useRef(null)
  const notifRef = useRef(null)
  const navigate = useNavigate()

  const unreadCount = notificationsData.filter(n => n.isNew).length

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }, [])

  const openMobile = () => {
    setMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* OVERLAY */}
      <div className={`overlay${mobileOpen ? ' open' : ''}`} onClick={closeMobile} />

      {/* MOBILE NAV DRAWER */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-nav-header">
          <span>MAHE SLCM</span>
          <button className="mobile-close" onClick={closeMobile} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5">
              <line x1="4" y1="4" x2="16" y2="16"/>
              <line x1="16" y1="4" x2="4" y2="16"/>
            </svg>
          </button>
        </div>
        {NAV_LINKS.map(item => (
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
              onClick={closeMobile}
            >
              {item.label}
            </NavLink>
          ) : (
            <a key={item.label} href="#" className="mobile-nav-link" onClick={e => { e.preventDefault(); closeMobile() }}>
              {item.label}
            </a>
          )
        ))}
        <div className="mobile-nav-more-label">More</div>
        <div className="mobile-nav-sub">
          {MORE_ITEMS.map(item => (
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                onClick={closeMobile}
              >
                {item.label}
              </NavLink>
            ) : (
              <a key={item.label} href="#" className="mobile-nav-link" onClick={e => { e.preventDefault(); closeMobile() }}>
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>

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
          {/* NOTIFICATION BELL */}
          <div className="notif-wrapper" ref={notifRef}>
            <button
              className={`notif-btn${notifOpen ? ' notif-btn-active' : ''}`}
              title="Notifications"
              aria-label="Notifications"
              onClick={() => setNotifOpen(v => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              {unreadCount > 0 && (
                <span className="notif-count-badge">{unreadCount}</span>
              )}
            </button>
            {notifOpen && <NotificationPanel onClose={() => setNotifOpen(false)} />}
          </div>

          <button
            className="profile-icon-btn"
            title="Profile"
            aria-label="Profile"
            onClick={() => navigate('/profile')}
            style={{cursor:'pointer'}}
          >
            <img src={studentPhoto} alt="Profile" />
          </button>
          <button className="hamburger" onClick={openMobile} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* DESKTOP NAVBAR */}
      <nav className="navbar">
        {NAV_LINKS.map(item =>
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ) : (
            <a key={item.label} href="#" className="nav-link" onClick={e => e.preventDefault()}>
              {item.label}
            </a>
          )
        )}

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
              width="14" height="14" viewBox="0 0 14 14"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="2 5 7 10 12 5"/>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {MORE_ITEMS.map(item =>
                item.to ? (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) => `dropdown-item${isActive ? ' active' : ''}`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    key={item.label}
                    href="#"
                    className="dropdown-item"
                    onClick={e => { e.preventDefault(); setDropdownOpen(false) }}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
