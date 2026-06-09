import React from 'react'
import './Applications.css'
import applicationsData from '../data/applications.json'

function Applications() {
  const { availableApplications, yourApplications } = applicationsData

  return (
    <div className="applications-page">
      <div className="app-section">
        <div className="app-section-header">
          <div className="app-icon-wrap blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <span className="app-section-title">Available Applications</span>
        </div>
        {availableApplications.length === 0 ? (
          <p className="app-empty">No open applications currently.</p>
        ) : (
          <div className="app-cards">
            {availableApplications.map((a, i) => (
              <div key={i} className="app-card">{a.title}</div>
            ))}
          </div>
        )}
      </div>

      <div className="app-section">
        <div className="app-section-header">
          <div className="app-icon-wrap green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <span className="app-section-title">Your Applications</span>
        </div>
        {yourApplications.length === 0 ? (
          <p className="app-empty">You have not created any applications yet.</p>
        ) : (
          <div className="app-cards">
            {yourApplications.map((a, i) => (
              <div key={i} className="app-card">{a.title}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Applications
