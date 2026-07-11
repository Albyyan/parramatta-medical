import { Link } from 'react-router-dom'
import { HOTDOC_URL, PHONE_DISPLAY, PHONE_HREF, hours } from '../data/site.js'

export default function Home() {
  const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shop+1,+144+Marsden+Street,+Parramatta+NSW";

  function openLocationInMaps() {
    window.open(MAPS_URL, "_blank", "noopener,noreferrer");
  }

  function handlePhotoKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      openLocationInMaps();
    }
  }

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Marsden Street, Parramatta</p>
            <h1>
              Family medical <span className="accent">&amp;</span> dental,
              <br />
              under one roof.
            </h1>
            <p className="lede">
              GPs, dentists, allied health, and onsite pathology all in one place, with six languages spoken across our reception and doctors.
            </p>
            <div className="hero-actions">
              <a className="btn" href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">
                Book on HotDoc
              </a>
              <Link className="btn btn-outline" to="/doctors">Find a doctor</Link>
            </div>
          </div>
          <div
            className="hero-photo"
            role="button"
            tabIndex={0}
            onClick={openLocationInMaps}
            onKeyDown={handlePhotoKeyDown}
          >
            <img src="/assets/interior-reception.jpg" alt="Reception desk at Parramatta Medical and Dental Centre" />
            <div className="cap">SHOP 1, 144 MARSDEN STREET — RECEPTION</div>
          </div>
        </div>
      </section>

      <div className="facts">
        <div className="wrap">
          <div className="fact"><span className="num mono">01</span><p>Bulk billed Wednesday &amp; Saturday with Dr Baddam</p></div>
          <div className="fact"><span className="num mono">02</span><p>Open Mon–Fri 9–5, Sat 8–4</p></div>
          <div className="fact"><span className="num mono">03</span><p>Six languages spoken across the practice</p></div>
          <div className="fact"><span className="num mono">04</span><p>Onsite pathology &amp; allied health</p></div>
        </div>
      </div>

      <section>
        <div className="wrap loc-grid">
          <div>
            <p className="eyebrow">Opening hours</p>
            <h2 style={{ marginTop: 10, fontSize: 'clamp(27px,3.2vw,38px)' }}>When to find us open.</h2>
            <table className="hours-table">
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className={row.day === 'Monday' ? 'today' : undefined}>
                    <td>{row.day}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="addr-card" style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 19 }}>Book an appointment</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, marginTop: 8 }}>
                Book online through HotDoc, or call reception directly.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
                <a className="btn" href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">Book on HotDoc</a>
                <a className="btn btn-outline" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="addr-card">
              <h3 style={{ fontSize: 19 }}>Find your way around</h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, marginTop: 8, marginBottom: 14 }}>
                Doctors, services, billing and directions — just a click away.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="btn btn-outline" to="/doctors">Our doctors</Link>
                <Link className="btn btn-outline" to="/services">Services</Link>
                <Link className="btn btn-outline" to="/billing">Billing</Link>
                <Link className="btn btn-outline" to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
