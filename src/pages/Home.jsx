import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen flex flex-col justify-center items-center text-center px-8">

      <h1 className="text-[#D4AF37] text-8xl font-bold tracking-widest mb-6">
        MAKA GR
      </h1>

      <p className="text-[#F5F5F0] text-xl mb-3">
        Artiste · Développeur · Entrepreneur
      </p>

      <p className="text-[#D4AF37] text-base italic mb-12">
        "L'aigle n'attend pas le vent, il apprend à voler."
      </p>

      <div className="flex gap-6">
        <Link
          to="/music"
          className="bg-[#D4AF37] text-[#0A0A0A] px-8 py-3 font-bold rounded hover:bg-[#F0D060] transition-colors duration-300"
        >
          🎵 Ma Musique
        </Link>
        <Link
          to="/projects"
          className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 font-bold rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300"
        >
          💻 Mes Projets
        </Link>
      </div>

    </div>
  )
}

export default Home