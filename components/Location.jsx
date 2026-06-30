'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { label: 'Mulund Toll Naka (LBS Marg)', time: '~10 mins' },
  { label: 'Jupiter Hospital, Thane', time: '8 mins' },
  { label: 'DAV Public School, Thane', time: '12 mins' },
  { label: 'Eastern Express Highway', time: '3 mins' },
  { label: 'Viviana Mall', time: '10 mins' },
  { label: 'Chhatrapati Shivaji Maharaj International Airport', time: '35 mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Vayam, Thane</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-gold)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />

        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Connectivity List */}
          <div className="w-full lg:w-[50%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* List Header */}
              <div style={{
                background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
                padding: '16px 20px', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
                }} />
                <p style={{
                  fontFamily: F_JOST, fontWeight: '800', fontSize: '13px',
                  color: '#fff', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase'
                }}>
                  Connectivity & Landmarks
                </p>
              </div>

              {/* Items */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ borderTop: '1px solid #e5e7eb' }}>
                  {locationItems.map((item, i) => (
                    <div key={i} style={{
                      padding: '16px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderBottom: '1px solid #e5e7eb',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span style={{
                          fontSize: '14px', color: '#1f2937', fontWeight: '500',
                          fontFamily: F_SANS,
                        }}>{item.label}</span>
                      </div>
                      <span style={{
                        fontSize: '14px', color: '#000', fontWeight: '700',
                        fontFamily: F_SANS, whiteSpace: 'nowrap'
                      }}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-gold)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', zIndex: 10,
              }} />
              <iframe
                title="L&T Vayam Location Map"
                src="https://maps.google.com/maps?q=Wagle+Industrial+Estate,+Thane,+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Vayam, Thane, Maharashtra 400604
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
