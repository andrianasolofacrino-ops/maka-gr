function Contact() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', padding: '4rem 2rem' }}>

      <h1 style={{ color: '#D4AF37', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
        COLLABORONS ENSEMBLE
      </h1>

      <p style={{ color: '#F5F5F0', textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
        Artiste · ingenieur · Entrepreneur — je suis disponible.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          
          <h2 style={{ color: '#D4AF37', marginBottom: '1.5rem' }}>📩 Envoie-moi un message</h2>

          <input
            type="text"
            placeholder="Ton nom"
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1rem', boxSizing: 'border-box' }}
          />

          <input
            type="email"
            placeholder="Ton email"
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1rem', boxSizing: 'border-box' }}
          />

          <textarea
            placeholder="Ton message..."
            rows={5}
            style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem', color: '#F5F5F0', marginBottom: '1.5rem', boxSizing: 'border-box', resize: 'vertical' }}
          />

          <button style={{ width: '100%', backgroundColor: '#D4AF37', color: '#0A0A0A', border: 'none', padding: '1rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
            Envoyer le message 🦅
          </button>

        </div>

        <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ color: '#D4AF37', marginBottom: '1.5rem' }}>🌍 Retrouve-moi</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#D4AF37', textDecoration: 'none', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px' }}>GitHub</a>
            <a href="#" style={{ color: '#D4AF37', textDecoration: 'none', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px' }}>LinkedIn</a>
            <a href="#" style={{ color: '#D4AF37', textDecoration: 'none', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px' }}>YouTube</a>
            <a href="#" style={{ color: '#D4AF37', textDecoration: 'none', border: '1px solid #D4AF37', padding: '0.5rem 1.2rem', borderRadius: '4px' }}>Instagram</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact