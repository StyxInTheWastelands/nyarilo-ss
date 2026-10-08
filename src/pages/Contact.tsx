import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission logged:', formData);
    alert('Thank you! Your inquiry has been routed to the Nyarilo SS administration desk.');
  };

  return (
    <section style={{ 
      position: 'relative',
      padding: '100px 0', 
      backgroundColor: 'var(--bg-cream)',
      minHeight: 'calc(100vh - 84px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden' // Keeps the geometric circles safely contained
    }}>

      {/* ================= GEOMETRIC CIRCLE BACKGROUND ARTWORK ================= */}
      {/* Accent 1: Top-Left Concentric Circles */}
      <svg style={{
        position: 'absolute',
        top: '-40px',
        left: '-40px',
        width: '350px',
        height: '350px',
        opacity: 0.04,
        color: 'var(--text-indigo)',
        pointerEvents: 'none'
      }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Accent 2: Big Overlapping Intersecting Rings (Center/Right) */}
      <svg style={{
        position: 'absolute',
        bottom: '-100px',
        right: '25%',
        width: '500px',
        height: '500px',
        opacity: 0.03,
        color: 'var(--text-indigo)',
        pointerEvents: 'none'
      }} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="140" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="100" x2="220" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Accent 3: Right Side Modern Orbital/Axis Geometry */}
      <svg style={{
        position: 'absolute',
        right: '-100px',
        top: '10%',
        width: '450px',
        height: '450px',
        opacity: 0.05,
        color: 'var(--text-indigo)',
        pointerEvents: 'none'
      }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* Crosshair structural lines passing through the circles */}
        <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Accent 4: Bottom-Left Soft Faded Ring Edge */}
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '2px solid rgba(33, 40, 68, 0.03)',
        pointerEvents: 'none'
      }} />
      {/* ======================================================================= */}

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Contact Copy */}
          <div>
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
                Open Communication
              </span>
            </div>
            
            <h1 style={{ fontSize: '3.2rem', color: 'var(--text-indigo)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Connect With Us
            </h1>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.8, marginBottom: '40px' }}>
              Have questions regarding application milestones, financial arrangements, or special school events? Our support hub is active and standing by to assist you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  Campus Address
                </span>
                <span style={{ fontSize: '1.05rem', color: 'var(--text-indigo)', fontWeight: '600' }}>
                  102 Nyarilo School Rd, Main District, Koboko, Uganda
                </span>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                  Direct Telephone
                </span>
                <span style={{ fontSize: '1.05rem', color: 'var(--text-indigo)', fontWeight: '600' }}>
                  +254 712 345 678
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Card Form */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)', 
            backdropFilter: 'blur(12px)', 
            WebkitBackdropFilter: 'blur(12px)',
            padding: '48px',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255, 255, 255, 0.6)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-indigo)', marginBottom: '8px' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(33, 40, 68, 0.15)',
                    backgroundColor: 'var(--white)',
                    fontSize: '0.95rem',
                    color: 'var(--text-indigo)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-indigo)', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(33, 40, 68, 0.15)',
                    backgroundColor: 'var(--white)',
                    fontSize: '0.95rem',
                    color: 'var(--text-indigo)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-indigo)', marginBottom: '8px' }}>
                  Your Message
                </label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(33, 40, 68, 0.15)',
                    backgroundColor: 'var(--white)',
                    fontSize: '0.95rem',
                    color: 'var(--text-indigo)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: 'var(--text-indigo)',
                  color: 'var(--white)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#151929'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--text-indigo)'}
              >
                Send Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}