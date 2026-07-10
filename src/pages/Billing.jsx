import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Are you bulk billing or private billing?',
    a: "We're a mixed billing practice. Some appointments are bulk billed — including every Wednesday and Saturday with Dr Baddam — and others are privately billed depending on the doctor, the day and the complexity of the visit.",
  },
  {
    q: 'Who qualifies for bulk billing outside those days?',
    a: 'Pensioner Concession Card holders, Veteran (DVA) Card holders, Healthcare Card holders, and children under 16 are eligible for bulk billing across the practice.',
  },
  {
    q: 'Can I claim a Medicare rebate for a phone consultation?',
    a: "Yes, provided you've seen a practitioner at this practice in person within the past 12 months. Without that recent visit, the rebate doesn't apply.",
  },
  {
    q: 'Do I need to pay upfront for private health extras?',
    a: 'No — we use HICAPS for on-the-spot claiming, so you only pay the gap between our fee and your fund\u2019s rebate, not the full amount.',
  },
  {
    q: "What if I'm not sure which billing applies to me?",
    a: 'Call reception on (02) 8320 9300 before you book — they can check your card, your fund, and the specific appointment type and tell you the likely cost.',
  },
]

export default function Billing() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link to="/">Home</Link> / <span>Billing</span></p>
          <h1>Mixed billing, explained plainly.</h1>
          <p>Fees vary with complexity — call reception for a quote before you book if you&apos;d like one.</p>
        </div>
      </div>

      <section className="billing-page-section">
        <div className="wrap">
          <div className="billing-grid">
            <div>
              <h4 className="subhead">How billing works here</h4>
              <ul className="billing-list">
                <li><span className="mono">01</span> Bulk billed Wednesday &amp; Saturday when booked with Dr Baddam</li>
                <li><span className="mono">02</span> Bulk billing available for Pensioner Concession &amp; Veteran (DVA) card holders</li>
                <li><span className="mono">03</span> Bulk billing available for Healthcare Card holders and children under 16</li>
                <li><span className="mono">04</span> HICAPS on the spot, so you pay only the gap</li>
                <li><span className="mono">05</span> Telehealth Medicare rebate needs a visit to the practice in the past 12 months</li>
              </ul>
            </div>
            <div>
              <h4 className="subhead">Languages spoken</h4>
              <div className="lang-cloud">
                {['Bengali', 'English', 'Hindi', 'Punjabi', 'Tamil', 'Telugu'].map((l) => (
                  <span className="lang-pill" key={l}>{l}</span>
                ))}
              </div>
              <h4 className="subhead" style={{ marginTop: 26 }}>Payment methods</h4>
              <div className="pay-row">
                {['Cash', 'EFTPOS', 'Visa', 'Mastercard', 'Afterpay', 'Zip'].map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2>Billing, answered.</h2>
            </div>
            <p>The short version of what reception gets asked most.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
