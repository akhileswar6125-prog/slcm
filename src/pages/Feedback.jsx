import React, { useState } from 'react'
import './Feedback.css'
import { FEEDBACK_DATA, FEEDBACK_EXTRA } from '../data/mockData.js'

const ALL_ROWS = [...FEEDBACK_DATA, ...FEEDBACK_EXTRA]

function Feedback() {
  const [semFilter, setSemFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const sems = ['All', 'III', 'IV']
  const types = ['All', 'Course Feedback', 'Faculty Feedback']
  const statuses = ['All', 'NotStarted', 'Completed']

  const filtered = ALL_ROWS.filter(r => {
    const matchSem = semFilter === 'All' || r.sem === semFilter
    const matchType = typeFilter === 'All' || r.type === typeFilter
    const matchStatus = statusFilter === 'All' || r.status === statusFilter
    return matchSem && matchType && matchStatus
  })

  const reset = () => { setSemFilter('All'); setTypeFilter('All'); setStatusFilter('All') }

  return (
    <div className="feedback-page">
      <div className="fb-outer-card">
        <div className="fb-header-row">
          <div className="fb-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <span className="fb-page-title">Survey Invitations</span>
        </div>

        <div className="fb-filters">
          <div className="fb-filter-group">
            <label className="fb-filter-label">Semester</label>
            <div className="fb-select-wrap">
              <select className="fb-select" value={semFilter} onChange={e => setSemFilter(e.target.value)}>
                {sems.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="fb-filter-group">
            <label className="fb-filter-label">Feedback Type</label>
            <div className="fb-select-wrap">
              <select className="fb-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                {types.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="fb-filter-group">
            <label className="fb-filter-label">Feedback Status</label>
            <div className="fb-select-wrap">
              <select className="fb-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                {statuses.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <button className="fb-reset-btn" onClick={reset}>Reset Filters</button>
        </div>

        <div className="fb-count">Showing {filtered.length} of {ALL_ROWS.length} records</div>

        <div className="fb-table-wrap">
          <table className="fb-table">
            <thead>
              <tr>
                <th className="fb-th fb-th-no"></th>
                <th className="fb-th">Course Name <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
                <th className="fb-th">Faculty Name <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
                <th className="fb-th">Feedback Type <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
                <th className="fb-th">Semester <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
                <th className="fb-th">Status <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
                <th className="fb-th">Feedback URL <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 5 6.5 9 11 5"/></svg></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="fb-tr">
                  <td className="fb-td fb-td-no">{i + 1}</td>
                  <td className="fb-td">{row.course}</td>
                  <td className="fb-td">{row.faculty}</td>
                  <td className="fb-td">{row.type}</td>
                  <td className="fb-td">{row.sem}</td>
                  <td className="fb-td">{row.status}</td>
                  <td className="fb-td"><a href="#" className="fb-open-link">Open Feedback</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Feedback
