import React, { useState } from 'react'
import './StudentSuccess.css'
import studentData from '../data/student.json'
import { SS_PROGRAMS, SS_TYPES, SS_CATEGORIES } from '../data/mockData.js'

const TABS = [
  { key: 'clubs', label: 'Discover Student Clubs' },
  { key: 'techshila', label: 'Techshila' },
  { key: 'enrolled', label: 'Enrolled' },
  { key: 'aid', label: 'Student Aid' },
  { key: 'international', label: 'International Programs' },
]

function EnrollModal({ program, onClose }) {
  const today = new Date()
  const dateStr = `${String(today.getDate()).padStart(2,'0')}-${String(today.getMonth()+1).padStart(2,'0')}-${today.getFullYear()}`
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="ss-modal-box" onClick={e => e.stopPropagation()}>
        <button className="ss-modal-close" onClick={onClose}>✕</button>
        <h2 className="ss-modal-title">Program Enrollment</h2>
        <div className="ss-modal-underline"></div>
        <div className="ss-modal-fields">
          <div className="ss-field">
            <label className="ss-label">Name</label>
            <input value={studentData.name} readOnly className="ss-input" />
          </div>
          <div className="ss-field">
            <label className="ss-label">Account</label>
            <div className="ss-input-search-wrap">
              <input value={studentData.name} readOnly className="ss-input" />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
          </div>
          <div className="ss-field">
            <label className="ss-label">Program Name</label>
            <input value={program ? program.name : '{Name}'} readOnly className="ss-input" />
          </div>
          <div className="ss-field">
            <label className="ss-label">Status</label>
            <input value="Applied" readOnly className="ss-input" />
          </div>
          <div className="ss-field">
            <label className="ss-label">Application Date</label>
            <div className="ss-date-wrap">
              <input value={dateStr} readOnly className="ss-input" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>
        </div>
        <div className="ss-modal-actions">
          <button className="ss-cancel" onClick={onClose}>Cancel</button>
          <button className="ss-submit-btn" onClick={onClose}>Submit</button>
        </div>
      </div>
    </div>
  )
}

function StudentSuccess() {
  const [activeTab, setActiveTab] = useState('clubs')
  const [typeFilter, setTypeFilter] = useState('Technical')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [enrollProgram, setEnrollProgram] = useState(null)

  const filteredPrograms = SS_PROGRAMS.filter(p => {
    const matchType = !typeFilter || p.type === typeFilter
    const matchCat = categoryFilter === 'All' || p.category === categoryFilter
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase())
    return matchType && matchCat && matchSearch
  })

  const displayPrograms = filteredPrograms.length > 0 ? filteredPrograms : [{ id: 0, name: '', type: typeFilter, category: categoryFilter, startDate: '', endDate: '', status: '' }]

  return (
    <div className="ss-page">
      {enrollProgram && <EnrollModal program={enrollProgram} onClose={() => setEnrollProgram(null)} />}

      <div className="ss-outer-card">
        <h1 className="ss-page-title">Student Success</h1>

        <div className="ss-tabs-bar">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`ss-tab-btn${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'clubs' && (
          <div className="ss-content">
            <div className="ss-filter-row">
              <div className="ss-filter-group">
                <label className="ss-filter-label">Type</label>
                <div className="ss-select-wrap">
                  <select className="ss-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                    {SS_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="ss-filter-group">
                <label className="ss-filter-label">Category</label>
                <div className="ss-select-wrap">
                  <select className="ss-select" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                    {SS_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="ss-search-wrap">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  className="ss-search"
                  placeholder="Search Programs"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="ss-cards-grid">
              {displayPrograms.map((p, i) => (
                <div className="ss-program-card" key={p.id || i}>
                  <div className="ss-program-img"></div>
                  <div className="ss-program-info">
                    <div className="ss-program-meta">
                      <div className="ss-meta-row"><span className="ss-meta-label">Type:</span> <span className="ss-meta-val">{p.type}</span></div>
                      <div className="ss-meta-row"><span className="ss-meta-label">Category:</span> <span className="ss-meta-val">{p.category}</span></div>
                      <div className="ss-meta-row"><span className="ss-meta-label">Start Date:</span> <span className="ss-meta-val">{p.startDate}</span></div>
                      <div className="ss-meta-row"><span className="ss-meta-label">End Date:</span> <span className="ss-meta-val">{p.endDate}</span></div>
                      <div className="ss-meta-row"><span className="ss-meta-label">Status:</span> <span className="ss-meta-val">{p.status}</span></div>
                    </div>
                    <button className="ss-enroll-btn" onClick={() => setEnrollProgram(p)}>Enroll</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab !== 'clubs' && (
          <div className="ss-content">
            <div className="ss-empty-tab">
              <p>No records available.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentSuccess
