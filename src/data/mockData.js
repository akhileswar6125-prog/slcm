// ── Attendance detail records (for modal) ──────────────────────────
export const ATTENDANCE_DETAILS = {
  'MAT 2201': {
    name: 'MAT 2201 : PROBABILITY AND OPTIMIZATION',
    records: [
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '27/04/2026, 02:00 pm', end: '27/04/2026, 03:00 pm', status: 'P' },
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '23/04/2026, 10:30 am', end: '23/04/2026, 11:30 am', status: 'P' },
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '21/04/2026, 11:30 am', end: '21/04/2026, 12:30 pm', status: 'P' },
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '20/04/2026, 02:00 pm', end: '20/04/2026, 03:00 pm', status: 'A' },
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '14/04/2026, 11:30 am', end: '14/04/2026, 12:30 pm', status: 'P' },
      { course: 'MAT 2201 : PROBABILITY AND OPTIMIZATION - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '11/04/2026, 02:00 pm', end: '11/04/2026, 03:00 pm', status: 'P' },
    ]
  },
  'CSS 2201': {
    name: 'CSS 2201 : DATABASE SYSTEMS',
    records: [
      { course: 'CSS 2201 : DATABASE SYSTEMS - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '28/04/2026, 09:00 am', end: '28/04/2026, 10:00 am', status: 'P' },
      { course: 'CSS 2201 : DATABASE SYSTEMS - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '24/04/2026, 09:00 am', end: '24/04/2026, 10:00 am', status: 'P' },
      { course: 'CSS 2201 : DATABASE SYSTEMS - 953-Semester-IV 25-26: Program Sec C', sem: 4, start: '22/04/2026, 09:00 am', end: '22/04/2026, 10:00 am', status: 'P' },
    ]
  },
}

export const ATTENDANCE_TABLE = [
  { name: 'MAT 2201 : PROBABILITY AND OPTIMIZATION', code: 'MAT 2201', total: 36, present: 30, absent: 6, pct: 83.33 },
  { name: 'CSS 2201 : DATABASE SYSTEMS',             code: 'CSS 2201', total: 50, present: 48, absent: 2, pct: 96.00 },
  { name: 'CSS 2202 : DESIGN & ANALYSIS OF ALGORITHMS', code: 'CSS 2202', total: 52, present: 44, absent: 8, pct: 84.62 },
  { name: 'CSS 2203 : INTRODUCTION TO ARTIFICIAL INTELLIGENCE', code: 'CSS 2203', total: 41, present: 34, absent: 7, pct: 82.93 },
  { name: 'CSS 2204 : OPERATING SYSTEMS',            code: 'CSS 2204', total: 39, present: 33, absent: 6, pct: 84.62 },
  { name: 'CSS 2211 : OPERATING SYSTEMS LAB',        code: 'CSS 2211', total: 13, present: 13, absent: 0, pct: 100.00 },
  { name: 'CSS 2212 : DATABASE SYSTEMS LAB',         code: 'CSS 2212', total: 12, present: 12, absent: 0, pct: 100.00 },
  { name: 'CSS 2213 : OBJECT - ORIENTED SOFTWARE DEVELOPMENT LAB', code: 'CSS 2213', total: 14, present: 13, absent: 1, pct: 92.86 },
]

// ── Courses by semester ────────────────────────────────────────────
export const COURSES_BY_SEM = {
  sem4: [
    { name: 'MAT 2201 : PROBABILITY AND OPTIMIZATION', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2204 : OPERATING SYSTEMS', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2201 : DATABASE SYSTEMS', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2202 : DESIGN & ANALYSIS OF ALGORITHMS', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2203 : INTRODUCTION TO ARTIFICIAL INTELLIGENCE', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2213 : OBJECT - ORIENTED SOFTWARE DEVELOPMENT LAB', type: 'Lab', cls: 'Core', credits: 2, sessions: 16, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2211 : OPERATING SYSTEMS LAB', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2212 : DATABASE SYSTEMS LAB', type: 'Lab', cls: 'Core', credits: 2, sessions: 16, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
  ],
  sem3: [
    { name: 'MAT 2101: Distrete Mathematical Strutures - 953', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2101: DATA STRUCTURES -CCE', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2102: DATA COMMUNICATION AND COMPUTER NETWORKS-CCE', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2103: DATA ANALYTICS-CCE', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2104: DIGITAL SYSTEMS AND COMPUTER ORGANIZATION-CCE', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2111: DATA STRUCTURES LAB-CCE', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
    { name: 'CSS 2112: DIGITAL SYSTEMS LAB-CCE', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: 'MIT Manipal : 2025 - 2026' },
  ],
  sem2: [
    { name: 'ENVIRONMENTAL STUDIES', type: 'Theory', cls: 'Core', credits: 2, sessions: 16, rereg: 'false', year: '' },
    { name: 'APPLIED CHEMISTRY FOR ENGINEERS', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'ENGINEERING MECHANICS AND SMART BUILDINGS', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'FUNDAMENTALS OF ELECTRICAL ENGINEERING', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'COMPUTER AIDED ENGINEERING GRAPHICS', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
    { name: 'DATA VISUALISATION', type: 'Theory', cls: 'Core', credits: 2, sessions: 16, rereg: 'false', year: '' },
    { name: 'COMPUTATIONAL MATHEMATICS - II', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: '' },
    { name: 'INTRODUCTION TO OBJECT ORIENTED PROGRAMMING', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'INTRODUCTION TO OBJECT ORIENTED PROGRAMMING LAB', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
  ],
  sem1: [
    { name: 'WORKSHOP PRACTICE', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
    { name: 'APPLIED PHYSICS FOR ENGINEERS', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'PROGRAMMING FOR PROBLEM SOLVING', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'PROGRAMMING FOR PROBLEM SOLVING LAB', type: 'Lab', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
    { name: 'FUNDAMENTALS OF ELECTRONICS', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
    { name: 'COMMUNICATION SKILLS IN ENGLISH‡', type: 'Theory', cls: 'Core', credits: 2, sessions: 16, rereg: 'false', year: '' },
    { name: 'HUMAN RIGHTS AND CONSTITUTION', type: 'Theory', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
    { name: 'UNIVERSAL HUMAN VALUES AND PROFESSIONAL ETHICS', type: 'Theory', cls: 'Core', credits: 1, sessions: 8, rereg: 'false', year: '' },
    { name: 'COMPUTATIONAL MATHEMATICS - I', type: 'Theory', cls: 'Core', credits: 4, sessions: 32, rereg: 'false', year: '' },
    { name: 'FUNDAMENTALS OF MECHANICAL ENGINEERING', type: 'Theory', cls: 'Core', credits: 3, sessions: 24, rereg: 'false', year: '' },
  ],
}

// ── Feedback / Survey ──────────────────────────────────────────────
export const FEEDBACK_DATA = [
  { no: 1,  course: 'MAT 2101: Distrete Mathematical Strutures - 953', faculty: 'Shrinath Hadimani', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 2,  course: 'MAT 2101: Distrete Mathematical Strutures - 953', faculty: 'Shrinath Hadimani', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 3,  course: 'CSS 2101: DATA STRUCTURES - CCE', faculty: 'Gangothri S.', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 4,  course: 'CSS 2101: DATA STRUCTURES - CCE', faculty: 'Gangothri S.', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 5,  course: 'CSS 2102: DATA COMMUNICATION AND COMPUTER NETWORKS-CCE', faculty: 'Chetana Pujari', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 6,  course: 'CSS 2102: DATA COMMUNICATION AND COMPUTER NETWORKS-CCE', faculty: 'Chetana Pujari', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 7,  course: 'CSS 2103: DATA ANALYTICS-CCE', faculty: 'Vibha Prabhu', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 8,  course: 'CSS 2103: DATA ANALYTICS-CCE', faculty: 'Vibha Prabhu', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 9,  course: 'CSS 2104: DIGITAL SYSTEMS AND COMPUTER ORGANIZATION-CCE', faculty: 'Siva Selvan N', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 10, course: 'CSS 2104: DIGITAL SYSTEMS AND COMPUTER ORGANIZATION-CCE', faculty: 'Siva Selvan N', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 11, course: 'CSS 2111: DATA STRUCTURES LAB-CCE', faculty: 'Gangothri S.', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 12, course: 'CSS 2111: DATA STRUCTURES LAB-CCE', faculty: 'Gangothri S.', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
]

// ── Student Success programs ───────────────────────────────────────
export const SS_PROGRAMS = [
  { id: 1, name: 'Web Development Bootcamp', type: 'Technical', category: 'Software Development', startDate: '15-07-2026', endDate: '30-08-2026', status: 'Open' },
  { id: 2, name: 'Machine Learning Fundamentals', type: 'Technical', category: 'IOS Development', startDate: '01-08-2026', endDate: '15-09-2026', status: 'Open' },
  { id: 3, name: 'Data Science with Python', type: 'Technical', category: 'Software Development', startDate: '10-07-2026', endDate: '25-08-2026', status: 'Open' },
  { id: 4, name: 'Biomedical Instrumentation', type: 'Technical', category: 'Biomedical Engineering', startDate: '20-07-2026', endDate: '10-09-2026', status: 'Closed' },
  { id: 5, name: 'Civil Infrastructure Design', type: 'Technical', category: 'Civil Engineering', startDate: '05-08-2026', endDate: '20-09-2026', status: 'Open' },
  { id: 6, name: 'International Exchange – Germany', type: 'Technical', category: 'International Student Exchange', startDate: '01-09-2026', endDate: '31-12-2026', status: 'Open' },
  { id: 7, name: 'iOS App Development', type: 'Technical', category: 'IOS Development', startDate: '15-07-2026', endDate: '30-08-2026', status: 'Open' },
  { id: 8, name: 'Mechanical Systems Design', type: 'Technical', category: 'Mechanical & Industrial Engineering', startDate: '20-07-2026', endDate: '05-09-2026', status: 'Open' },
]

export const SS_TYPES = ['Technical', 'Non-Technical', 'Cultural']
export const SS_CATEGORIES = ['All', 'Software Development', 'IOS Development', 'Biomedical Engineering', 'Civil Engineering', 'International Student Exchange', 'Mechanical & Industrial Engineering']

// ── Placement Drives ───────────────────────────────────────────────
export const PLACEMENT_DRIVES = []

// ── Feedback (Survey Invitations) extra rows ───────────────────────
export const FEEDBACK_EXTRA = [
  { no: 13, course: 'CSS 2112: DIGITAL SYSTEMS LAB-CCE', faculty: 'Siva Selvan N', type: 'Faculty Feedback', sem: 'III', status: 'NotStarted' },
  { no: 14, course: 'CSS 2112: DIGITAL SYSTEMS LAB-CCE', faculty: 'Siva Selvan N', type: 'Course Feedback', sem: 'III', status: 'NotStarted' },
  { no: 15, course: 'MAT 2201: PROBABILITY AND OPTIMIZATION', faculty: 'Lecturer A', type: 'Course Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 16, course: 'CSS 2201: DATABASE SYSTEMS', faculty: 'Lecturer B', type: 'Faculty Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 17, course: 'CSS 2202: DESIGN & ANALYSIS OF ALGORITHMS', faculty: 'Lecturer C', type: 'Course Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 18, course: 'CSS 2203: INTRODUCTION TO ARTIFICIAL INTELLIGENCE', faculty: 'Lecturer D', type: 'Faculty Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 19, course: 'CSS 2204: OPERATING SYSTEMS', faculty: 'Lecturer E', type: 'Course Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 20, course: 'CSS 2211: OPERATING SYSTEMS LAB', faculty: 'Lecturer F', type: 'Faculty Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 21, course: 'CSS 2212: DATABASE SYSTEMS LAB', faculty: 'Lecturer G', type: 'Course Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 22, course: 'CSS 2213: OOSD LAB', faculty: 'Lecturer H', type: 'Faculty Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 23, course: 'CSS 2213: OOSD LAB', faculty: 'Lecturer H', type: 'Course Feedback', sem: 'IV', status: 'NotStarted' },
  { no: 24, course: 'MAT 2201: PROBABILITY AND OPTIMIZATION', faculty: 'Lecturer A', type: 'Faculty Feedback', sem: 'IV', status: 'NotStarted' },
]

export const ALL_FEEDBACK = [...(typeof FEEDBACK_DATA !== 'undefined' ? [] : []), ...FEEDBACK_EXTRA]
