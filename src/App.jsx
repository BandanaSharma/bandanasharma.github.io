export default function Portfolio() {
  const skills = [
    'React',
    'Next.js',
    'Angular',
    'Vue/Nuxt',
    'Drupal',
    'JavaScript',
    'UI/UX',
    'Figma',
    'Tailwind CSS',
  ];

  const projects = [
    {
      title: 'HealSecurity',
      description: 'Healthcare cybersecurity dashboard platform.',
    },
    {
      title: 'The Kredible',
      description: 'Fintech platform with responsive React UI.',
    },
    {
      title: 'UserSpace',
      description: 'Modern Framer-based product experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-400 uppercase tracking-widest mb-4">
          Frontend Developer • UI/UX Engineer
        </p>

        <h1 className="text-6xl font-black mb-6">
          Bandana Sharma
        </h1>

        <p className="text-gray-300 text-xl max-w-3xl leading-9">
          Frontend and UI/UX professional with 12+ years of experience
          building enterprise-grade applications and responsive digital experiences.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="mailto:bandanasharma487@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/BandanaSharma"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-2xl"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-8 rounded-3xl border border-white/10 bg-white/5"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 Bandana Sharma
      </footer>
    </div>
  )
}
