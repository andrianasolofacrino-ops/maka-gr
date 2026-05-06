function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <h1 className="text-[#D4AF37] text-5xl text-center mb-4">
        COLLABORONS ENSEMBLE
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Artiste · Développeur · Entrepreneur — je suis disponible.
      </p>

      <div style={{ maxWidth: '600px', width: '100%', padding: '0 2rem' }}>

        <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <h2 className="text-[#D4AF37] text-2xl mb-6">📩 Envoie-moi un message</h2>

          <input type="text" placeholder="Ton nom"
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1rem', boxSizing: 'border-box' }}
          />
          <input type="email" placeholder="Ton email"
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1rem', boxSizing: 'border-box' }}
          />
          <textarea placeholder="Ton message..." rows={5}
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1.5rem', boxSizing: 'border-box', resize: 'none' }}
          />
          <button style={{ width: '100%', backgroundColor: '#D4AF37', color: '#0A0A0A', border: 'none', padding: '1rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
            Envoyer le message 🦅
          </button>
        </div>

        <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
          <h2 className="text-[#D4AF37] text-2xl mb-6">🌍 Retrouve-moi</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['GitHub', 'LinkedIn', 'YouTube', 'Instagram'].map((r, i) => (
              <button key={i} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px', backgroundColor: 'transparent', cursor: 'pointer' }}>
                {r}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact