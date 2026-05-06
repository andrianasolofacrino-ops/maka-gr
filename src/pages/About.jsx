function About() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', padding: '4rem 2rem' }}>
      
      <h1 style={{ color: '#D4AF37', fontSize: '3rem', textAlign: 'center', marginBottom: '3rem' }}>
        QUI EST MAKA GR ?
      </h1>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <p style={{ color: '#F5F5F0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          Je suis <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>Théogène Facrino</span>, 
          connu artistiquement sous le nom MAKA GR. Étudiant en Master  EII 
          (Électronique, Informatique et Intelligence Artificielle) à Antsiranana, Madagascar.
        </p>

        <p style={{ color: '#F5F5F0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
          MAKA GR n'est pas juste un nom d'artiste. C'est mon identité complète — 
          musicien Afrobeat/Afropop, développeur web, et entrepreneur. 
          Je vis entre deux mondes : la musique africaine et la technologie du futur.
        </p>

        <h2 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
          Mes valeurs
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { titre: '🦅 Discipline', texte: 'L\'aigle n\'attend pas le vent, il apprend à voler.' },
            { titre: '💡 Compétence', texte: 'Le monde paie ce qu\'on sait faire, pas ce qu\'on mémorise.' },
            { titre: '🌍 Impact Afrique', texte: 'Sortir de la pauvreté par la création de valeur.' },
            { titre: '🎵 Création', texte: 'La musique et la tech sont mes deux langages.' },
          ].map((valeur, index) => (
            <div key={index} style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #D4AF37',
              borderRadius: '8px',
              padding: '1.5rem'
            }}>
              <h3 style={{ color: '#D4AF37', marginBottom: '0.5rem' }}>{valeur.titre}</h3>
              <p style={{ color: '#F5F5F0', fontSize: '0.95rem', lineHeight: '1.6' }}>{valeur.texte}</p>
            </div>
          ))}
        </div>

        <h2 style={{ color: '#D4AF37', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
          Ma mission
        </h2>
        <p style={{ color: '#F5F5F0', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', borderLeft: '3px solid #D4AF37', paddingLeft: '1.5rem' }}>
          "Sortir de la pauvreté durablement par la compétence, la discipline 
          et la création de valeur — pour moi, pour ma famille, et pour Madagascar et l'Afrique."
        </p>

      </div>
    </div>
  )
}

export default About
