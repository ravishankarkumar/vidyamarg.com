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
  }
})
