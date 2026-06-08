import React, { useState } from 'react'
import './NoticeBoard.css'
import notificationsData from '../data/notifications.json'

const TABS = [
  { key: 'all', label: 'All Notifications' },
  { key: 'institute', label: 'Institute Notifications' },
  { key: 'program', label: 'Program Notifications' },
  { key: 'term', label: 'Term Notifications' },
  { key: 'university', label: 'University Notifications' },
]

const EXTRA_NOTIFICATIONS = [
  { title: 'Seating Allocation-II Semester B.Tech /M.Tech Makeup Exam-08-06-2026-Forenoon' },
  ...notificationsData,
]

function NoticeBoard() {
  const [activeTab, setActiveTab] = useState('institute')

  return (
    <div className="notice-board">
      <div className="section-title">
        <div className="icon-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
        Notice Board
      </div>

      <div className="notice-layout">
        <div className="notice-tabs-left">
          {TABS.map(tab => (
            <div
              key={tab.key}
              className={`notice-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {tab.key === 'institute' && <span className="tab-bell">🔔</span>}
            </div>
          ))}
        </div>

        <div className="notice-content">
          {EXTRA_NOTIFICATIONS.map((n, i) => (
            <div className="notice-item" key={i}>
              <span className="notice-arrow">›</span>
              <span className="notice-title">{n.title}</span>
              <span className="notice-badge">NEW</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard
