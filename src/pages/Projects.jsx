function Projects() {
  const projets = [
    {
      nom: 'CommuneService',
      description: 'Système de gestion des demandes administratives full-stack. Les citoyens soumettent leurs demandes en ligne, les agents les traitent.',
      stack: ['Node.js', 'Express', 'MySQL', 'Bootstrap 5'],
      statut: 'Terminé',
      emoji: '🏛️'
    },
    {
      nom: 'SISA²',
      description: "Système IoT solaire intelligent basé sur ESP32. Gestion et monitoring d'énergie solaire en temps réel.",
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
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <h1 className="text-[#D4AF37] text-5xl text-center mb-4">
        MES PROJETS
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Web · IoT · Intelligence Artificielle
      </p>

      <div style={{ maxWidth: '900px', width: '100%', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>

        {projets.map((projet, index) => (
          <div key={index} style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{projet.emoji}</div>
            <h2 className="text-[#D4AF37] text-2xl mb-3">{projet.nom}</h2>
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
  )
}

export default Projects