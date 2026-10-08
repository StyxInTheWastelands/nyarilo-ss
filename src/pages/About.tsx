interface MetricItem {
  value: string;
  label: string;
}

interface ValueItem {
  title: string;
  description: string;
  iconBg: string;
}

export default function About() {
  const metrics: MetricItem[] = [
    { value: '40+', label: 'Years of Excellence' },
    { value: '1,200+', label: 'Enrolled Students' },
    { value: '98%', label: 'Graduation Success Rate' },
    { value: '25+', label: 'Extracurricular Teams' },
  ];

  const values: ValueItem[] = [
    {
      title: 'Academic Discipline',
      description: 'Cultivating rigorous focus, curiosity, and high standards of intellectual integrity across all departments.',
      iconBg: 'var(--text-indigo)',
    },
    {
      title: 'Holistic Growth',
      description: 'Balancing structural classroom education with rich athletic training, creative clubs, and leadership tracks.',
      iconBg: 'var(--accent-gold)',
    },
    {
      title: 'Community Leadership',
      description: 'Empowering students to step forward as proactive, compassionate citizens within the West Nile Region and beyond.',
      iconBg: 'rgba(33, 40, 68, 0.1)',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh' }}>
      
      {/* Hero Header Section */}
      <section style={{ 
        padding: '100px 0 60px 0', 
        borderBottom: '1px solid rgba(33, 40, 68, 0.05)' 
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              backgroundColor: 'rgba(33, 40, 68, 0.06)', 
              padding: '6px 14px', 
              borderRadius: '100px', 
              marginBottom: '20px' 
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Our Heritage & Mission
              </span>
            </div>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--text-indigo)', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Shaping Pioneers Since Day One.
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, color: 'var(--text-indigo)' }}>
              Nyarilo Secondary School stands as a premier educational institution in Koboko, Uganda. We focus on transforming ambitious youths into disciplined, creative, and resourceful leaders ready to address local and global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Split Narrative Section with Image Frame */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Narrative Content Block */}
          <div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-indigo)', marginBottom: '20px' }}>
              Driven by Tradition, Inspired by Tomorrow
            </h2>
            <p style={{ lineHeight: '1.7', opacity: 0.8, marginBottom: '20px' }}>
              Founded with the objective of providing accessible, premium secondary education within West Nile, Nyarilo SS has steadily cultivated an environment where students can discover their true capabilities. We bridge the gap between classic theoretical learning and direct real-world execution.
            </p>
            <p style={{ lineHeight: '1.7', opacity: 0.8, marginBottom: '32px' }}>
              Whether preparing for national examinations, building regional championships on the football field, or engaging in local civic initiatives, our faculty guides each student with structural mentorship and adaptive discipline.
            </p>
            
            {/* Embedded Quote Fragment */}
            <div style={{ 
              borderLeft: '4px solid var(--accent-gold)', 
              paddingLeft: '24px', 
              margin: '32px 0',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: 'var(--text-indigo)',
              fontWeight: '500'
            }}>
              "Education at Nyarilo is not just a syllabus; it is a holistic blueprint for a resilient lifetime."
            </div>
          </div>

          {/* Visual Showcase Box */}
          <div style={{ 
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            height: '450px',
            backgroundColor: 'var(--text-indigo)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("/students1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.95
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(33, 40, 68, 0.6), transparent)'
            }} />
          </div>

        </div>
      </section>

      {/* Numerical Performance Stat Section */}
      <section style={{ 
        backgroundColor: 'var(--text-indigo)', 
        color: 'var(--white)', 
        padding: '80px 0',
        borderRadius: 'var(--radius-lg)',
        margin: '0 24px 80px 24px',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          textAlign: 'center'
        }}>
          {metrics.map((metric, idx) => (
            <div key={idx}>
              <div style={{ 
                fontSize: '3.5rem', 
                fontWeight: '800', 
                color: 'var(--accent-gold)',
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                {metric.value}
              </div>
              <div style={{ 
                fontSize: '1rem', 
                fontWeight: '500', 
                opacity: 0.7,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Operational Pillars / Values */}
      <section style={{ padding: '0 0 100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-indigo)', marginBottom: '16px' }}>
              Our Foundational Pillars
            </h2>
            <p style={{ opacity: 0.8 }}>
              Every structural decision made by our administrative council and teaching board stems directly from three universal rules.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px' 
          }}>
            {values.map((val, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '40px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(33, 40, 68, 0.04)',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Minimalist Graphic Icon Indicator */}
                <div style={{
                  width: '40px',
                  height: '8px',
                  backgroundColor: val.iconBg,
                  borderRadius: '4px',
                  marginBottom: '24px'
                }} />
                
                <h3 style={{ 
                  color: 'var(--text-indigo)', 
                  fontSize: '1.3rem', 
                  fontWeight: '700', 
                  marginBottom: '14px' 
                }}>
                  {val.title}
                </h3>
                <p style={{ 
                  opacity: 0.75, 
                  fontSize: '0.95rem', 
                  lineHeight: '1.6',
                  margin: 0 
                }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}