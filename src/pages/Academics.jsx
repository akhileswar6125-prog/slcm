import React, { useState } from 'react'
import './Academics.css'
import studentData from '../data/student.json'
import internalResultsData from '../data/internalResults.json'
import resultsData from '../data/results.json'
import { COURSES_BY_SEM } from '../data/mockData.js'

const TABS = [
  { key: 'ongoing', label: 'Ongoing Semester' },
  { key: 'courses', label: 'Courses Enrolled' },
  { key: 'internal', label: 'Internal Result' },
  { key: 'result', label: 'Result' },
]

const SEMESTER_OPTIONS = [
  { value: 'sem4', label: 'Semester - IV' },
  { value: 'sem3', label: 'Semester - III' },
  { value: 'sem2', label: 'Semester - II' },
  { value: 'sem1', label: 'Semester - I' },
]

const INTERNAL_SEM4 = [
  { courseCode: 'MAT 2201', courseName: 'MAT 2201 : PROBABILITY AND OPTIMIZATION', credits: 3, attendance: 83.33, caMarks: 19, mtaMarks: 16 },
  { courseCode: 'CSS 2204', courseName: 'CSS 2204 : OPERATING SYSTEMS', credits: 3, attendance: 84.62, caMarks: 19, mtaMarks: 17 },
  { courseCode: 'CSS 2201', courseName: 'CSS 2201 : DATABASE SYSTEMS', credits: 4, attendance: 96, caMarks: 19, mtaMarks: 23 },
  { courseCode: 'CSS 2202', courseName: 'CSS 2202 : DESIGN & ANALYSIS OF ALGORITHMS', credits: 4, attendance: 84.62, caMarks: 19, mtaMarks: 17 },
  { courseCode: 'CSS 2203', courseName: 'CSS 2203 : INTRODUCTION TO ARTIFICIAL INTELLIGENCE', credits: 3, attendance: 82.93, caMarks: 17, mtaMarks: 15 },
  { courseCode: 'CSS 2213', courseName: 'CSS 2213 : OBJECT - ORIENTED SOFTWARE DEVELOPMENT LAB', credits: 2, attendance: 92.86, caMarks: 49, mtaMarks: 0 },
  { courseCode: 'CSS 2211', courseName: 'CSS 2211 : OPERATING SYSTEMS LAB', credits: 1, attendance: 100, caMarks: 50, mtaMarks: 0 },
  { courseCode: 'CSS 2212', courseName: 'CSS 2212 : DATABASE SYSTEMS LAB', credits: 2, attendance: 100, caMarks: 54, mtaMarks: 0 },
]

const RESULT_SEM4 = [
    { "courseCode": "MAT 2201", "courseName": "Probability and Optimization", "internalMarks": 35, "grade": "C" },
    { "courseCode": "CSS 2204", "courseName": "Operating Systems", "internalMarks": 36, "grade": "C" },
    { "courseCode": "CSS 2201", "courseName": "Database Systems", "internalMarks": 42, "grade": "C" },
    { "courseCode": "CSS 2202", "courseName": "Design and Analysis of Algorithms", "internalMarks": 36, "grade": "B" },
    { "courseCode": "CSS 2203", "courseName": "Introduction to Artificial Intelligence", "internalMarks": 32, "grade": "D" },
    { "courseCode": "CSS 2213", "courseName": "Object Oriented Software Development Lab", "internalMarks": 49, "grade": "C" },
    { "courseCode": "CSS 2211", "courseName": "Operating Systems Lab", "internalMarks": 50, "grade": "B" },
    { "courseCode": "CSS 2212", "courseName": "Database Systems Lab", "internalMarks": 54, "grade": "A" }
  ]

function SortIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" style={{marginLeft:3,verticalAlign:'middle',flexShrink:0}}>
      <polyline points="2 5 6.5 9 11 5"/>
    </svg>
  )
}

function AcadIcon() {
  return (
    <div className="ac-progress-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    </div>
  )
}

function ResultIcon() {
  return (
    <div className="ac-result-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    </div>
  )
}

function SemSelector({ value, onChange, children }) {
  return (
    <div className="ac-sem-selector">
      <div className="ac-sel-label">Select Semester</div>
      <div className="ac-select-wrap">
        <select className="ac-select" value={value} onChange={e => onChange(e.target.value)}>
          {SEMESTER_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
      {children}
    </div>
  )
}

function OngoingSemesterTab() {
  return (
    <div className="ac-tab-content">
      <div className="ac-progress-card">
        <AcadIcon />
        <div>
          <div className="ac-progress-title">Progress &amp; Grades</div>
          <div className="ac-progress-sub">{studentData.program}</div>
        </div>
      </div>
      <div className="ac-info-card">
        <div className="ac-info-header">
          <div className="ac-person-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" strokeWidth="0">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <div className="ac-info-name">{studentData.name}</div>
        </div>
        <div className="ac-info-badge-row">
          <div className="ac-info-badge">Current</div>
        </div>
        <div className="ac-info-fields">
          <div className="ac-field-row">
            <div className="ac-field">
              <span className="ac-field-label">Enrollment No:</span>
              <span className="ac-field-value"> {studentData.enrollmentNo}</span>
            </div>
            <div className="ac-field">
              <span className="ac-field-label">Roll No:</span>
              <span className="ac-field-value"> {studentData.rollNo}</span>
            </div>
          </div>
          <div className="ac-field-row">
            <div className="ac-field">
              <span className="ac-field-label">Academic Semester:</span>
              <span className="ac-field-value"> IV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CoursesEnrolledTab() {
  const [semester, setSemester] = useState('sem4')
  const rows = COURSES_BY_SEM[semester] || []
  return (
    <div className="ac-tab-content">
      <div className="ac-progress-card">
        <AcadIcon />
        <div>
          <div className="ac-progress-title">Progress Enrolled</div>
          <div className="ac-progress-sub">{studentData.program}</div>
        </div>
      </div>
      <div className="ac-table-card">
        <div className="ac-table-layout">
          <SemSelector value={semester} onChange={setSemester} />
          <div className="ac-table-wrap">
            <table className="ac-table">
              <thead>
                <tr>
                  <th className="ac-th ac-th-name">Name <SortIcon /></th>
                  <th className="ac-th">Subject Type <SortIcon /></th>
                  <th className="ac-th">Subject Class <SortIcon /></th>
                  <th className="ac-th">Credits <SortIcon /></th>
                  <th className="ac-th">Sessions <SortIcon /></th>
                  <th className="ac-th">Re-registered <SortIcon /></th>
                  <th className="ac-th">Year <SortIcon /></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="ac-tr">
                    <td className="ac-td ac-td-name">{row.name}</td>
                    <td className="ac-td">{row.type}</td>
                    <td className="ac-td">{row.cls}</td>
                    <td className="ac-td">{row.credits}</td>
                    <td className="ac-td">{row.sessions}</td>
                    <td className="ac-td">{row.rereg}</td>
                    <td className="ac-td">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function InternalResultTab() {
  const [semester, setSemester] = useState('sem4')

  const getRows = () => {
    if (semester === 'sem4') return INTERNAL_SEM4
    const key = semester === 'sem3' ? 'semester3' : semester === 'sem2' ? 'semester2' : 'semester1'
    return (internalResultsData[key] || []).map(c => ({
      courseCode: c.courseCode,
      courseName: `${c.courseCode} : ${c.courseName.toUpperCase()}`,
      credits: '-',
      attendance: '-',
      caMarks: c.internalMarks || '-',
      mtaMarks: '-',
    }))
  }

  return (
    <div className="ac-tab-content">
      <div className="ac-result-header-card">
        <ResultIcon />
        <div className="ac-result-header-fields">
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Name</div>
            <div className="ac-rh-value">{studentData.name}</div>
          </div>
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Enrollment Number</div>
            <div className="ac-rh-value">{studentData.enrollmentNo}</div>
          </div>
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Current Semester</div>
            <div className="ac-rh-value">IV</div>
          </div>
        </div>
      </div>
      <div className="ac-table-card">
        <div className="ac-table-layout">
          <SemSelector value={semester} onChange={setSemester} />
          <div className="ac-table-wrap">
            <table className="ac-table">
              <thead>
                <tr>
                  <th className="ac-th">Course Code <SortIcon /></th>
                  <th className="ac-th ac-th-name">Course Name <SortIcon /></th>
                  <th className="ac-th">Credits <SortIcon /></th>
                  <th className="ac-th">Attendance % <SortIcon /></th>
                  <th className="ac-th">CA Marks <SortIcon /></th>
                  <th className="ac-th">MTA Marks <SortIcon /></th>
                </tr>
              </thead>
              <tbody>
                {getRows().map((row, i) => (
                  <tr key={i} className="ac-tr">
                    <td className="ac-td">{row.courseCode}</td>
                    <td className="ac-td ac-td-name">{row.courseName}</td>
                    <td className="ac-td">{row.credits}</td>
                    <td className="ac-td">{row.attendance}</td>
                    <td className="ac-td">{row.caMarks}</td>
                    <td className="ac-td">{row.mtaMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResultTab() {
  const [semester, setSemester] = useState('sem4')

  const SEM_STATS = {
    sem4: { gpa: resultsData.semester4.gpa, credits: resultsData.semester4.credits },
    sem3: { gpa: resultsData.semester3.gpa, credits: resultsData.semester3.credits },
    sem2: { gpa: resultsData.semester2.gpa, credits: resultsData.semester2.credits },
    sem1: { gpa: resultsData.semester1.gpa, credits: resultsData.semester1.credits },
  }

  const getRows = () => {
    if (semester === 'sem4') return RESULT_SEM4
    const key = semester === 'sem3' ? 'semester3' : semester === 'sem2' ? 'semester2' : 'semester1'
    return (internalResultsData[key] || []).map(c => ({
      courseCode: c.courseCode,
      courseName: `${c.courseCode} : ${c.courseName.toUpperCase()}`,
      internalMarks: c.internalMarks || '-',
      grade: c.grade || '-',
    }))
  }

  const stats = SEM_STATS[semester]

  return (
    <div className="ac-tab-content">
      <div className="ac-result-header-card">
        <ResultIcon />
        <div className="ac-result-header-fields">
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Name</div>
            <div className="ac-rh-value">{studentData.name}</div>
          </div>
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Enrollment Number</div>
            <div className="ac-rh-value">{studentData.enrollmentNo}</div>
          </div>
          <div className="ac-result-header-col">
            <div className="ac-rh-label">Current Semester</div>
            <div className="ac-rh-value">IV</div>
          </div>
        </div>
      </div>
      <div className="ac-table-card">
        <div className="ac-table-layout">
          <SemSelector value={semester} onChange={setSemester}>
            <div className="ac-stats-list">
              <div className="ac-stat-row"><span className="ac-stat-label">Total Credits Earned:</span>{resultsData.totalCredits}</div>
              <div className="ac-stat-row"><span className="ac-stat-label">Credit Earned:</span>{stats.credits}</div>
              <div className="ac-stat-row"><span className="ac-stat-label">GPA:</span>{stats.gpa}</div>
              <div className="ac-stat-row"><span className="ac-stat-label">CGPA:</span>{resultsData.cgpa}</div>
              <div className="ac-stat-row"><span className="ac-stat-label">Avg. Attendance:</span></div>
              <div className="ac-stat-row"><span className="ac-stat-label">Semester Rank:</span></div>
              <div className="ac-stat-row"><span className="ac-stat-label">Overall Rank:</span></div>
            </div>
          </SemSelector>
          <div className="ac-table-wrap">
            <table className="ac-table">
              <thead>
                <tr>
                  <th className="ac-th">Course Code <SortIcon /></th>
                  <th className="ac-th ac-th-wide">Course Name <SortIcon /></th>
                  <th className="ac-th">Internal Marks <SortIcon /></th>
                  <th className="ac-th">Grade <SortIcon /></th>
                </tr>
              </thead>
              <tbody>
                {getRows().map((row, i) => (
                  <tr key={i} className="ac-tr">
                    <td className="ac-td">{row.courseCode}</td>
                    <td className="ac-td">{row.courseName}</td>
                    <td className="ac-td">{row.internalMarks}</td>
                    <td className="ac-td">{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Academics() {
  const [activeTab, setActiveTab] = useState('ongoing')
  return (
    <div className="academics-page">
      <div className="ac-outer-card">
        <div className="ac-tabs-bar">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`ac-tab-btn${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === 'ongoing' && <OngoingSemesterTab />}
        {activeTab === 'courses' && <CoursesEnrolledTab />}
        {activeTab === 'internal' && <InternalResultTab />}
        {activeTab === 'result' && <ResultTab />}
      </div>
    </div>
  )
}

export default Academics
