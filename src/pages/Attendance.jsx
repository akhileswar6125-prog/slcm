import React, { useState } from 'react'
import './Attendance.css'
import studentData from '../data/student.json'
import { ATTENDANCE_TABLE, ATTENDANCE_DETAILS } from '../data/mockData.js'

function SortIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" style={{marginLeft:3,verticalAlign:'middle'}}>
      <polyline points="2 5 6.5 9 11 5"/>
    </svg>
  )
}

function AttendanceModal({ onClose }) {
  const [selectedCourse, setSelectedCourse] = useState(ATTENDANCE_TABLE[0].code)
  const [search, setSearch] = useState('')

  const detail = ATTENDANCE_DETAILS[selectedCourse]
  const records = detail
    ? detail.records.filter(r =>
        r.course.toLowerCase().includes(search.toLowerCase()) ||
        r.status.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="att-modal-box" onClick={e => e.stopPropagation()}>
        <button className="att-modal-close" onClick={onClose}>✕</button>
        <h2 className="att-modal-title">Attendance Report - Semester IV</h2>

        <div className="att-modal-field">
          <label className="att-modal-label">Select Course</label>
          <div className="att-modal-select-wrap">
            <select className="att-modal-select" value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
              {ATTENDANCE_TABLE.map(r => (
                <option key={r.code} value={r.code}>{r.name}</option>
              ))}
            </select>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#555" strokeWidth="1.5" style={{position:'absolute',right:10,pointerEvents:'none'}}><polyline points="2 5 7 9 12 5"/></svg>
          </div>
        </div>

        <div className="att-modal-search">
          <label className="att-modal-label">Search</label>
          <div className="att-search-input-wrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              placeholder="Search by Course Name, Semester, or Status"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <h3 className="att-modal-sub">Attendance Details</h3>
        <div className="att-modal-table-wrap">
          <table className="att-modal-table">
            <thead>
              <tr>
                <th>Course Name <SortIcon /></th>
                <th>Semester <SortIcon /></th>
                <th>Start Date Time <SortIcon /></th>
                <th>End Date Time <SortIcon /></th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              {records.length > 0 ? records.map((r, i) => (
                <tr key={i}>
                  <td>{r.course}</td>
                  <td>{r.sem}</td>
                  <td>{r.start}</td>
                  <td>{r.end}</td>
                  <td className={`att-status ${r.status === 'P' ? 'present' : 'absent'}`}>{r.status}</td>
                </tr>
              )) : (
                <tr><td colSpan="5" className="att-no-data">No records found</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="att-modal-footer">
          <button className="att-modal-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

function Attendance() {
  const [showModal, setShowModal] = useState(false)
  const [semester, setSemester] = useState('Semester IV')
  const [academicYear, setAcademicYear] = useState('2025-2026')

  const avgPct = (ATTENDANCE_TABLE.reduce((s, r) => s + r.pct, 0) / ATTENDANCE_TABLE.length).toFixed(2)

  return (
    <div className="attendance-page">
      {showModal && <AttendanceModal onClose={() => setShowModal(false)} />}

      <div className="att-header-card">
        <div className="att-header-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <div className="att-header-info">
          <div className="att-header-col">
            <div className="att-hdr-label">Name</div>
            <div className="att-hdr-value">{studentData.name}</div>
          </div>
          <div className="att-header-col">
            <div className="att-hdr-label">Enrollment Number</div>
            <div className="att-hdr-value">{studentData.enrollmentNo}</div>
          </div>
          <div className="att-header-col">
            <div className="att-hdr-label">Current Semester</div>
            <div className="att-hdr-value">IV</div>
          </div>
        </div>
        <button className="att-report-btn" onClick={() => setShowModal(true)}>
          Get Attendance Report
        </button>
      </div>

      <div className="att-table-card">
        <div className="att-filters">
          <div className="att-filter-group">
            <label className="att-filter-label">Select Semester</label>
            <div className="att-select-wrap">
              <select className="att-select" value={semester} onChange={e => setSemester(e.target.value)}>
                <option>Semester IV</option>
                <option>Semester III</option>
                <option>Semester II</option>
                <option>Semester I</option>
              </select>
            </div>
          </div>
          <div className="att-filter-group">
            <label className="att-filter-label">Select Academic Year</label>
            <div className="att-select-wrap">
              <select className="att-select" value={academicYear} onChange={e => setAcademicYear(e.target.value)}>
                <option>2025-2026</option>
                <option>2024-2025</option>
                <option>2023-2024</option>
              </select>
            </div>
          </div>
          <div className="att-avg-display">
            Average Attendance: {avgPct}%
          </div>
        </div>

        <div className="att-main-table-wrap">
          <table className="att-main-table">
            <thead>
              <tr>
                <th className="att-main-th">Course Name <SortIcon /></th>
                <th className="att-main-th">Course Code <SortIcon /></th>
                <th className="att-main-th">Total Classes <SortIcon /></th>
                <th className="att-main-th">Present <SortIcon /></th>
                <th className="att-main-th">Absent <SortIcon /></th>
                <th className="att-main-th">Attendance Percentage <SortIcon /></th>
              </tr>
            </thead>
            <tbody>
              {ATTENDANCE_TABLE.map((row, i) => (
                <tr key={i} className="att-main-tr">
                  <td className="att-main-td">{row.name}</td>
                  <td className="att-main-td">{row.code}</td>
                  <td className="att-main-td">{row.total}</td>
                  <td className="att-main-td">{row.present}</td>
                  <td className="att-main-td">{row.absent}</td>
                  <td className="att-main-td">
                    <span className="att-pct-pill">{row.pct.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attendance
