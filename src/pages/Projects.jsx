function Projects() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', padding: '4rem 2rem' }}>

      <h1 style={{ color: '#D4AF37', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>
        MES PROJETS
      </h1>

      <p style={{ color: '#F5F5F0', textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem' }}>
        Web · IoT · Intelligence Artificielle
      </p>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

        {[
          {
            nom: 'CommuneService',
            description: 'Système de gestion des demandes administratives full-stack. Les citoyens soumettent leurs demandes en ligne, les agents les traitent.',
            stack: ['Node.js', 'Express', 'MySQL', 'Bootstrap 5'],
            statut: 'Terminé',
            emoji: '🏛️'
          },
          {
            nom: 'SISA²',
            description: 'Système IoT solaire intelligent basé sur ESP32. Gestion et monitoring d\'énergie solaire en temps réel.',
            stack: ['ESP32', 'IoT', 'C++', 'Dashboard'],
            statut: 'En cours',
            emoji: '☀️'
          },
          {
            nom: 'Site MAKA GR',
            description: 'Mon premier actif numérique. Plateforme artistique et portfolio professionnel construit avec React.',
            stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
            statut: 'En cours',
            emoji: '🦅'
          },
        ].map((projet, index) => (
          <div key={index} style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #D4AF37',
            borderRadius: '8px',
            padding: '2rem',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{projet.emoji}</div>

            <h2 style={{ color: '#D4AF37', fontSize: '1.4rem', marginBottom: '0.8rem' }}>
              {projet.nom}
            </h2>

            <p style={{ color: '#F5F5F0', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {projet.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {projet.stack.map((tech, i) => (
                <span key={i} style={{
                  backgroundColor: '#0A0A0A',
                  color: '#D4AF37',
                  border: '1px solid #D4AF37',
                  padding: '0.2rem 0.7rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            <span style={{
              color: projet.statut === 'Terminé' ? '#4CAF50' : '#D4AF37',
              fontSize: '0.85rem',
              fontWeight: 'bold'
            }}>
              ● {projet.statut}
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects