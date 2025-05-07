import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vidya Marg",
  description: "Free JEE/NEET study guides with English chapters and Hinglish videos",
  cleanUrls: true,
  markdown: {
    math: true, // Enables MathJax
  },
  head: [
    ['link', { rel: 'icon', href: '/logos/maroon-bg-logo-128.ico' }],
    ['meta', { name: 'keywords', content: 'JEE physics book, NEET physics book, physics book, physics for JEE and NEET' }],
    ['meta', { name: 'og:image', content: 'https://vidyamarg.com/og-physics-book.jpg' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Physics Book',
      url: 'https://vidyamarg.com/books/physics',
      description: 'Free physics chapters with English explanations and MCQs for JEE and NEET.',
    })],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', async: "true" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Project Kanha', link: 'https://projectkanha.com/' },
      { text: 'Home', link: '/' },
      { text: 'Physics', link: '/jee-neet/physics' },
      { text: 'Books', link: '/books' },
    ],

    sidebar: {
      "jee-neet/physics": [
        {
          text: 'Introduction to Physics', link: 'jee-neet/physics/getting-started'
        },
        {
          text: 'Physical Quantities & SI Units', link: 'jee-neet/physics/physical-quantities-and-si-units'
        },
        {
          text: 'Units and dimensions', link: 'jee-neet/physics/units-and-dimensions'
        },

        { text: 'Maths Basics for Physics', link: 'jee-neet/physics/maths-basics-for-physics' },
        {
          text: 'Mechanics', link: 'jee-neet/physics'
        },
      ],
      '/books/physics/': [
        {
          text: 'JEE/NEET Physics Book',
          items: [
            { text: 'Overview', link: '/books/physics' },
            { text: 'Measurement', link: '/books/physics/measurement' },
            { text: 'Motion Along a Straight Line', link: '/books/physics/motion-straight-line' },
            { text: 'Vectors', link: '/books/physics/vectors' },
            { text: 'Motion in Two and Three Dimensions', link: '/books/physics/motion-2d-3d' },
            { text: 'Force and Motion—I', link: '/books/physics/force-motion-1' },
            { text: 'Force and Motion—II', link: '/books/physics/force-motion-2' },
            { text: 'Kinetic Energy and Work', link: '/books/physics/kinetic-energy-work' },
            { text: 'Potential Energy and Conservation of Energy', link: '/books/physics/potential-energy-conservation' },
            { text: 'Center of Mass and Linear Momentum', link: '/books/physics/center-mass-momentum' },
            { text: 'Rotation', link: '/books/physics/rotation' },
            { text: 'Rolling, Torque, and Angular Momentum', link: '/books/physics/rolling-torque-angular-momentum' },
            { text: 'Equilibrium and Elasticity', link: '/books/physics/equilibrium-elasticity' },
            { text: 'Gravitation', link: '/books/physics/gravitation' },
            { text: 'Fluids', link: '/books/physics/fluids' },
            { text: 'Oscillations', link: '/books/physics/oscillations' },
            { text: 'Waves—I', link: '/books/physics/waves-1' },
            { text: 'Waves—II', link: '/books/physics/waves-2' },
            { text: 'Temperature, Heat, and the First Law of Thermodynamics', link: '/books/physics/thermodynamics-1' },
            { text: 'The Kinetic Theory of Gases', link: '/books/physics/kinetic-theory-gases' },
            { text: 'Entropy and the Second Law of Thermodynamics', link: '/books/physics/entropy-thermodynamics' },
            { text: 'Coulomb’s Law', link: '/books/physics/coulombs-law' },
            { text: 'Electric Fields', link: '/books/physics/electric-fields' },
            { text: 'Gauss’ Law', link: '/books/physics/gauss-law' },
            { text: 'Electric Potential', link: '/books/physics/electric-potential' },
            { text: 'Capacitance', link: '/books/physics/capacitance' },
            { text: 'Current and Resistance', link: '/books/physics/current-resistance' },
            { text: 'Circuits', link: '/books/physics/circuits' },
            { text: 'Magnetic Fields', link: '/books/physics/magnetic-fields' },
            { text: 'Magnetic Fields Due to Currents', link: '/books/physics/magnetic-fields-currents' },
            { text: 'Induction and Inductance', link: '/books/physics/induction-inductance' },
            { text: 'Electromagnetic Oscillations and Alternating Current', link: '/books/physics/electromagnetic-oscillations-ac' },
            { text: 'Maxwell’s Equations; Magnetism of Matter', link: '/books/physics/maxwells-equations' },
            { text: 'Electromagnetic Waves', link: '/books/physics/electromagnetic-waves' },
            { text: 'Images', link: '/books/physics/images' },
            { text: 'Interference', link: '/books/physics/interference' },
            { text: 'Diffraction', link: '/books/physics/diffraction' },
            { text: 'Relativity', link: '/books/physics/relativity' },
            { text: 'Photons and Matter Waves', link: '/books/physics/photons-matter-waves' },
            { text: 'More About Matter Waves', link: '/books/physics/matter-waves-advanced' },
            { text: 'All About Atoms', link: '/books/physics/atoms' },
            { text: 'Conduction of Electricity in Solids', link: '/books/physics/conduction-solids' },
            { text: 'Nuclear Physics', link: '/books/physics/nuclear-physics' },
            { text: 'Energy from the Nucleus', link: '/books/physics/nuclear-energy' },
            { text: 'Quarks, Leptons, and the Big Bang', link: '/books/physics/quarks-leptons' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@VidyaMargbyRaviShankar-w9u' }
    ]
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('mathjax')) {
              return 'mathjax'
            }
            //physics v1 books
            if (id.includes('books/physics/v1/atoms')) {
              return 'physics-v1-atoms'
            }
            if (id.includes('books/physics/v1/capacitance')) {
              return 'physics-v1-capacitance'
            }
            if (id.includes('books/physics/v1/center-mass-momentum')) {
              return 'physics-v1-center-mass-momentum'
            }
            if (id.includes('books/physics/v1/circuits')) {
              return 'physics-v1-circuits'
            }
            if (id.includes('books/physics/v1/conduction-solids')) {
              return 'physics-v1-conduction-solids'
            }
            if (id.includes('books/physics/v1/coulombs-law')) {
              return 'physics-v1-coulombs-law'
            }
            if (id.includes('books/physics/v1/current-resistance')) {
              return 'physics-v1-current-resistance'
            }
            if (id.includes('books/physics/v1/diffraction')) {
              return 'physics-v1-diffraction'
            }
            if (id.includes('books/physics/v1/electric-fields')) {
              return 'physics-v1-electric-fields'
            }
            if (id.includes('books/physics/v1/electric-potential')) {
              return 'physics-v1-electric-potential'
            }
            if (id.includes('books/physics/v1/electromagnetic-oscillations-ac')) {
              return 'physics-v1-electromagnetic-oscillations-ac'
            }
            if (id.includes('books/physics/v1/electromagnetic-waves')) {
              return 'physics-v1-electromagnetic-waves'
            }
            if (id.includes('books/physics/v1/entropy-thermodynamics')) {
              return 'physics-v1-entropy-thermodynamics'
            }
            if (id.includes('books/physics/v1/equilibrium-elasticity')) {
              return 'physics-v1-equilibrium-elasticity'
            }
            if (id.includes('books/physics/v1/fluids')) {
              return 'physics-v1-fluids'
            }
            if (id.includes('books/physics/v1/force-motion-1')) {
              return 'physics-v1-force-motion-1'
            }
            if (id.includes('books/physics/v1/force-motion-2')) {
              return 'physics-v1-force-motion-2'
            }
            if (id.includes('books/physics/v1/gauss-law')) {
              return 'physics-v1-gauss-law'
            }
            if (id.includes('books/physics/v1/gravitation')) {
              return 'physics-v1-gravitation'
            }
            if (id.includes('books/physics/v1/images')) {
              return 'physics-v1-images'
            }
            if (id.includes('books/physics/v1/induction-inductance')) {
              return 'physics-v1-induction-inductance'
            }
            if (id.includes('books/physics/v1/interference')) {
              return 'physics-v1-interference'
            }
            if (id.includes('books/physics/v1/kinetic-energy-work')) {
              return 'physics-v1-kinetic-energy-work'
            }
            if (id.includes('books/physics/v1/kinetic-theory-gases')) {
              return 'physics-v1-kinetic-theory-gases'
            }
            if (id.includes('books/physics/v1/magnetic-fields')) {
              return 'physics-v1-magnetic-fields'
            }
            if (id.includes('books/physics/v1/magnetic-fields-currents')) {
              return 'physics-v1-magnetic-fields-currents'
            }
            if (id.includes('books/physics/v1/matter-waves-advanced')) {
              return 'physics-v1-matter-waves-advanced'
            }
            if (id.includes('books/physics/v1/maxwells-equations')) {
              return 'physics-v1-maxwells-equations'
            }
            if (id.includes('books/physics/v1/measurement')) {
              return 'physics-v1-measurement'
            }
            if (id.includes('books/physics/v1/motion-2d-3d')) {
              return 'physics-v1-motion-2d-3d'
            }
            if (id.includes('books/physics/v1/motion-straight-line')) {
              return 'physics-v1-motion-straight-line'
            }
            if (id.includes('books/physics/v1/nuclear-energy')) {
              return 'physics-v1-nuclear-energy'
            }
            if (id.includes('books/physics/v1/nuclear-physics')) {
              return 'physics-v1-nuclear-physics'
            }
            if (id.includes('books/physics/v1/photons-matter-waves')) {
              return 'physics-v1-photons-matter-waves'
            }
            if (id.includes('books/physics/v1/potential-energy-conservation')) {
              return 'physics-v1-potential-energy-conservation'
            }
            if (id.includes('books/physics/v1/quarks-leptons')) {
              return 'physics-v1-quarks-leptons'
            }
            if (id.includes('books/physics/v1/relativity')) {
              return 'physics-v1-relativity'
            }
            if (id.includes('books/physics/v1/rolling-torque-angular-momentum')) {
              return 'physics-v1-rolling-torque-angular-momentum'
            }
            if (id.includes('books/physics/v1/rotation')) {
              return 'physics-v1-rotation'
            }
            if (id.includes('books/physics/v1/thermodynamics-1')) {
              return 'physics-v1-thermodynamics-1'
            }
            if (id.includes('books/physics/v1/vectors')) {
              return 'physics-v1-vectors'
            }
            if (id.includes('books/physics/v1/waves-1')) {
              return 'physics-v1-waves-1'
            }
            if (id.includes('books/physics/v1/waves-2')) {
              return 'physics-v1-waves-2'
            }
            // Other physics pages (e.g., Thermodynamics, Waves, etc.)
            if (id.includes('/books/physics/v1') || id.includes('/jee-neet/physics/v1')) {
              return 'physics-v1-other'
            }

            //v0 physics book
            if (id.includes('books/physics/atoms')) {
              return 'physics-v0-atoms'
            }
            if (id.includes('books/physics/capacitance')) {
              return 'physics-v0-capacitance'
            }
            if (id.includes('books/physics/center-mass-momentum')) {
              return 'physics-v0-center-mass-momentum'
            }
            if (id.includes('books/physics/circuits')) {
              return 'physics-v0-circuits'
            }
            if (id.includes('books/physics/conduction-solids')) {
              return 'physics-v0-conduction-solids'
            }
            if (id.includes('books/physics/coulombs-law')) {
              return 'physics-v0-coulombs-law'
            }
            if (id.includes('books/physics/current-resistance')) {
              return 'physics-v0-current-resistance'
            }
            if (id.includes('books/physics/diffraction')) {
              return 'physics-v0-diffraction'
            }
            if (id.includes('books/physics/electric-fields')) {
              return 'physics-v0-electric-fields'
            }
            if (id.includes('books/physics/electric-potential')) {
              return 'physics-v0-electric-potential'
            }
            if (id.includes('books/physics/electromagnetic-oscillations-ac')) {
              return 'physics-v0-electromagnetic-oscillations-ac'
            }
            if (id.includes('books/physics/electromagnetic-waves')) {
              return 'physics-v0-electromagnetic-waves'
            }
            if (id.includes('books/physics/entropy-thermodynamics')) {
              return 'physics-v0-entropy-thermodynamics'
            }
            if (id.includes('books/physics/equilibrium-elasticity')) {
              return 'physics-v0-equilibrium-elasticity'
            }
            if (id.includes('books/physics/fluids')) {
              return 'physics-v0-fluids'
            }
            if (id.includes('books/physics/force-motion-1')) {
              return 'physics-v0-force-motion-1'
            }
            if (id.includes('books/physics/force-motion-2')) {
              return 'physics-v0-force-motion-2'
            }
            if (id.includes('books/physics/gauss-law')) {
              return 'physics-v0-gauss-law'
            }
            if (id.includes('books/physics/gravitation')) {
              return 'physics-v0-gravitation'
            }
            if (id.includes('books/physics/images')) {
              return 'physics-v0-images'
            }
            if (id.includes('books/physics/induction-inductance')) {
              return 'physics-v0-induction-inductance'
            }
            if (id.includes('books/physics/interference')) {
              return 'physics-v0-interference'
            }
            if (id.includes('books/physics/kinetic-energy-work')) {
              return 'physics-v0-kinetic-energy-work'
            }
            if (id.includes('books/physics/kinetic-theory-gases')) {
              return 'physics-v0-kinetic-theory-gases'
            }
            if (id.includes('books/physics/magnetic-fields')) {
              return 'physics-v0-magnetic-fields'
            }
            if (id.includes('books/physics/magnetic-fields-currents')) {
              return 'physics-v0-magnetic-fields-currents'
            }
            if (id.includes('books/physics/matter-waves-advanced')) {
              return 'physics-v0-matter-waves-advanced'
            }
            if (id.includes('books/physics/maxwells-equations')) {
              return 'physics-v0-maxwells-equations'
            }
            if (id.includes('books/physics/measurement')) {
              return 'physics-v0-measurement'
            }
            if (id.includes('books/physics/motion-2d-3d')) {
              return 'physics-v0-motion-2d-3d'
            }
            if (id.includes('books/physics/motion-straight-line')) {
              return 'physics-v0-motion-straight-line'
            }
            if (id.includes('books/physics/nuclear-energy')) {
              return 'physics-v0-nuclear-energy'
            }
            if (id.includes('books/physics/nuclear-physics')) {
              return 'physics-v0-nuclear-physics'
            }
            if (id.includes('books/physics/photons-matter-waves')) {
              return 'physics-v0-photons-matter-waves'
            }
            if (id.includes('books/physics/potential-energy-conservation')) {
              return 'physics-v0-potential-energy-conservation'
            }
            if (id.includes('books/physics/quarks-leptons')) {
              return 'physics-v0-quarks-leptons'
            }
            if (id.includes('books/physics/relativity')) {
              return 'physics-v0-relativity'  
            }
            if (id.includes('books/physics/rolling-torque-angular-momentum')) {
              return 'physics-v0-rolling-torque-angular-momentum'
            }
            if (id.includes('books/physics/rotation')) {
              return 'physics-v0-rotation'
            }
            if (id.includes('books/physics/thermodynamics-1')) {
              return 'physics-v0-thermodynamics-1'
            }
            if (id.includes('books/physics/vectors')) {
              return 'physics-v0-vectors'
            }
            if (id.includes('books/physics/waves-1')) {
              return 'physics-v0-waves-1'
            }
            if (id.includes('books/physics/waves-2')) {
              return 'physics-v0-waves-2' 
            }

            // Other physics pages (e.g., Thermodynamics, Waves, etc.)
            if (id.includes('/books/physics/') || id.includes('/jee-neet/physics/')) {
              return 'physics-other'
            }
          }
        }
      }
    },
    server: {
      fs: {
        allow: [  '..'],
      },
    },
  },
  // lastUpdated: true,
})
