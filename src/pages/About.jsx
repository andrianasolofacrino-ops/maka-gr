function About() {
  const valeurs = [
    { titre: '🦅 Discipline', texte: "L'aigle n'attend pas le vent, il apprend à voler." },
    { titre: '💡 Compétence', texte: "Le monde paie ce qu'on sait faire, pas ce qu'on mémorise." },
    { titre: '🌍 Impact Afrique', texte: 'Sortir de la pauvreté par la création de valeur.' },
    { titre: '🎵 Création', texte: 'La musique et la tech sont mes deux langages.' },
  ]

  return (
    <div className="bg-[#0A0A0A] min-h-screen py-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <h1 className="text-[#D4AF37] text-5xl text-center mb-16">
        QUI EST MAKA GR ?
      </h1>

      <div style={{ maxWidth: '800px', width: '100%', padding: '0 2rem' }}>

        <p className="text-[#F5F5F0] text-lg leading-relaxed mb-6">
          Je suis <span className="text-[#D4AF37] font-bold">Théogène Facrino</span>,
          connu artistiquement sous le nom MAKA GR. Étudiant en Master 1 EII
          à Antananarivo, Madagascar.
        </p>

        <p className="text-[#F5F5F0] text-lg leading-relaxed mb-16">
          MAKA GR n'est pas juste un nom d'artiste. C'est mon identité complète —
          musicien Afrobeat/Afropop, développeur web, et entrepreneur.
          Je vis entre deux mondes : la musique africaine et la technologie du futur.
        </p>

        <h2 className="text-[#D4AF37] text-3xl mb-8">Mes Valeurs</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
          {valeurs.map((valeur, index) => (
            <div key={index} style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4AF37', borderRadius: '8px', padding: '1.5rem' }}>
              <h3 className="text-[#D4AF37] text-xl mb-3">{valeur.titre}</h3>
              <p className="text-[#F5F5F0] text-sm leading-relaxed">{valeur.texte}</p>
            </div>
          ))}
        </div>

        <h2 className="text-[#D4AF37] text-3xl mb-6">Ma Mission</h2>

        <p className="text-[#F5F5F0] text-lg leading-relaxed italic" style={{ borderLeft: '4px solid #D4AF37', paddingLeft: '1.5rem' }}>
          "Sortir de la pauvreté durablement par la compétence, la discipline
          et la création de valeur — pour moi, pour ma famille,
          et pour Madagascar et l'Afrique."
        </p>

      </div>
    </div>
  )
}

export default About