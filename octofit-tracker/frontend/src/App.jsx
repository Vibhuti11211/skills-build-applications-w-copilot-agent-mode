import { BrowserRouter, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { API_BASE_URL } from './api.js'
import './App.css'

const sections = [
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Members', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Workspace() {
  const location = useLocation()
  const activeSection = sections.find(({ path }) => path === location.pathname)

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/activities" aria-label="Octofit Tracker home">
          <img src={logo} alt="" />
          <span className="brand-name">
            <strong>Octofit</strong>
            <small>TRACKER</small>
          </span>
        </NavLink>

        <p className="nav-caption">TRAINING DESK</p>
        <nav className="primary-nav" aria-label="Main navigation">
          {sections.map(({ label, path }, index) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              key={path}
              to={path}
            >
              <span className="nav-number">0{index + 1}</span>
              <span>{label}</span>
              <span className="nav-arrow" aria-hidden="true">-&gt;</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="footer-mark" aria-hidden="true">OF</span>
          <span>
            <strong>Mergington High</strong>
            <small>FITNESS PROGRAM</small>
          </span>
        </div>
      </aside>

      <div className="workspace-main">
        <header className="topbar">
          <div className="breadcrumb">
            <span>OCTOFIT</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{activeSection?.label ?? 'Workspace'}</strong>
          </div>
          <div className="api-target">
            <span className="api-dot" />
            <span>API TARGET</span>
            <code>{new URL(API_BASE_URL).host}</code>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/activities" replace />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="*" element={<Navigate to="/activities" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-frame">
        <Workspace />
      </div>
    </BrowserRouter>
  )
}
