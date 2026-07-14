import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { HOTDOC_URL, PHONE_DISPLAY, PHONE_HREF } from '../data/site.js'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/doctors', label: 'Our doctors' },
  { to: '/services', label: 'Services' },
  { to: '/billing', label: 'Billing' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open, and allow Esc to close it
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <>
      <header>
        <div className="wrap nav">
          <NavLink className="brand" to="/">
            <img src="/assets/logo-icon.png" alt="Parramatta Medical and Dental Centre logo" />
            <span className="brand-name">
              <span className="top">Parramatta Medical</span>
              <span className="bot">&amp; Dental Centre</span>
            </span>
          </NavLink>

          <nav className="links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a className="btn nav-cta" href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
            Book on HotDoc
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-scrim${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.to} style={{ transitionDelay: `${i * 35}ms` }}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mono idx">{String(i + 1).padStart(2, '0')}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-foot">
          <a className="btn" href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
            Book on HotDoc
          </a>
          <a className="btn btn-outline" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <NavLink className="brand" to="/">
              <img src="/assets/logo-icon.png" alt="Parramatta Medical and Dental Centre logo" />
            </NavLink>
            <p style={{ marginTop: 14, maxWidth: '34ch' }}>
              Family medical &amp; dental, allied health and onsite pathology, all under one roof
              on Marsden Street, Parramatta.
            </p>
          </div>
          <div>
            <h4>Practice</h4>
            <NavLink to="/doctors">Our doctors</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/billing">Billing</NavLink>
          </div>
          <div>
            <h4>Visit</h4>
            <NavLink to="/contact">Contact &amp; location</NavLink>
            <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">Book on HotDoc</a>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </div>
          <div>
            <h4>Find us</h4>
            <p>Shop 1, 144 Marsden Street</p>
            <p>Parramatta, NSW 2150</p>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>© {new Date().getFullYear()} Parramatta Medical &amp; Dental Centre</span>
          <span>Shop 1, 144 Marsden Street, Parramatta NSW 2150</span>
        </div>
      </footer>
    </>
  )
}
