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
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-8 py-16">

      <h1 className="text-[#D4AF37] text-5xl font-bold text-center mb-4">
        MES PROJETS
      </h1>

      <p className="text-[#F5F5F0] text-center text-lg mb-16">
        Web · IoT · Intelligence Artificielle
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projets.map((projet, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg p-6 hover:border-[#F0D060] transition-colors duration-300"
          >
            <div className="text-5xl mb-4">{projet.emoji}</div>

            <h2 className="text-[#D4AF37] text-xl font-bold mb-3">
              {projet.nom}
            </h2>

            <p className="text-[#F5F5F0] text-sm leading-relaxed mb-6">
              {projet.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {projet.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#0A0A0A] text-[#D4AF37] border border-[#D4AF37] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className={`text-sm font-bold ${projet.statut === 'Terminé' ? 'text-green-400' : 'text-[#D4AF37]'}`}>
              ● {projet.statut}
            </span>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects