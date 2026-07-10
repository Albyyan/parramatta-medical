import { useState } from 'react'
import { Link } from 'react-router-dom'
import { doctors, filterOptions } from '../data/doctors.js'
import { HOTDOC_URL } from '../data/site.js'

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleDoctors = doctors.filter(
    (doc) => activeFilter === 'all' || doc.tags.includes(activeFilter)
  )

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="breadcrumb"><Link to="/">Home</Link> / <span>Our doctors</span></p>
          <h1>Three GPs, one shared list of who to see.</h1>
          <p>Filter by what you actually need help with — the tags come straight from each doctor&apos;s own areas of interest.</p>
        </div>
      </div>

      <section className="doctors-page-section">
        <div className="wrap">
          <div className="filters">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className={`chip${activeFilter === option.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="doctor-grid">
            {visibleDoctors.map((doc) => (
              <article className="doctor-card" key={doc.id}>
                <div className="doctor-top">
                  <div className="avatar">{doc.initials}</div>
                  <div>
                    <div className="doctor-name">{doc.name}</div>
                    <div className="doctor-role">{doc.role}</div>
                    <div className="doctor-langs">{doc.languages.join(' · ')}</div>
                  </div>
                </div>
                <p className="doctor-bio">{doc.bio}</p>
                <div className="tags">
                  {doc.displayTags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="ticket">
                  <div className="when"><b>Next available</b>{doc.nextAvailable}</div>
                  <a href={HOTDOC_URL} target="_blank" rel="noopener noreferrer">Book →</a>
                </div>
              </article>
            ))}
          </div>

          {visibleDoctors.length === 0 && (
            <p className="no-match" style={{ display: 'block' }}>
              No doctor lists that as a specific interest — call the practice on (02) 8320 9300
              and reception can point you the right way.
            </p>
          )}
        </div>
      </section>

      <div className="promo">
        <div className="wrap">
          <div className="msg">
            <span className="price">Not sure?</span>
            <div className="text">
              <strong>Reception can match you to a doctor</strong>
              <span>Call and describe what you need — they&apos;ll point you the right way</span>
            </div>
          </div>
          <a className="btn" href="tel:0283209300" style={{ background: 'var(--green-vivid)', borderColor: 'var(--green-vivid)' }}>
            Call (02) 8320 9300 →
          </a>
        </div>
      </div>
    </>
  )
}
