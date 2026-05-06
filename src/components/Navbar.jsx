import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0A0A0A',
      borderBottom: '1px solid #D4AF37',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span style={{ color: '#D4AF37', fontSize: '1.5rem', fontWeight: 'bold' }}>
        MAKA GR
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: '#F5F5F0', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#F5F5F0', textDecoration: 'none' }}>About</Link>
        <Link to="/music" style={{ color: '#F5F5F0', textDecoration: 'none' }}>Music</Link>
        <Link to="/projects" style={{ color: '#F5F5F0', textDecoration: 'none' }}>Projects</Link>
        <Link to="/contact" style={{ color: '#F5F5F0', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar