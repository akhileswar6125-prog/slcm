import React, { useState } from 'react'
import './StudentClubs.css'
import studentData from '../data/student.json'

function StudentClubs() {
  const [openItems, setOpenItems] = useState({})

  const clubs = [
    {
      id: 'mentor',
      name: `Dr. ${studentData.mentor} Mentee III CCE C`,
      detail: `Academic mentor for Semester III, Computer and Communication Engineering Section C. Dr. ${studentData.mentor} provides academic guidance and support.`,
    },
    {
      id: 'guardian',
      name: `${studentData.guardian} - Student Guardian`,
      detail: `${studentData.guardian} is the assigned student guardian providing personal support and guidance throughout the academic journey.`,
    },
  ]

  const toggle = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="clubs-card">
      <div className="section-title">
        <div className="icon-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <span className="clubs-label">Student Clubs</span>
        <a href="#" className="ext-link-icon" title="Open in new tab">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <div className="clubs-list">
        {clubs.map(club => (
          <div className="club-item" key={club.id}>
            <div
              className={`club-header${openItems[club.id] ? ' open' : ''}`}
              onClick={() => toggle(club.id)}
            >
              <svg
                className={`club-arrow${openItems[club.id] ? ' rotated' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="#d4691a"
                strokeWidth="2.5"
              >
                <polyline points="3 2 9 6 3 10" />
              </svg>
              <span className="club-name">{club.name}</span>
            </div>
            {openItems[club.id] && (
              <div className="club-body">
                {club.detail}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentClubs
