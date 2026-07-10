import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { HOTDOC_URL } from '../data/site.js'

const navItems = [
  { to: '/doctors', label: 'Our doctors' },
  { to: '/services', label: 'Services' },
  { to: '/billing', label: 'Billing' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header>
        <div className="wrap nav">
          <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <img src="/assets/logo-icon.png" alt="Parramatta Medical and Dental Centre logo" />
            <div className="brand-name">
              <span className="top">PARRAMATTA</span>
              <span className="bot">Medical and Dental Centre</span>
            </div>
          </Link>

          <nav
            className="links"
            style={
              menuOpen
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--paper)',
                    padding: '20px 28px',
                    borderBottom: '1px solid var(--line)',
                  }
                : undefined
            }
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="btn" href="tel:0283209300">Call 8320 9300</a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            MENU
          </button>
        </div>
      </header>

      <Outlet />

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="brand" style={{ textDecoration: 'none', marginBottom: 14 }}>
                <img src="/assets/logo-icon.png" alt="Parramatta Medical and Dental Centre logo" />
              </div>
              <p style={{ maxWidth: '36ch', color: 'rgba(255,255,255,0.6)' }}>
                Long-term, non-discriminatory care for patients of all ages — informed decisions
                start with clear communication.
              </p>
            </div>
            <div>
              <h4>Quick links</h4>
              <Link to="/doctors">Our doctors</Link>
              <Link to="/services">Services</Link>
              <Link to="/billing">Billing</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="tel:0283209300">(02) 8320 9300</a>
              <a href="https://www.parramattamedical.com.au" target="_blank" rel="noopener noreferrer">
                www.parramattamedical.com.au
              </a>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                Shop 1, 144 Marsden Street, Parramatta NSW 2150
              </p>
            </div>
            <div>
              <h4>Accreditation</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                Australian General Practice Accreditation Limited
              </p>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Parramatta Medical and Dental Centre</span>
            <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Bookings via HotDoc
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
