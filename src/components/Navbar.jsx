import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-[#0A0A0A] border-b border-[#D4AF37] px-8 py-4 flex justify-between items-center">
      
      <span className="text-[#D4AF37] text-2xl font-bold tracking-widest">
        MAKA GR
      </span>

      <div className="flex gap-8">
        <Link to="/" className="text-[#F5F5F0] hover:text-[#D4AF37] transition-colors duration-300">
          Home
        </Link>
        <Link to="/about" className="text-[#F5F5F0] hover:text-[#D4AF37] transition-colors duration-300">
          About
        </Link>
        <Link to="/music" className="text-[#F5F5F0] hover:text-[#D4AF37] transition-colors duration-300">
          Music
        </Link>
        <Link to="/projects" className="text-[#F5F5F0] hover:text-[#D4AF37] transition-colors duration-300">
          Projects
        </Link>
        <Link to="/contact" className="text-[#F5F5F0] hover:text-[#D4AF37] transition-colors duration-300">
          Contact
        </Link>
      </div>

    </nav>
  )
}

export default Navbar