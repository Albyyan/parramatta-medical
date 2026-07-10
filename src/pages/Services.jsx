import { Link } from 'react-router-dom'

const medical = [
  'Family Medical & Dental', 'Kids Medical & Dental', "Women's Health", 'Vaccination',
  'On-site Pathology', 'Preventative Health', 'Weight Management', 'Diabetic Management',
  'Chronic Disease Management', 'Antenatal Care', 'Wound Care', 'Mental Health',
  'Travel Medicine', 'Skin Checks', 'Work Cover', 'Pre-employment Medicals',
]
const dental = [
  'Cosmetic Dentistry', 'Dental Implants', 'General Dentistry', 'Kids Dentistry',
  'Orthodontics', 'Emergency Dentist', 'Restorative Dentistry',
]
const allied = ['Physiotherapy', 'Dietitian', 'Acupuncturist', 'Podiatry', 'Clinical Psychology']

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link to="/">Home</Link> / <span>Services</span></p>
          <h1>Medical, dental and allied health, side by side.</h1>
          <p>The full list from our Marsden Street window — three practices in one visit, one address.</p>
        </div>
      </div>

      <div className="promo">
        <div className="wrap">
          <div className="msg">
            <span className="price">$120</span>
            <div className="text">
              <strong>Dental check-up &amp; clean package</strong>
              <span>No gap if you have private health fund</span>
            </div>
          </div>
          <a className="btn" href="tel:0283209300" style={{ background: 'var(--green-vivid)', borderColor: 'var(--green-vivid)' }}>
            Book the special →
          </a>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="service-cols">
            <div className="service-col">
              <h3>Medical</h3>
              <p className="tagline">Family &amp; kids&apos; medical</p>
              <ul>{medical.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-col dental">
              <h3>Dental</h3>
              <p className="tagline">Check-up &amp; clean, $120 package</p>
              <ul>{dental.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="service-col">
              <h3>Allied Health</h3>
              <p className="tagline">Onsite, same building</p>
              <ul>{allied.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tight" style={{ background: 'var(--tint)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Not sure which service fits?</p>
              <h2>See a doctor first — they&apos;ll refer you within the building.</h2>
            </div>
            <p>Since allied health and pathology are onsite, most referrals mean walking down the hall, not a second appointment elsewhere.</p>
          </div>
          <Link className="btn" to="/doctors">Meet the doctors →</Link>
        </div>
      </section>
    </>
  )
}
