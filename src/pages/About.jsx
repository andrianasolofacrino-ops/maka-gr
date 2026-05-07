function About() {
  const valeurs = [
    { titre: '🦅 Discipline', texte: "L'aigle n'attend pas le vent, il apprend à voler." },
    { titre: '💡 Compétence', texte: "Le monde paie ce qu'on sait faire, pas ce qu'on mémorise." },
    { titre: '🌍 Impact Afrique', texte: 'Sortir de la pauvreté par la création de valeur.' },
    { titre: '🎵 Création', texte: 'La musique et la tech sont mes deux langages.' },
  ]

  const timeline = [
    { annee: '2020', evenement: 'Début de la passion pour la musique Afrobeat' },
    { annee: '2022', evenement: 'Premiers pas en développement web — HTML, CSS, JS' },
    { annee: '2024', evenement: 'Projet CommuneService — premier full-stack Node.js + MySQL' },
    { annee: '2025', evenement: 'Master 1 EII — Électronique, Informatique, IA' },
    { annee: '2026', evenement: 'Lancement du site MAKA GR — premier actif numérique' },
  ]

  const competences = [
    { categorie: '🎵 Musique', items: ['Afrobeat', 'Afropop', 'Composition', 'Production'] },
    { categorie: '💻 Web', items: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MySQL'] },
    { categorie: '⚡ Électronique', items: ['ESP32', 'IoT', 'C++', 'Systèmes embarqués'] },
  ]

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>

      {/* HERO ABOUT */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center', borderBottom: '1px solid #D4AF37' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '4rem', marginBottom: '1rem' }}>
          QUI EST MAKA GR ?
        </h1>
        <p style={{ color: '#F5F5F0', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          Je suis <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>Théogène Facrino</span> — 
          étudiant en Master 1 EII à Antananarivo, Madagascar. 
          Musicien Afrobeat, développeur web et entrepreneur. 
          Je vis entre deux mondes : la musique africaine et la technologie du futur.
        </p>
      </div>

      {/* VALEURS */}
      <div style={{ padding: '5rem 2rem', backgroundColor: '#1A1A1A' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          MES VALEURS
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {valeurs.map((valeur, index) => (
            <div key={index} style={{ backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>
                {valeur.titre}
              </h3>
              <p style={{ color: '#F5F5F0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {valeur.texte}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ padding: '5rem 2rem' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          MON PARCOURS
        </h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {timeline.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
              <div style={{ color: '#D4AF37', fontWeight: 'bold', fontSize: '1.2rem', minWidth: '60px' }}>
                {item.annee}
              </div>
              <div style={{ flex: 1, borderLeft: '2px solid #D4AF37', paddingLeft: '1.5rem', paddingBottom: '1rem' }}>
                <p style={{ color: '#F5F5F0', fontSize: '1rem', lineHeight: '1.6' }}>
                  {item.evenement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPÉTENCES */}
      <div style={{ padding: '5rem 2rem', backgroundColor: '#1A1A1A' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          MES COMPÉTENCES
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {competences.map((cat, index) => (
            <div key={index} style={{ backgroundColor: '#0A0A0A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
                {cat.categorie}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((item, i) => (
                  <span key={i} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.3rem 0.8rem', borderRadius: '9999px', fontSize: '0.85rem' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', marginBottom: '2rem' }}>
          MA MISSION
        </h2>
        <p style={{ color: '#F5F5F0', fontSize: '1.3rem', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', borderLeft: '4px solid #D4AF37', paddingLeft: '2rem', textAlign: 'left' }}>
          "Sortir de la pauvreté durablement par la compétence, la discipline 
          et la création de valeur — pour moi, pour ma famille, 
          et pour Madagascar et l'Afrique."
        </p>
        <p style={{ color: '#888', marginTop: '1rem' }}>— Théogène Facrino / MAKA GR</p>
      </div>

    </div>
  )
}

export default About