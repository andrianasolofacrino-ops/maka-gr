function Projects() {
  const projets = [
    {
      nom: 'CommuneService',
      description: 'Système de gestion des demandes administratives full-stack. Les citoyens soumettent leurs demandes en ligne, les agents les traitent et les citoyens suivent en temps réel.',
      stack: ['Node.js', 'Express', 'MySQL', 'Bootstrap 5'],
      statut: 'Terminé',
      emoji: '🏛️',
      categorie: 'Web'
    },
    {
      nom: 'SISA²',
      description: "Système IoT solaire intelligent basé sur ESP32. Gestion et monitoring d'énergie solaire en temps réel avec dashboard de contrôle.",
      stack: ['ESP32', 'IoT', 'C++', 'Dashboard'],
      statut: 'En cours',
      emoji: '☀️',
      categorie: 'IoT'
    },
    {
      nom: 'Site MAKA GR',
      description: 'Mon premier actif numérique. Plateforme artistique et portfolio professionnel construit avec React, Vite et Tailwind CSS.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
      statut: 'En cours',
      emoji: '🦅',
      categorie: 'Web'
    },
  ]

  const futurs = [
    { titre: 'App Mobile MAKA GR', description: 'Application mobile pour suivre ma musique et mes projets.', emoji: '📱' },
    { titre: 'Plateforme IA Madagascar', description: 'Système IA pour résoudre des problèmes locaux malgaches.', emoji: '🤖' },
    { titre: 'École de Code Madagascar', description: 'Former les jeunes malgaches au développement web.', emoji: '🎓' },
  ]

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>

      {/* HERO */}
      <div style={{ padding: '5rem 2rem', textAlign: 'center', borderBottom: '1px solid #D4AF37' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '4rem', marginBottom: '1rem' }}>
          MES PROJETS
        </h1>
        <p style={{ color: '#F5F5F0', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Web · IoT · Intelligence Artificielle
        </p>
        <p style={{ color: '#888', fontSize: '1rem', fontStyle: 'italic' }}>
          Chaque projet est une solution à un vrai problème.
        </p>
      </div>

      {/* PROJETS ACTUELS */}
      <div style={{ padding: '5rem 2rem' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
          PROJETS ACTUELS
        </h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {projets.map((projet, index) => (
            <div key={index} style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem' }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{projet.emoji}</span>
                <span style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.2rem 0.8rem', borderRadius: '9999px', fontSize: '0.75rem' }}>
                  {projet.categorie}
                </span>
              </div>

              <h2 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {projet.nom}
              </h2>

              <p style={{ color: '#F5F5F0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {projet.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {projet.stack.map((tech, i) => (
                  <span key={i} style={{ color: '#D4AF37', border: '1px solid #D4AF37', padding: '0.2rem 0.7rem', borderRadius: '9999px', fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <span style={{ color: projet.statut === 'Terminé' ? '#4CAF50' : '#D4AF37', fontWeight: 'bold', fontSize: '0.9rem' }}>
                ● {projet.statut}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* PROJETS FUTURS */}
      <div style={{ backgroundColor: '#1A1A1A', padding: '5rem 2rem' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>
          VISION FUTURE
        </h2>
        <p style={{ color: '#F5F5F0', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Ce que je construirai demain
        </p>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {futurs.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#0A0A0A', border: '1px dashed #D4AF37', borderRadius: '8px', padding: '2rem', textAlign: 'center', opacity: 0.8 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.emoji}</div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1rem' }}>
                {item.titre}
              </h3>
              <p style={{ color: '#F5F5F0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {item.description}
              </p>
              <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '1rem' }}>
                🔜 En préparation
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects