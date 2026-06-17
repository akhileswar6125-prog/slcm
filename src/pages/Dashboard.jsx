import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import NoticeBoard from '../components/NoticeBoard'
import StudentClubs from '../components/StudentClubs'
import StudentCard from '../components/StudentCard'
import ScheduleCard from '../components/ScheduleCard'
import AttendanceCard from '../components/AttendanceCard'
import studentData from '../data/student.json'

const SEMESTERS = [
  { label: '✓', state: 'completed' },
  { label: '✓', state: 'completed' },
  { label: '✓', state: 'completed' },
  { label: 'SEM IV', state: 'current' },
  { label: 'SEM V', state: 'upcoming' },
  { label: 'SEM VI', state: 'upcoming' },
  { label: 'SEM VII', state: 'upcoming' },
  { label: 'SEM VIII', state: 'upcoming' },
  { label: 'DEGREE AWARDED', state: 'upcoming', last: true },
]

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SEMESTER TRACKER */}
      <div className="sem-tracker-wrap">
        <div className="sem-tracker">
          {SEMESTERS.map((sem, i) => (
            <div
              key={i}
              className={`sem-item sem-${sem.state}${i === 0 ? ' sem-first' : ''}${sem.last ? ' sem-last' : ''}`}
            >
              {sem.label}
            </div>
          ))}
        </div>
      </div>

      {/* WELCOME */}
      <div className="welcome-text">Welcome, {studentData.name.split(' ')[0]}!</div>

      {/* CONTENT */}
      <div className="dashboard-content">

        {/* NOTICE BOARD */}
        <NoticeBoard />

        {/* THREE COLUMN GRID */}
        <div className="three-col-grid">
          <StudentClubs />
          <StudentCard />
          <ScheduleCard />
        </div>

        {/* ATTENDANCE */}
        <Link to="/attendance" className="att-link-wrap">
          <AttendanceCard />
        </Link>

      </div>
    </div>
  )
}

export default Dashboard
