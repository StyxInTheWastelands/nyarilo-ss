import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'curriculum' | 'facilities' | 'sports'>('curriculum');

  const tabData = {
    curriculum: {
      title: "O-Level & A-Level Programs",
      tagline: "BUILDING ACADEMIC FOUNDATIONS",
      desc: "Nyarilo Secondary School offers a rigorous and comprehensive academic path aligned with the National Curriculum development frameworks of Uganda. We focus heavily on sciences, humanities, and critical language development, equipping young minds with both theoretical knowledge and modern problem-solving abilities.",
      points: ["Advanced Mathematics & Statistics", "Integrated Physics, Chemistry & Biology Modules", "History, Geography & Creative Literature", "Information and Communications Technology (ICT) Labs"]
    },
    facilities: {
      title: "Interactive Campus Environment",
      tagline: "SPACES ENGINEERED FOR FOCUS",
      desc: "True excellence requires the space to explore. Our West Nile campus features designated library spaces tailored for quiet study, functional learning labs for foundational computer literacy, and multi-purpose lecture layouts built to safely host student seminars and collaborative workshops.",
      points: ["Expansive Main Library", "Hands-on Practical Science Stations", "Modern Computer Literacy Center", "Dedicated Research & Study Halls"]
    },
    sports: {
      title: "Co-Curricular & Athletic Legacy",
      tagline: "HEALTH, COOPERATION & DISCIPLINE",
      desc: "We believe character is molded outside the classroom just as much as inside it. Nyarilo SS proudly supports regional championship teams across track, football, and netball, teaching leadership, personal health, and communal pride on and off the field.",
      points: ["Inter-house Athletic Tournaments", "Competitive Regional Football League", "Netball & Volleyball Clubs", "Traditional Music, Dance & Drama Societies"]
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* SECTION 1: HERO DISPLAY (Fully Linked Routing Actions) */}
      <section style={{ padding: '120px 0 80px 0', position: 'relative' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(33, 40, 68, 0.06)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Koboko, West Nile Region, Uganda
              </span>
            </div>
            
            <h1 style={{ fontSize: '3.8rem', color: 'var(--text-indigo)', marginBottom: '24px', lineHeight: '1.1' }}>
              Shaping Thinkers. <br />
              Inspiring <span style={{ color: 'var(--accent-gold)' }}>Leaders.</span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', opacity: 0.85, marginBottom: '40px', fontWeight: '400' }}>
              Welcome to Nyarilo Secondary School. We provide an empowering environment that blends strict discipline, academic thoroughness, and creative expression to build tomorrow’s global change-makers.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {/* Dynamic routing hook points directly to your newly created enrollment space */}
              <button 
                onClick={() => navigate('/enrollment')}
                style={{ 
                  backgroundColor: 'var(--text-indigo)', 
                  color: 'var(--white)', 
                  padding: '16px 32px', 
                  borderRadius: 'var(--radius-sm)', 
                  fontWeight: '600', 
                  fontSize: '1rem', 
                  boxShadow: 'var(--shadow-md)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Enrollment Guide
              </button>

              {/* Dynamic routing hook points directly to your updated clean grid gallery */}
              <button 
                onClick={() => navigate('/gallery')}
                style={{ 
                  border: '2px solid var(--text-indigo)', 
                  backgroundColor: 'transparent',
                  color: 'var(--text-indigo)', 
                  padding: '14px 30px', 
                  borderRadius: 'var(--radius-sm)', 
                  fontWeight: '600', 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--text-indigo)'; e.currentTarget.style.color = 'var(--white)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-indigo)'; }}
              >
                View Campus Gallery
              </button>
            </div>
          </div>

          {/* Asymmetric Hero Photo Blocks */}
          <div style={{ position: 'relative', display: 'flex', gap: '16px', height: '450px' }}>
            <div style={{ flex: 1, backgroundImage: 'url("https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-md)', marginTop: '40px', boxShadow: 'var(--shadow-lg)' }} />
            <div style={{ flex: 1, backgroundImage: 'url("/image1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 'var(--radius-md)', marginBottom: '40px', boxShadow: 'var(--shadow-lg)', border: '6px solid var(--white)' }} />
          </div>

        </div>
      </section>

      {/* SECTION 2: LIVE STATS COUNTER */}
      <section style={{ backgroundColor: 'var(--text-indigo)', color: 'var(--white)', padding: '60px 0', boxShadow: 'var(--shadow-md)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>500+</h2>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Active Learners</p>
          </div>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>96%</h2>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Graduation Success</p>
          </div>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>30+</h2>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Expert Instructors</p>
          </div>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>15+</h2>
            <p style={{ opacity: 0.7, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>Regional Sports Honors</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE HUB */}
      <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'var(--texture-dots)', zIndex: -1 }}></div>
        
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-indigo)' }}>Explore Life at Nyarilo</h2>
            <p style={{ opacity: 0.8, color: 'var(--text-indigo)' }}>Discover how we integrate high academic performance with practical skills and athletics to support full personal development.</p>
          </div>

          {/* Tab Selection Switches */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {(['curriculum', 'facilities', 'sports'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '100px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  backgroundColor: activeTab === tab ? 'var(--text-indigo)' : 'var(--white)',
                  color: activeTab === tab ? 'var(--white)' : 'var(--text-indigo)',
                  border: '2px solid rgba(33, 40, 68, 0.1)',
                  boxShadow: activeTab === tab ? 'var(--shadow-sm)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Interactive Dynamic Panel Output */}
          <div style={{ 
            backgroundColor: 'var(--white)', 
            borderRadius: 'var(--radius-lg)', 
            padding: '60px', 
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            alignItems: 'start'
          }}>
            <div>
              <span style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '2px' }}>
                {tabData[activeTab].tagline}
              </span>
              <h3 style={{ fontSize: '2.8rem', marginTop: '8px', marginBottom: '24px', lineHeight: '1.15', color: 'var(--text-indigo)' }}>{tabData[activeTab].title}</h3>
              <p style={{ opacity: 0.8, color: 'var(--text-indigo)', marginBottom: '24px', lineHeight: '1.8' }}>{tabData[activeTab].desc}</p>
              
              <div style={{ 
                  marginTop: '40px', 
                  width: '80px', 
                  height: '4px', 
                  backgroundColor: 'rgba(33, 40, 68, 0.1)' 
              }} />
            </div>

            <div style={{ backgroundColor: 'var(--bg-cream)', padding: '40px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-indigo)', fontWeight: '700' }}>Highlights & Focus Blocks</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
                {tabData[activeTab].points.map((point, index) => (
                  <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'start', 
                      gap: '12px', 
                      fontSize: '1rem', 
                      fontWeight: '500', 
                      color: 'var(--text-indigo)' 
                  }}>
                    <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: 'var(--accent-gold)', 
                        borderRadius: '50%', 
                        marginTop: '6px', 
                        flexShrink: 0 
                    }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SCHOOL MOTTO CALLOUT */}
      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '3rem', color: 'var(--text-indigo)', fontWeight: '800', fontStyle: 'italic', marginBottom: '24px', position: 'relative' }}>
            “Knowledge, Character, and Excellence”
          </div>
          <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-gold)', margin: '0 auto 24px auto' }} />
          <p style={{ fontSize: '1.1rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
            Our motto guides every single step we take in Koboko. We expect our students to not just pass examinations, but to graduate into mature, compassionate, and fiercely intellectual citizens.
          </p>
        </div>
      </section>

    </div>
  );
}