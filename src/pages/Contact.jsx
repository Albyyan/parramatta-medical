import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HOTDOC_URL } from '../data/site.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    reason: 'General medical appointment',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link to="/">Home</Link> / <span>Contact &amp; location</span></p>
          <h1>Marsden Street, Parramatta.</h1>
          <p>Call to book, or send an enquiry below and reception will get back to you during opening hours.</p>
        </div>
      </div>

      <section>
        <div className="wrap loc-grid">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 style={{ marginTop: 10, fontSize: 'clamp(26px,3vw,34px)' }}>Hours &amp; parking</h2>
            <table className="hours-table">
              <tbody>
                <tr className="today"><td>Monday</td><td>9:00am – 5:00pm</td></tr>
                <tr><td>Tuesday</td><td>9:00am – 5:00pm</td></tr>
                <tr><td>Wednesday</td><td>9:00am – 5:00pm</td></tr>
                <tr><td>Thursday</td><td>9:00am – 5:00pm</td></tr>
                <tr><td>Friday</td><td>9:00am – 5:00pm</td></tr>
                <tr><td>Saturday</td><td>8:00am – 4:00pm</td></tr>
                <tr><td>Sunday</td><td>Closed</td></tr>
              </tbody>
            </table>
            <ul className="park-list">
              <li><span className="mono">01</span> George Street public parking — 100m away</li>
              <li><span className="mono">02</span> Parramatta Park — up to 2hrs free, ~300m away</li>
              <li><span className="mono">03</span> Westfield Parramatta car park — 7 min walk</li>
            </ul>
          </div>
          <div>
            <div className="loc-photo">
              <img src="/assets/exterior-building.jpg" alt="Parramatta Medical and Dental Centre street-front building" />
            </div>
            <div className="addr-card">
              <h3>Parramatta Medical &amp; Dental Centre</h3>
              <address>Shop 1, 144 Marsden Street<br />Parramatta, NSW 2150</address>
              <a className="phone" href="tel:0283209300">(02) 8320 9300</a>
            </div>
          </div>
        </div>
      </section>

      <section className="tight" style={{ background: 'var(--tint)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Send an enquiry</p>
              <h2>Prefer to write instead of call?</h2>
            </div>
            <p>This form doesn&apos;t book an appointment on its own — reception will call or email you back to confirm a time.</p>
          </div>
          <div className="contact-grid">
            {submitted ? (
              <div className="form-card">
                <h3 style={{ fontSize: 19, marginBottom: 10 }}>Thanks — that&apos;s on its way.</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14.5 }}>
                  Reception will get back to you during opening hours. If it&apos;s urgent, call
                  (02) 8320 9300 instead.
                </p>
              </div>
            ) : (
              <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="phone" type="tel" required placeholder="04xx xxx xxx" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <label htmlFor="reason">What&apos;s this about?</label>
                  <select id="reason" name="reason" value={form.reason} onChange={handleChange}>
                    <option>General medical appointment</option>
                    <option>Dental check-up &amp; clean ($120 package)</option>
                    <option>Billing question</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Let us know what you need and when suits you" value={form.message} onChange={handleChange} />
                </div>
                <button className="btn" type="submit">Send enquiry</button>
                <p className="form-note">For anything urgent, please call (02) 8320 9300 directly rather than waiting on this form.</p>
              </form>
            )}

            <div>
              <div className="addr-card" style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 18 }}>Prefer HotDoc?</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginTop: 8 }}>
                  Book directly with a specific doctor and see real-time availability through HotDoc.
                </p>
                <a className="btn" style={{ marginTop: 16 }} href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">Book on HotDoc →</a>
              </div>
              <div className="addr-card">
                <h3 style={{ fontSize: 18 }}>Languages at reception</h3>
                <div className="lang-cloud" style={{ marginTop: 10 }}>
                  {['Bengali', 'English', 'Hindi', 'Punjabi', 'Tamil', 'Telugu'].map((l) => (
                    <span className="lang-pill" style={{ borderColor: 'var(--line)', color: 'var(--navy)' }} key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
