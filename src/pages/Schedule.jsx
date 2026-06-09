import React, { useState } from 'react'
import './Schedule.css'

const DAYS_LABELS = ['SUN 7', 'MON 8', 'TUE 9', 'WED 10', 'THU 11', 'FRI 12', 'SAT 13']
const HOURS = [
  '12am','1am','2am','3am','4am','5am','6am','7am','8am','9am','10am','11am',
  '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm'
]
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getDaysInMonth(year, month) { return new Date(year, month + 1, 0).getDate() }
function getFirstDayOfMonth(year, month) { return new Date(year, month, 1).getDay() }

function MiniCalendar({ year, month, today, onPrev, onNext }) {
  const days = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const prevMonthDays = getDaysInMonth(year, month === 0 ? 11 : month - 1)
  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push({ d: prevMonthDays - firstDay + i + 1, other: true })
  for (let d = 1; d <= days; d++) cells.push({ d, other: false })
  while (cells.length % 7 !== 0) cells.push({ d: cells.length - firstDay - days + 1, other: true })
  const rows = []
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7))

  return (
    <div className="mini-cal">
      <div className="mini-cal-nav">
        <button className="mini-cal-arr" onClick={onPrev}>◄</button>
        <span className="mini-cal-title">{MONTH_NAMES[month].toUpperCase()}</span>
        <button className="mini-cal-arr" onClick={onNext}>►</button>
        <select className="mini-cal-year" defaultValue={year}>
          {[2024,2025,2026,2027,2028].map(y => <option key={y}>{y}</option>)}
        </select>
      </div>
      <table className="mini-cal-table">
        <thead>
          <tr>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <th key={d}>{d}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const isToday = !cell.other && cell.d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                return (
                  <td key={ci} className={`mini-cal-day${isToday ? ' today' : ''}${cell.other ? ' other-month' : ''}`}>
                    {cell.d}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Schedule() {
  const today = new Date()
  const [calMonth, setCalMonth] = useState(today.getMonth())
  const [calYear, setCalYear] = useState(today.getFullYear())

  const handlePrevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
  }
  const handleNextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
  }

  const todayStr = `${String(today.getDate()).padStart(2,'0')}-${String(today.getMonth()+1).padStart(2,'0')}-${today.getFullYear()}`

  return (
    <div className="schedule-page">
      <div className="schedule-layout">
        {/* MAIN CALENDAR */}
        <div className="schedule-main">
          <div className="cal-header">
            <div className="cal-header-left">
              <div className="cal-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <div className="cal-title">Calendar</div>
                <div className="cal-date-range">7 June 2026–13 June 2026</div>
              </div>
            </div>
            <div className="cal-controls">
              <button className="cal-arr-btn">‹</button>
              <button className="cal-arr-btn">›</button>
              <button className="cal-today-btn">Today</button>
              <button className="cal-icon-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1zM23 12H2M23 20H2"/>
                </svg>
              </button>
              <button className="cal-view-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="2 3 5 7 8 3"/></svg>
              </button>
              <button className="cal-list-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="week-grid-wrap">
            <div className="week-grid">
              <div className="week-day-headers">
                <div className="week-tz">GMT +5:30</div>
                {DAYS_LABELS.map((d, i) => (
                  <div key={d} className={`week-day-header${i === 1 ? ' today' : ''}`}>{d}</div>
                ))}
              </div>
              <div className="week-body">
                {HOURS.map(h => (
                  <div key={h} className="week-hour-row">
                    <div className="week-hour-label">{h}</div>
                    {DAYS_LABELS.map(d => <div key={d} className="week-cell" />)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="schedule-sidebar">
          <div className="schedule-for-day-card">
            <div className="sfd-header">
              <div className="icon-box" style={{background:'#d4691a'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span className="sfd-title">Schedule For the Day</span>
              <a href="#" className="sfd-ext">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
            <div className="sfd-chip">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {todayStr}
            </div>
          </div>

          <MiniCalendar year={calYear} month={calMonth} today={today} onPrev={handlePrevMonth} onNext={handleNextMonth} />

          <div className="my-calendars-card">
            <div className="mc-title">My Calendars</div>
            <div className="mc-item">
              <span className="mc-dot" style={{background:'#1a7ab5'}}></span>
              <span className="mc-label">My Events</span>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="#555" strokeWidth="1.5"><polyline points="2 5 7 9 12 5"/></svg>
            </div>
          </div>

          <div className="other-calendars-card">
            <div className="oc-header">
              <span className="mc-title">Other Calendars</span>
              <button className="oc-gear">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
