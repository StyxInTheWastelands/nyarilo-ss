import { useNavigate } from 'react-router-dom';

interface StepItem {
  number: string;
  title: string;
  description: string;
}

export default function Enrollment() {
  const navigate = useNavigate();
  
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Obtain & Submit Application Forms',
      description: 'Collect official entry packets directly from the school administration desk or request digital copies via admissions@nyariloss.sch.ug.'
    },
    {
      number: '02',
      title: 'Verification of Academic Transcripts',
      description: 'Provide certified copies of prior academic records, leaving certificates, and identification papers for evaluation by the admissions panel.'
    },
    {
      number: '03',
      title: 'Interview & Placement Assessment',
      description: 'Prospective students participate in a structural overview interview and fundamental assessments to determine proper class placement.'
    },
    {
      number: '04',
      title: 'Final Registration & Briefing',
      description: 'Upon acceptance confirmation, complete basic fee clearings and attend the mandatory term orientation briefing with parents/guardians.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', padding: '100px 0' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Background Circle Accents */}
        <svg style={{
          position: 'absolute',
          top: '-20px',
          right: '-50px',
          width: '400px',
          height: '400px',
          opacity: 0.03,
          color: 'var(--text-indigo)',
          pointerEvents: 'none'
        }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>

        <div className="container">
          {/* Header Copy Block */}
          <div style={{ maxWidth: '650px', marginBottom: '60px' }}>
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
                Join Our Student Body
              </span>
            </div>
            <h1 style={{ fontSize: '3.2rem', color: 'var(--text-indigo)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Admissions & Enrollment Guide
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8 }}>
              We welcome applications from students who strive for intellectual distinction, physical discipline, and active peer leadership. Below is our formal intake blueprint.
            </p>
          </div>

          {/* Timeline Step Grid Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '32px',
            marginBottom: '60px'
          }}>
            {steps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '40px 32px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: '4px solid var(--text-indigo)',
                  position: 'relative',
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
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: 'var(--accent-gold)',
                  opacity: 0.3,
                  lineHeight: '1',
                  marginBottom: '16px'
                }}>
                  {step.number}
                </div>
                
                <h3 style={{ color: 'var(--text-indigo)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                
                <p style={{ opacity: 0.75, fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Support Callout Panel */}
          <div style={{
            backgroundColor: 'var(--text-indigo)',
            color: 'var(--white)',
            padding: '40px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '6px' }}>
                Need Immediate Help with Registration?
              </h4>
              <p style={{ opacity: 0.7, fontSize: '0.95rem', margin: 0 }}>
                Our registration support desk can assist you with paperwork details or deadline exemptions.
              </p>
            </div>
            <button 
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--text-indigo)',
                padding: '12px 28px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Contact Admissions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}