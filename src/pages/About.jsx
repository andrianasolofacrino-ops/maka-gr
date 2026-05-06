function About() {
  const valeurs = [
    { titre: '🦅 Discipline', texte: "L'aigle n'attend pas le vent, il apprend à voler." },
    { titre: '💡 Compétence', texte: "Le monde paie ce qu'on sait faire, pas ce qu'on mémorise." },
    { titre: '🌍 Impact Afrique', texte: 'Sortir de la pauvreté par la création de valeur.' },
    { titre: '🎵 Création', texte: 'La musique et la tech sont mes deux langages.' },
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-8 py-16">

      <h1 className="text-[#D4AF37] text-5xl font-bold text-center mb-16">
        QUI EST MAKA GR ?
      </h1>

      <div className="max-w-3xl mx-auto">

        <p className="text-[#F5F5F0] text-lg leading-relaxed mb-6">
          Je suis <span className="text-[#D4AF37] font-bold">Théogène Facrino</span>, 
          connu artistiquement sous le nom MAKA GR. Étudiant en Master 1 EII 
          à Antananarivo, Madagascar.
        </p>

        <p className="text-[#F5F5F0] text-lg leading-relaxed mb-12">
          MAKA GR n'est pas juste un nom d'artiste. C'est mon identité complète — 
          musicien Afrobeat/Afropop, développeur web, et entrepreneur. 
          Je vis entre deux mondes : la musique africaine et la technologie du futur.
        </p>

        <h2 className="text-[#D4AF37] text-3xl font-bold mb-8">
          Mes valeurs
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#D4AF37] rounded-lg p-6 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors duration-300 group"
            >
              <h3 className="text-[#D4AF37] group-hover:text-[#0A0A0A] font-bold text-lg mb-3">
                {valeur.titre}
              </h3>
              <p className="text-[#F5F5F0] group-hover:text-[#0A0A0A] text-sm leading-relaxed">
                {valeur.texte}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-[#D4AF37] text-3xl font-bold mb-6">
          Ma mission
        </h2>

        <p className="text-[#F5F5F0] text-lg leading-relaxed italic border-l-4 border-[#D4AF37] pl-6">
          "Sortir de la pauvreté durablement par la compétence, la discipline 
          et la création de valeur — pour moi, pour ma famille, 
          et pour Madagascar et l'Afrique."
        </p>

      </div>
    </div>
  )
}

export default About