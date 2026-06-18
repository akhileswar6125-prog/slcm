import React, { useState } from 'react'
import './Profile.css'
import studentData from '../data/student.json'
import studentPhoto from '../assets/student.jpeg'
import manipalLogo from '../assets/manipal_logo.png'

// ── helpers ────────────────────────────────────────────────────────
const INFO_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" style={{flexShrink:0}}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
)
const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2d6a2d" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const SPINNER_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" strokeDasharray="30 10"/>
  </svg>
)

function SectionHeader({ title, open, onToggle }) {
  return (
    <button className="prof-section-header" onClick={onToggle}>
      <svg
        width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#555" strokeWidth="2"
        style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', flexShrink: 0 }}
      >
        <polyline points="3 6 8 11 13 6"/>
      </svg>
      <span className="prof-section-title">{title}</span>
    </button>
  )
}

function FieldRow({ left, right }) {
  return (
    <div className="prof-field-grid">
      <FieldItem {...left} />
      {right && <FieldItem {...right} />}
    </div>
  )
}

function FieldItem({ label, value, info, orange, check, spinner }) {
  return (
    <div className="prof-field">
      <div className="prof-field-label">
        {label}
        {info && <span style={{marginLeft:4}}>{INFO_ICON}</span>}
      </div>
      <div className={`prof-field-value${orange ? ' orange' : ''}`}>
        {check && CHECK_ICON}
        {spinner && SPINNER_ICON}
        {value || (!check && !spinner ? '' : null)}
      </div>
      <div className="prof-field-divider"/>
    </div>
  )
}

function CollapsibleSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="prof-collapsible">
      <SectionHeader title={title} open={open} onToggle={() => setOpen(v => !v)} />
      {open && <div className="prof-collapsible-body">{children}</div>}
    </div>
  )
}

// ── Profile Hero ───────────────────────────────────────────────────
function ProfileHero() {
  return (
    <div className="prof-hero">
      <div className="prof-hero-inner">
        <img src={studentPhoto} alt="Student" className="prof-hero-photo" />
        <div className="prof-hero-enroll">{studentData.enrollmentNo}</div>
        <div className="prof-hero-name">{studentData.name}</div>
        <div className="prof-hero-contact-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:marella.mitmpl2024@learner.manipal.edu" className="prof-hero-link">
            marella.mitmpl2024@learner.manipal.edu
          </a>
        </div>
        <div className="prof-hero-contact-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 13 19.79 19.79 0 0 1 1.92 4.37a2 2 0 0 1 2-2.18H7a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span className="prof-hero-text">9059840832</span>
        </div>
      </div>
      <div className="prof-hero-info-bar">
        <div className="prof-info-item">
          <span className="prof-info-label">Institute Name :</span>
          <span className="prof-info-val"> Manipal Institute of Technology (MIT), Manipal</span>
        </div>
        <div className="prof-info-item">
          <span className="prof-info-label">Program Details :</span>
          <span className="prof-info-val"> {studentData.program}</span>
        </div>
        <div className="prof-info-item">
          <span className="prof-info-label">Ongoing Semester :</span>
          <span className="prof-info-val"> Semester IV</span>
        </div>
        <div className="prof-info-item">
          <span className="prof-info-label">Program Type :</span>
          <span className="prof-info-val"> B.Tech</span>
        </div>
        <div className="prof-info-item">
          <span className="prof-info-label">Program Code :</span>
          <span className="prof-info-val"> 953</span>
        </div>
        <div className="prof-info-item">
          <span className="prof-info-label">Date of Admission:</span>
          <span className="prof-info-val"> 01-07-2024</span>
        </div>
      </div>
    </div>
  )
}

// ── Person Account header ──────────────────────────────────────────
function PersonAccountHeader() {
  return (
    <div className="prof-pa-card">
      <div className="prof-pa-top">
        <div className="prof-pa-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </div>
        <div>
          <div className="prof-pa-label">Person Account</div>
          <div className="prof-pa-name">{studentData.name}</div>
        </div>
      </div>
      <div className="prof-pa-fields">
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Enrollment ID</div>
          <div className="prof-pa-field-val">{studentData.enrollmentNo}</div>
        </div>
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Phone (2)</div>
          <div className="prof-pa-field-val orange">9059840832</div>
        </div>
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Email</div>
          <div className="prof-pa-field-val orange">marella.mitmpl2024@learner.manipal.edu</div>
        </div>
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Roll Number</div>
          <div className="prof-pa-field-val">{studentData.rollNo}</div>
        </div>
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Status</div>
          <div className="prof-pa-field-val">{studentData.status}</div>
        </div>
        <div className="prof-pa-field">
          <div className="prof-pa-field-label">Sub-Status</div>
          <div className="prof-pa-field-val">Student</div>
        </div>
      </div>
    </div>
  )
}

// ── Tabs ───────────────────────────────────────────────────────────
const PROFILE_TABS = ['Student Details', 'Attachments']

// ── Student Information section ────────────────────────────────────
function StudentInformationSection() {
  return (
    <CollapsibleSection title="Student Information">
      <FieldRow
        left={{ label: 'Name', value: studentData.name }}
        right={{ label: 'Status', info: true, value: studentData.status }}
      />
      <FieldRow
        left={{ label: 'Student Name', info: true, value: '' }}
        right={{ label: 'Sub-Status', info: true, value: 'Student' }}
      />
      <FieldRow
        left={{ label: 'Date of Birth', info: true, value: '' }}
        right={{ label: 'Prequalification', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Age', info: true, value: '' }}
        right={{ label: 'Name of previous Institution', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Roll Number', info: true, value: studentData.rollNo }}
        right={{ label: 'Physically challenged', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Blood Group', value: '' }}
        right={{ label: 'Visually challenged', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Enrollment ID', info: true, value: studentData.enrollmentNo }}
        right={{ label: 'Sportsperson', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Citizenship', info: true, value: '' }}
        right={{ label: 'Sports Specialization', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Gender Identity', value: 'Male' }}
        right={{ label: 'Lateral Student', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Caste', value: '' }}
        right={{ label: 'Entrance Test Rank', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Marital status', info: true, value: '' }}
        right={{ label: 'Mother Tongue', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Date of Joining', info: true, value: '01/07/2024' }}
        right={{ label: 'Nationality', info: true, value: 'INDIAN' }}
      />
      <FieldRow
        left={{ label: 'Date of Leaving', info: true, value: '' }}
        right={{ label: 'Religion', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Admitted year', info: true, value: '2,024' }}
        right={{ label: 'Category', value: 'General' }}
      />
      <FieldRow
        left={{ label: 'Learner Category', info: true, value: '' }}
        right={{ label: 'Opted for Dual Degree?', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Drop Years', info: true, value: '' }}
        right={{ label: 'Any Disciplinary Action?', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Current Semester', info: true, value: 'IV' }}
        right={{ label: 'Fee Paid', info: true, check: true }}
      />
      <FieldRow
        left={{ label: 'Graduation Expected Date', info: true, value: '01/07/2028' }}
        right={{ label: 'No Dues', info: true, check: true }}
      />
      <FieldRow
        left={{ label: 'Number of Semesters Abroad', info: true, value: '' }}
        right={{ label: 'Opted for B.Tech honors?', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Opted for Reject and Rejoin', info: true, spinner: true }}
        right={{ label: 'Type of Scholarship', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Mentor Email', value: 'savitha.g@manipal.edu', orange: true }}
        right={{ label: 'SSP Id', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: '10th Grade Marks', info: true, value: '' }}
        right={{ label: 'Active Status', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: '12th Grade Marks', info: true, value: '' }}
        right={{ label: 'Branch Change', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'UG /Diploma /Other Graduate Degree CGPA', value: '' }}
        right={{ label: 'Area of Masters', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Overall Rank', info: true, value: '' }}
        right={{ label: 'Transfer Institute Name', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Is Withheld', spinner: true }}
        right={null}
      />
    </CollapsibleSection>
  )
}

// ── Contact Information section ────────────────────────────────────
function ContactInformationSection() {
  return (
    <CollapsibleSection title="Contact Information">
      <div className="prof-field-grid prof-contact-grid">
        <div className="prof-field">
          <div className="prof-field-label">Phone {INFO_ICON}</div>
          <div className="prof-field-value orange">9059840832</div>
          <div className="prof-field-divider"/>
          <div style={{height:12}}/>
          <div className="prof-field-label">Email</div>
          <div className="prof-field-value orange">marella.mitmpl2024@learner.manipal.edu</div>
          <div className="prof-field-divider"/>
          <div style={{height:12}}/>
          <div className="prof-field-label">Alternate email address {INFO_ICON}</div>
          <div className="prof-field-value"/>
          <div className="prof-field-divider"/>
          <div style={{height:12}}/>
          <div className="prof-field-label">State of Domicile</div>
          <div className="prof-field-value"/>
          <div className="prof-field-divider"/>
        </div>
        <div className="prof-field">
          <div className="prof-field-label">Permanent Address</div>
          <div className="prof-field-value orange">SHIVAM RESIDENCY KPHB ROAD NO 1, HYDERABAD TELANGANA HYDERABAD 500085</div>
          <div className="prof-field-value orange">TS</div>
          <div className="prof-field-value orange">IN</div>
          <div className="prof-map-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="160" fill="#e8f0e8"/>
              <rect x="0" y="0" width="300" height="160" fill="#d4e8d4" opacity="0.5"/>
              <path d="M0 80 Q75 60 150 80 Q225 100 300 80" stroke="#a8c8a8" strokeWidth="2" fill="none"/>
              <path d="M0 100 Q75 80 150 100 Q225 120 300 100" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <path d="M80 0 Q100 40 80 80 Q60 120 80 160" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <path d="M160 0 Q180 40 160 80 Q140 120 160 160" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <circle cx="150" cy="75" r="8" fill="#d4691a" opacity="0.9"/>
              <circle cx="150" cy="75" r="4" fill="#fff"/>
              <text x="150" y="130" textAnchor="middle" fontSize="9" fill="#555">Kukatpally, Hyderabad</text>
            </svg>
          </div>
          <div className="prof-field-divider" style={{marginTop:8}}/>
          <div style={{height:12}}/>
          <div className="prof-field-label">Same as Permanent address {INFO_ICON}</div>
          <div className="prof-field-value">{SPINNER_ICON}</div>
          <div className="prof-field-divider"/>
          <div style={{height:12}}/>
          <div className="prof-field-label">Current Address</div>
          <div className="prof-field-value orange">SHIVAM RESIDENCY KPHB ROAD NO 1, HYDERABAD TELANGANA HYDERABAD 500085</div>
          <div className="prof-field-value orange">TS</div>
          <div className="prof-field-value orange">IN</div>
          <div className="prof-map-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice">
              <rect width="300" height="160" fill="#e8f0e8"/>
              <rect x="0" y="0" width="300" height="160" fill="#d4e8d4" opacity="0.5"/>
              <path d="M0 80 Q75 60 150 80 Q225 100 300 80" stroke="#a8c8a8" strokeWidth="2" fill="none"/>
              <path d="M0 100 Q75 80 150 100 Q225 120 300 100" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <path d="M80 0 Q100 40 80 80 Q60 120 80 160" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <path d="M160 0 Q180 40 160 80 Q140 120 160 160" stroke="#a8c8a8" strokeWidth="1.5" fill="none"/>
              <circle cx="150" cy="75" r="8" fill="#d4691a" opacity="0.9"/>
              <circle cx="150" cy="75" r="4" fill="#fff"/>
              <text x="150" y="130" textAnchor="middle" fontSize="9" fill="#555">Kukatpally, Hyderabad</text>
            </svg>
          </div>
          <div className="prof-field-divider" style={{marginTop:8}}/>
          <div style={{height:12}}/>
          <div className="prof-field-label">Emergency Contact Person {INFO_ICON}</div>
          <div className="prof-field-value"/>
          <div className="prof-field-divider"/>
        </div>
      </div>
    </CollapsibleSection>
  )
}

// ── Identity Information ───────────────────────────────────────────
function IdentitySection() {
  return (
    <CollapsibleSection title="Identity Information">
      <FieldRow
        left={{ label: 'PAN card number', info: true, value: '' }}
        right={{ label: 'Visa Number', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Aadhar Card Number', info: true, value: '' }}
        right={{ label: 'Visa issued date', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Passport Number', info: true, value: '' }}
        right={{ label: 'Visa Expiry Date', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Passport issued date', info: true, value: '' }}
        right={{ label: 'Passport Expiry Date', info: true, value: '' }}
      />
    </CollapsibleSection>
  )
}

// ── Parents Information ────────────────────────────────────────────
function ParentsSection() {
  return (
    <CollapsibleSection title="Parents' Information">
      <FieldRow
        left={{ label: 'Fathers Name', info: true, value: 'MARELLA VENKATA REDDY' }}
        right={{ label: 'Guardian Name', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Father Contact Number', info: true, value: '9949248286', orange: true }}
        right={{ label: 'Guardian Contact number', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Father email id', info: true, value: 'reddyvenkata001@gmail.com', orange: true }}
        right={{ label: 'Guardian Email id', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Fathers Occupation', info: true, value: 'PRIVATE EMPLOYEE' }}
        right={{ label: 'Guardian Occupation', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Fathers Annual Income', info: true, value: '' }}
        right={{ label: 'Guardian Annual Income', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Mothers Name', info: true, value: 'MARELLA KALYANI' }}
        right={{ label: 'Presently Residing with', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Mother Contact Number', info: true, value: '6300590040', orange: true }}
        right={{ label: 'Emergency Contact Number', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Mother Email id', info: true, value: 'kalyani200303@gmail.com', orange: true }}
        right={{ label: 'Staff child', info: true, spinner: true }}
      />
      <FieldRow
        left={{ label: 'Mothers Occupation', info: true, value: '' }}
        right={{ label: 'Staff code', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Mothers Annual Income', info: true, value: '' }}
        right={{ label: 'Total Family income', info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Sponsor Name', info: true, value: '' }}
        right={{ label: "Sponsor's Address", info: true, value: '' }}
      />
      <FieldRow
        left={{ label: 'Parent Account Holder Name', value: '' }}
        right={{ label: 'Parent Bank Account No', value: '' }}
      />
      <FieldRow
        left={{ label: 'Parent Bank Branch Name', value: '' }}
        right={{ label: 'Parent Bank Name', value: '' }}
      />
      <FieldRow
        left={{ label: 'Parent IFS Code', value: '' }}
        right={null}
      />
      <FieldRow
        left={{ label: 'Description', value: '' }}
        right={null}
      />
      <div style={{display:'flex',justifyContent:'center',marginTop:20,paddingBottom:8}}>
        <a href="https://slcm.manipal.edu/" target="_blank" rel="noopener noreferrer" className="prof-slcm-btn">Navigate to SLCM 1.0</a>
      </div>
    </CollapsibleSection>
  )
}

// ── Student Clubs (reuse pattern from dashboard) ───────────────────
function ProfileStudentClubs() {
  const [open0, setOpen0] = useState(false)
  const [open1, setOpen1] = useState(false)
  const clubs = [
    { name: 'Dr. Savitha G Mentor Mentee III CCE C', detail: 'Academic mentor for Semester III, Computer and Communication Engineering, Section C.' },
    { name: 'Mr. Suhas K - Student Guardian', detail: 'Student guardian assigned for support and guidance throughout the academic journey.' },
  ]
  const opens = [open0, open1]
  const setOpens = [setOpen0, setOpen1]

  return (
    <div className="prof-clubs-card">
      <div className="prof-clubs-header">
        <div className="prof-clubs-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <span className="prof-clubs-title">Student Clubs</span>
        <a href="#" className="prof-ext-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d4691a" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
      <div className="prof-clubs-list">
        {clubs.map((c, i) => (
          <div key={i} className="prof-club-item">
            <button className="prof-club-btn" onClick={() => setOpens[i](v => !v)}>
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#d4691a" strokeWidth="2.5"
                style={{transform: opens[i] ? 'rotate(90deg)' : 'rotate(0deg)', transition:'transform 0.2s', flexShrink:0}}
              >
                <polyline points="3 2 9 6 3 10"/>
              </svg>
              <span>{c.name}</span>
            </button>
            {opens[i] && <div className="prof-club-body">{c.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Activity Section ───────────────────────────────────────────────
function ActivitySection() {
  return (
    <div className="prof-activity-card">
      <div className="prof-activity-top">
        <span className="prof-activity-filters">Filters: All time • All activities • All types</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>
      <div className="prof-activity-actions">
        <button className="prof-act-link">Refresh</button>
        <span className="prof-act-dot">•</span>
        <button className="prof-act-link">Expand All</button>
        <span className="prof-act-dot">•</span>
        <button className="prof-act-link">View All</button>
      </div>
      <div className="prof-upcoming-header">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#555" strokeWidth="2">
          <polyline points="2 5 7 9 12 5"/>
        </svg>
        <span>Upcoming &amp; Overdue</span>
      </div>
      <div className="prof-activity-empty">
        <p>No activities to show.</p>
        <p>Get started by sending an email, scheduling a task, and more.</p>
      </div>
      <div className="prof-activity-past">
        No past activity. Past meetings and tasks marked as done show up here.
      </div>
    </div>
  )
}

// ── Main Profile page ──────────────────────────────────────────────
function Profile() {
  const [activeTab, setActiveTab] = useState('Student Details')

  return (
    <div className="profile-page">
      <ProfileHero />
      <PersonAccountHeader />

      <div className="prof-tabs-bar">
        {PROFILE_TABS.map(tab => (
          <button
            key={tab}
            className={`prof-tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Student Details' && (
        <div className="prof-tab-content">
          <StudentInformationSection />
          <ContactInformationSection />
          <IdentitySection />
          <ParentsSection />
          <ProfileStudentClubs />
          <ActivitySection />
        </div>
      )}

      {activeTab === 'Attachments' && (
        <div className="prof-tab-content">
          <div className="prof-empty-tab">No attachments available.</div>
        </div>
      )}
    </div>
  )
}

export default Profile
