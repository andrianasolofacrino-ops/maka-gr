function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen px-8 py-16">

      <h1 className="text-[#D4AF37] text-5xl font-bold text-center mb-4">
        COLLABORONS ENSEMBLE
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Artiste · Développeur · Entrepreneur — je suis disponible.
      </p>

      <div className="max-w-2xl mx-auto">

        <div className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg p-8 mb-8">

          <h2 className="text-[#D4AF37] text-2xl font-bold mb-6">
            📩 Envoie-moi un message
          </h2>

          <input
            type="text"
            placeholder="Ton nom"
            className="w-full bg-[#0A0A0A] border border-[#D4AF37] rounded px-4 py-3 text-[#F5F5F0] mb-4 outline-none focus:border-[#F0D060] transition-colors duration-300"
          />

          <input
            type="email"
            placeholder="Ton email"
            className="w-full bg-[#0A0A0A] border border-[#D4AF37] rounded px-4 py-3 text-[#F5F5F0] mb-4 outline-none focus:border-[#F0D060] transition-colors duration-300"
          />

          <textarea
            placeholder="Ton message..."
            rows={5}
            className="w-full bg-[#0A0A0A] border border-[#D4AF37] rounded px-4 py-3 text-[#F5F5F0] mb-6 outline-none focus:border-[#F0D060] transition-colors duration-300 resize-none"
          />

          <button className="w-full bg-[#D4AF37] text-[#0A0A0A] py-4 font-bold text-lg rounded hover:bg-[#F0D060] transition-colors duration-300">
            Envoyer le message 🦅
          </button>

        </div>

        <div className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg p-8 text-center">

          <h2 className="text-[#D4AF37] text-2xl font-bold mb-6">
            🌍 Retrouve-moi
          </h2>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              GitHub
            </button>
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              LinkedIn
            </button>
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              YouTube
            </button>
            <button className="text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300">
              Instagram
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact