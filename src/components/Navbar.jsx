import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid #D4AF37', padding: '1rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Link to="/" style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.2rem', textDecoration: 'none' }}>
          MAKA GR
        </Link>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { nom: 'Home', lien: '/' },
            { nom: 'About', lien: '/about' },
            { nom: 'Music', lien: '/music' },
            { nom: 'Projects', lien: '/projects' },
            { nom: 'Contact', lien: '/contact' },
          ].map((item, i) => (
            <Link key={i} to={item.lien}
              style={{ color: '#F5F5F0', textDecoration: 'none', fontSize: '1rem' }}
              onMouseEnter={e => e.target.style.color = '#D4AF37'}
              onMouseLeave={e => e.target.style.color = '#F5F5F0'}>
              {item.nom}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar