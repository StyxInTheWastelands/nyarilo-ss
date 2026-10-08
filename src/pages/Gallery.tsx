import { useState } from 'react';

type FilterType = 'all' | 'students' | 'sports';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'students' | 'sports';
  tag: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<FilterType>('all');

  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      src: '/students1.jpg', 
      title: 'Nyarilo SS Female Students Group Photo', 
      category: 'students', 
      tag: 'Campus Life' 
    },
    { 
      id: 2, 
      src: '/sport1.jpg', 
      title: 'Maracha vs Nyarilo SS Football Match Celebration', 
      category: 'sports', 
      tag: 'Athletics' 
    },
    { 
      id: 3, 
      src: '/students2.jpg', 
      title: 'Students Attending Class in the Lecture Room', 
      category: 'students', 
      tag: 'Academics' 
    },
    { 
      id: 4, 
      src: '/sport2.jpg', 
      title: 'Nyarilo SS Boys Football Team Group Photo', 
      category: 'sports', 
      tag: 'Athletics' 
    },
    { 
      id: 5, 
      src: '/students3.jpg', 
      title: 'Students and Faculty Gathering by the Nyangilia Secondary School Bus', 
      category: 'students', 
      tag: 'Campus Life' 
    },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-cream)' }}>
      <div className="container">
        
        {/* Typographic Header Block */}
        <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(33, 40, 68, 0.06)', padding: '6px 14px', borderRadius: '100px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Campus Visual Hub
            </span>
          </div>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-indigo)', marginBottom: '16px' }}>
            Life Within Nyarilo
          </h1>
          <p style={{ opacity: 0.8, fontSize: '1.05rem', lineHeight: '1.6' }}>
            A visual documentation of daily educational steps, athletic excellence, and real-time breakthroughs in Koboko, Uganda.
          </p>
        </div>

        {/* Interactive Filter Control Chips */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {([
            { value: 'all', label: 'All Media' },
            { value: 'students', label: 'Campus Life & Studies' },
            { value: 'sports', label: 'Athletic Competitions' }
          ] as const).map((chip) => (
            <button
              key={chip.value}
              onClick={() => setFilter(chip.value)}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                fontSize: '0.9rem',
                backgroundColor: filter === chip.value ? 'var(--text-indigo)' : 'var(--white)',
                color: filter === chip.value ? 'var(--white)' : 'var(--text-indigo)',
                border: '2px solid transparent',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Clean, Uniform Grid Container */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px'
        }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Image Frame with consistent 4:3 Aspect Ratio Container */}
              <div style={{
                width: '100%',
                height: '240px',
                backgroundColor: '#1a1f33', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'var(--transition-smooth)'
                }} />
                
                {/* Floating Category Tag */}
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'var(--text-indigo)',
                  color: 'var(--white)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  letterSpacing: '0.5px'
                }}>
                  {item.tag}
                </span>
              </div>

              {/* Informational Card Body Text */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ 
                  color: 'var(--text-indigo)', 
                  fontSize: '1.15rem', 
                  fontWeight: '700', 
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}