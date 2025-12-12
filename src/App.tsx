import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 var(--space-6)' }}>
      {/* Hero Section */}
      <header style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80
      }}>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: 'var(--space-5) var(--space-6)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          background: 'var(--color-bg)',
          zIndex: 100
        }}>
          <span style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>Focus</span>
        </nav>

        <div style={{ maxWidth: 640 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 600,
            lineHeight: 'var(--leading-tight)',
            marginBottom: 'var(--space-6)',
            letterSpacing: '-0.02em'
          }}>
            3 Signals a day.
            <br />
            Everything else is noise.
          </h1>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-10)',
            lineHeight: 'var(--leading-relaxed)'
          }}>
            Stop doom scrolling. Stop doing busy work.
            <br />
            Pick 3 things that actually matter. Focus on them.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/Jhvictor4/focus-landing/releases/download/v0.3.2/Focus-0.3.2-arm64.dmg"
              style={{
                display: 'inline-block',
                padding: 'var(--space-4) var(--space-8)',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                borderRadius: 'var(--radius-sm)'
              }}
            >
              Download for Mac
            </a>
            <a
              href="https://focus.kithlabs.me"
              style={{
                display: 'inline-block',
                padding: 'var(--space-4) var(--space-8)',
                border: '1px solid var(--color-border-strong)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                borderRadius: 'var(--radius-sm)'
              }}
            >
              Try on Web
            </a>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section style={{ padding: 'var(--space-32) 0' }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-8)',
          maxWidth: 500,
          lineHeight: 'var(--leading-tight)'
        }}>
          You know the feeling.
        </h2>
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-secondary)',
          maxWidth: 500,
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-6)'
        }}>
          Another day gone. You were busy all day, but what did you actually accomplish?
          Social media, emails, meetings, random tasks — noise everywhere.
        </p>
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-secondary)',
          maxWidth: 500,
          lineHeight: 'var(--leading-relaxed)'
        }}>
          Meanwhile, the things that really matter keep getting pushed to tomorrow.
        </p>
      </section>

      {/* Solution Section */}
      <section style={{ padding: 'var(--space-32) 0', borderTop: '1px solid var(--color-border)' }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-10)',
          maxWidth: 500,
          lineHeight: 'var(--leading-tight)'
        }}>
          The Steve Jobs Rule.
        </h2>

        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-secondary)',
          maxWidth: 500,
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-12)'
        }}>
          Every day, identify 3 things that matter most.
          Immerse yourself 100% in those. Treat everything else as noise.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'var(--space-10)'
        }}>
          <div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>Signal</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              The 3 things that move you forward.
              Hard limit. No exceptions.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>Noise</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              Everything else. It's there if you need it.
              But it won't steal your focus.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: 'var(--space-32) 0', borderTop: '1px solid var(--color-border)' }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-16)'
        }}>
          How it works
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-12)'
        }}>
          <div>
            <div style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 600,
              color: 'var(--color-border)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1
            }}>01</div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
              Pick your 3 Signals
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              What matters most today?
              Not 5. Not 10. Just 3.
            </p>
          </div>

          <div>
            <div style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 600,
              color: 'var(--color-border)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1
            }}>02</div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
              Dump the rest
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              Everything else goes into Noise.
              Out of sight, out of mind.
            </p>
          </div>

          <div>
            <div style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 600,
              color: 'var(--color-border)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1
            }}>03</div>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
              Focus and ship
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
              18 hours to complete. After that, it's overdue.
              Stay accountable.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: 'var(--space-32) 0', borderTop: '1px solid var(--color-border)' }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          marginBottom: 'var(--space-16)'
        }}>
          Built for focus
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-8)'
        }}>
          {[
            { title: '3 Signal Limit', desc: 'Hard limit enforced. Forces you to prioritize.' },
            { title: 'Pomodoro Timer', desc: '25 min focus sessions. Built-in breaks.' },
            { title: 'SNR Tracking', desc: 'See how much time you spend on signals vs noise.' },
            { title: 'Milestones', desc: 'Group tasks into bigger goals. Track progress over weeks.' },
            { title: '18h Lifecycle', desc: 'Tasks go overdue after 18 hours. Stay accountable.' },
            { title: 'Local Storage', desc: 'Your data stays on your machine. No account needed.' },
          ].map((feature, i) => (
            <div key={i} style={{ padding: 'var(--space-6) 0', borderTop: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Statement */}
      <section style={{
        padding: 'var(--space-32) 0',
        borderTop: '1px solid var(--color-border)',
        textAlign: 'center'
      }}>
        <blockquote style={{
          fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)',
          fontWeight: 500,
          maxWidth: 560,
          margin: '0 auto',
          lineHeight: 'var(--leading-normal)',
          color: 'var(--color-text-primary)'
        }}>
          "Productivity isn't about doing more.
          <br />
          It's about doing what matters."
        </blockquote>
      </section>

      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
