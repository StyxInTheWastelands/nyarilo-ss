import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: 'var(--white)',
    fontSize: '0.95rem',
    fontWeight: '500',
    opacity: isActive ? 1 : 0.7,
    padding: '8px 16px',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
    borderBottom: isActive ? '2px solid var(--accent-gold)' : '2px solid transparent',
    textDecoration: 'none', // Removed underlines from header links
  });

  const footerLinkStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.9rem',
    display: 'inline-block',
    marginBottom: '10px',
    transition: 'var(--transition-smooth)',
    textDecoration: 'none', // Removed underlines from footer links
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Global School Navigation Header */}
      <nav style={{ 
        backgroundColor: 'var(--text-indigo)', 
        color: 'var(--white)', 
        padding: '24px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ 
              width: '12px', 
              height: '24px', 
              backgroundColor: 'var(--accent-gold)', 
              borderRadius: '2px',
              transform: 'skewX(-15deg)'
            }} />
            <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '-0.04em' }}>
              NYARILO SS
            </span>
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/about" style={linkStyle}>About Us</NavLink>
            <NavLink to="/enrollment" style={linkStyle}>Enrollment Guide</NavLink>
            <NavLink to="/gallery" style={linkStyle}>Gallery</NavLink>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Main Viewport Routing Output */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Rich Multi-Column Footer */}
      <footer style={{ 
        backgroundColor: 'var(--text-indigo)', 
        color: 'var(--white)', 
        padding: '80px 0 40px 0', 
        marginTop: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '48px',
            marginBottom: '60px'
          }}>
            
            {/* Column 1: Core Brand Identity */}
            <div style={{ flex: 1.5 }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '16px', fontWeight: '800' }}>
                NYARILO SS
              </h3>
              <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Nurturing intelligence, fostering discipline, and shaping future pioneers within Koboko and the greater West Nile Region of Uganda.
              </p>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-gold)' }} />
            </div>

            {/* Column 2: Structural Page Map */}
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><NavLink to="/" style={footerLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Home Portal</NavLink></li>
                <li><NavLink to="/about" style={footerLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Our History</NavLink></li>
                <li><NavLink to="/enrollment" style={footerLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Enrollment Guide</NavLink></li>
                <li><NavLink to="/gallery" style={footerLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Campus Gallery</NavLink></li>
                <li><NavLink to="/contact" style={footerLinkStyle} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Get In Touch</NavLink></li>
              </ul>
            </div>

            {/* Column 3: Detailed Official Contacts */}
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Inquiries Hub
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', padding: 0, margin: 0 }}>
                <li>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--white)', opacity: 0.4 }}>Admissions Email</span>
                  <a href="mailto:admissions@nyariloss.sch.ug" style={{ color: 'inherit', textDecoration: 'none' }}>admissions@nyariloss.sch.ug</a>
                </li>
                <li>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--white)', opacity: 0.4 }}>General Desk</span>
                  <a href="mailto:info@nyariloss.sch.ug" style={{ color: 'inherit', textDecoration: 'none' }}>info@nyariloss.sch.ug</a>
                </li>
                <li>
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--white)', opacity: 0.4 }}>Direct Office Line</span>
                  <span style={{ color: 'var(--white)' }}>+254 712 345 678</span>
                </li>
              </ul>
            </div>

          </div>

          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '32px' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontSize: '0.85rem', opacity: 0.4, margin: 0 }}>
              &copy; {new Date().getFullYear()} Nyarilo Secondary School. Crafted for Excellence.
            </p>
            <p style={{ fontSize: '0.85rem', opacity: 0.4, margin: 0 }}>
              Koboko, Uganda
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}