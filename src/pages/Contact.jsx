function Contact() {
  const reseaux = [
    { nom: 'GitHub', emoji: '💻', lien: 'https://github.com/andrianasolofacrino-ops' },
    { nom: 'LinkedIn', emoji: '🔗', lien: '#' },
    { nom: 'YouTube', emoji: '▶️', lien: '#' },
    { nom: 'Instagram', emoji: '📸', lien: '#' },
  ]

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center', borderBottom: '1px solid #D4AF37' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '4rem', marginBottom: '1rem' }}>
          COLLABORONS ENSEMBLE
        </h1>
        <p style={{ color: '#F5F5F0', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Artiste · Développeur · Entrepreneur
        </p>
        <p style={{ color: '#888', fontSize: '1rem', fontStyle: 'italic' }}>
          Une idée ? Un projet ? Une collaboration ? Je suis disponible.
        </p>
      </div>

      {/* FORMULAIRE + RESEAUX */}
      <div style={{ padding: '5rem 2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '650px', width: '100%' }}>

          {/* FORMULAIRE */}
          <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2.5rem', marginBottom: '2rem' }}>

            <h2 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '2rem' }}>
              📩 Envoie-moi un message
            </h2>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                Ton nom
              </label>
              <input
                type="text"
                placeholder="Ex: Jean Dupont"
                style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem 1rem', color: '#F5F5F0', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                Ton email
              </label>
              <input
                type="email"
                placeholder="Ex: jean@email.com"
                style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem 1rem', color: '#F5F5F0', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                Sujet
              </label>
              <input
                type="text"
                placeholder="Ex: Collaboration musicale"
                style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem 1rem', color: '#F5F5F0', fontSize: '1rem', boxSizing: 'border-box', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ color: '#D4AF37', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                Ton message
              </label>
              <textarea
                placeholder="Décris ton projet ou ta demande..."
                rows={5}
                style={{ width: '100%', backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '4px', padding: '0.8rem 1rem', color: '#F5F5F0', fontSize: '1rem', boxSizing: 'border-box', outline: 'none', resize: 'none' }}
              />
            </div>

            <button style={{ width: '100%', backgroundColor: '#D4AF37', color: '#0A0A0A', border: 'none', padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
              Envoyer le message 🦅
            </button>

          </div>

          {/* RESEAUX SOCIAUX */}
          <div style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              🌍 Retrouve-moi
            </h2>
            <p style={{ color: '#888', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Suis mon parcours sur les réseaux
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {reseaux.map((r, i) => (
                <a key={i} href={r.lien} target="_blank" rel="noreferrer"
                  style={{ backgroundColor: '#0A0A0A', color: '#D4AF37', border: '1px solid #D4AF37', borderRadius: '8px', padding: '1.2rem', textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{r.emoji}</div>
                  <div style={{ fontWeight: 'bold' }}>{r.nom}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* MESSAGE FINAL */}
      <div style={{ backgroundColor: '#1A1A1A', padding: '4rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#D4AF37', fontSize: '1.3rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
          "L'aigle n'attend pas le vent, il apprend à voler."
        </p>
        <p style={{ color: '#888', marginTop: '1rem' }}>— MAKA GR</p>
      </div>

    </div>
  )
}

export default Contact