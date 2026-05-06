import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex flex-col justify-center items-center text-center px-8">

      <h1 style={{ fontFamily: 'Bebas Neue, sans-serif' }} className="text-[#D4AF37] text-9xl tracking-widest mb-6">
        MAKA GR
      </h1>

      <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-[#F5F5F0] text-2xl mb-3">
        Artiste · Développeur · Entrepreneur
      </p>

      <p style={{ fontFamily: 'Inter, sans-serif' }} className="text-[#D4AF37] text-lg italic mb-16">
        "L'aigle n'attend pas le vent, il apprend à voler."
      </p>

      <div className="flex gap-6">
        <Link
          to="/music"
          style={{ fontFamily: 'Inter, sans-serif' }}
          className="bg-[#D4AF37] text-[#0A0A0A] px-10 py-4 font-bold text-lg rounded hover:bg-[#F0D060] transition-colors duration-300"
        >
          🎵 Ma Musique
        </Link>
        <Link
          to="/projects"
          style={{ fontFamily: 'Inter, sans-serif' }}
          className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 font-bold text-lg rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300"
        >
          💻 Mes Projets
        </Link>
      </div>

    </div>
  )
}

export default Home