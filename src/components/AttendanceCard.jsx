import React from 'react'
import './AttendanceCard.css'
import attendanceData from '../data/attendance.json'

const COURSE_CODES = {
  'Probability and Optimization': 'MAT 2201',
  'Database Systems': 'CSS 2201',
  'Design and Analysis of Algorithms': 'CSS 2202',
  'Introduction to Artificial Intelligence': 'CSS 2203',
  'Operating Systems': 'CSS 2204',
  'Operating Systems Lab': 'CSS 2211',
  'Database Systems Lab': 'CSS 2212',
  'OOSD Lab': 'CSS 2213',
}

function AttendanceCard() {
  return (
    <div className="attendance-card">
      <div className="att-header">
        <div className="att-title-group">
          <div className="icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div>
            <div className="att-title">Attendance Percentage</div>
            <div className="att-sem-chip">Semester - IV</div>
          </div>
        </div>
        <div className="att-right">
          <span className="att-avg-label">Average Attendance</span>
          <a href="#" className="ext-link-icon" title="View full attendance">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="att-list">
        {attendanceData.map((item, i) => {
          const code = COURSE_CODES[item.subject] || ''
          const label = code
            ? `${code} : ${item.subject.toUpperCase()}`
            : item.subject.toUpperCase()
          return (
            <div className="att-row" key={i}>
              <span className="att-subject">{label}</span>
              <span className={`att-pill${item.attendance >= 85 ? ' high' : ''}`}>
                {item.attendance}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AttendanceCard
