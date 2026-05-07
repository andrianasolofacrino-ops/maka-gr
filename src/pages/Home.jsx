import { Link } from 'react-router-dom'

function Home() {
  const univers = [
    {
      emoji: '🎵',
      titre: 'Artiste',
      description: 'Musicien Afrobeat/Afropop. La musique africaine est mon âme, mon expression, mon identité.',
      lien: '/music',
      bouton: 'Ma Musique'
    },
    {
      emoji: '💻',
      titre: 'Développeur',
      description: 'Étudiant en Master EII. Je construis des solutions web et IoT pour résoudre de vrais problèmes.',
      lien: '/projects',
      bouton: 'Mes Projets'
    },
    {
      emoji: '🌍',
      titre: 'Entrepreneur',
      description: 'Je crée de la valeur pour Madagascar et l\'Afrique. Mon site est mon premier actif numérique.',
      lien: '/about',
      bouton: 'Mon Histoire'
    },
  ]

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>

        <h1 style={{ color: '#D4AF37', fontSize: '8rem', fontWeight: 'bold', letterSpacing: '0.3rem', marginBottom: '1rem', lineHeight: 1 }}>
          MAKA GR
        </h1>

        <p style={{ color: '#F5F5F0', fontSize: '1.5rem', marginBottom: '0.8rem' }}>
          Artiste · Développeur · Entrepreneur
        </p>

        <p style={{ color: '#D4AF37', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '3rem' }}>
          "L'aigle n'attend pas le vent, il apprend à voler."
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/music" style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', padding: '1rem 2.5rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px' }}>
            🎵 Ma Musique
          </Link>
          <Link to="/projects" style={{ border: '2px solid #D4AF37', color: '#D4AF37', padding: '1rem 2.5rem', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '4px' }}>
            💻 Mes Projets
          </Link>
        </div>

      </div>

      {/* 3 UNIVERS */}
      <div style={{ backgroundColor: '#1A1A1A', padding: '5rem 2rem' }}>

        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          MES 3 UNIVERS
        </h2>

        <p style={{ color: '#F5F5F0', textAlign: 'center', marginBottom: '4rem', fontSize: '1.1rem' }}>
          Entre la musique africaine et la technologie du futur
        </p>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {univers.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2.5rem', textAlign: 'center' }}>

              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.emoji}</div>

              <h3 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '1rem' }}>
                {item.titre}
              </h3>

              <p style={{ color: '#F5F5F0', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {item.description}
              </p>

              <Link to={item.lien} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.6rem 1.5rem', textDecoration: 'none', borderRadius: '4px', fontSize: '0.95rem' }}>
                {item.bouton} →
              </Link>

            </div>
          ))}

        </div>

      </div>

      {/* CITATION FINALE */}
      <div style={{ backgroundColor: '#0A0A0A', padding: '5rem 2rem', textAlign: 'center' }}>
        <p style={{ color: '#D4AF37', fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          "Je n'apprends pas pour avoir un diplôme. J'apprends pour être capable de produire, de créer, de résoudre des problèmes — et ensuite d'enseigner."
        </p>
        <p style={{ color: '#888', marginTop: '1rem' }}>— Théogène Facrino / MAKA GR</p>
      </div>

    </div>
  )
}

export default Home