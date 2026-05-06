function Music() {
  const tracks = [
    { titre: 'Titre 1', duree: '3:45', statut: 'Disponible' },
    { titre: 'Titre 2', duree: '4:12', statut: 'Disponible' },
    { titre: 'Titre 3', duree: '3:58', statut: 'Coming Soon' },
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-8 py-16">

      <h1 className="text-[#D4AF37] text-5xl font-bold text-center mb-4">
        MA MUSIQUE
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Afrobeat · Afropop · Madagascar
      </p>

      <div className="max-w-3xl mx-auto">

        <h2 className="text-[#D4AF37] text-2xl font-bold mb-6">
          🎵 Mes Titres
        </h2>

        {tracks.map((track, index) => (
          <div key={index} className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg px-6 py-4 mb-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-[#D4AF37] text-2xl">▶</span>
              <div>
                <p className="text-[#F5F5F0] font-bold">{track.titre}</p>
                <p className="text-[#888] text-sm">MAKA GR</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#888]">{track.duree}</span>
              <span className="text-[#D4AF37] border border-[#D4AF37] text-xs px-3 py-1 rounded-full">
                {track.statut}
              </span>
            </div>
          </div>
        ))}

        <div className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg p-8 text-center mt-12">
          <h2 className="text-[#D4AF37] text-2xl font-bold mb-6">
            🎧 Retrouve-moi sur
          </h2>
          <div className="flex justify-center gap-6">
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              Spotify
            </button>
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              YouTube
            </button>
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              Apple Music
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Music