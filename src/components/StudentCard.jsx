import React from 'react'
import './StudentCard.css'
import studentData from '../data/student.json'
import studentPhoto from '../assets/student.jpeg'
import manipalLogo from '../assets/manipal_logo.png'

function StudentCard() {
  return (
    <div className="student-card">
      <div className="student-card-inner">
        {/* Left: Photo + Basic Info */}
        <div className="student-photo-col">
          <img src={studentPhoto} alt="Student" className="student-photo" />
          <div className="student-enrollment">{studentData.enrollmentNo}</div>
          <div className="student-fullname">{studentData.name}</div>
          <div className="student-status-row">
            <span className="status-label">Status:</span>
            <span className="status-badge">{studentData.status}</span>
          </div>
        </div>

        {/* Right: Details */}
        <div className="student-info-col">
          <div className="mit-header">
            <img src={manipalLogo} alt="MIT Logo" className="mit-logo" />
            <div>
              <div className="mit-title">Manipal Institute of Technology</div>
              <div className="mit-subtitle">(MIT), Manipal</div>
            </div>
          </div>

          <div className="student-dept">{studentData.program}</div>

          <div className="contact-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:marella.mitmpl2024@learner.manipal.edu" className="contact-email">
              marella.mitmpl2024@learner.manipal.edu
            </a>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" style={{marginLeft: '8px'}}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 13 19.79 19.79 0 0 1 1.92 4.37a2 2 0 0 1 2-2.18H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="contact-phone">9059840832</span>
          </div>

          <div className="info-grid">
            <div className="info-row">
              <span className="info-label">Roll No. :</span>
              <span className="info-value">{studentData.rollNo}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Admission Date:</span>
              <span className="info-value">01-07-2024</span>
            </div>
            <div className="info-row">
              <span className="info-label">Total Terms:</span>
              <span className="info-value">8</span>
            </div>
            <div className="info-row">
              <span className="info-label">Academic Level:</span>
              <span className="info-value"></span>
            </div>
            <div className="info-row">
              <span className="info-label">Ongoing Semester:</span>
              <span className="info-value">IV</span>
            </div>
            <div className="info-row">
              <span className="info-label">Birth Date:</span>
              <span className="info-value"></span>
            </div>
            <div className="info-row">
              <span className="info-label">Program Type:</span>
              <span className="info-value">B.Tech</span>
            </div>
            <div className="info-row">
              <span className="info-label">Program Code:</span>
              <span className="info-value">953</span>
            </div>
          </div>

          <div className="grad-row">
            <span className="info-label">Expected Graduation Date:</span>
            <span className="grad-date">01-07-2028</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
