// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Monish Alavalapati', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Monish-Alavalapati/DualPort_RAM', 'Monish-Alavalapati/Vedic-Multiplier
', 'Monish-Alavalapati/ShapeRecognition-using-FourierDescriptors', 'Monish-Alavalapati/CustomArduinoUNO'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dual Port RAM',
          description:
            'This project contains the Verilog implementation of a Dual Port RAM. Dual Port RAM allows simultaneous read and write operations on separate ports, providing flexibility for various applications.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Monish-Alavalapati/DualPort_RAM',
        },
        {
          title: 'Shape Recognition Using Fourier Descriptors',
          description:
            'This MATLAB project focuses on shape recognition using Fourier descriptors. Fourier descriptors are mathematical representations of the shapes of objects, which can be used for shape analysis and recognition.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Monish-Alavalapati/ShapeRecognition-using-FourierDescriptors',
        },
        {
          title: 'Vedic Multiplier',
          description:
            'This repository contains the Verilog implementation of a Vedic Multiplier.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Monish-Alavalapati/Vedic-Multiplier',
        },
        {
          title: 'Custom Arduino UNO',
          description:
            'Made a custom arduino PCB design which is cost effective and has optimized power management',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Monish-Alavalapati/CustomArduinoUNO',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Monish Alavalapati',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Monish-Alavalapati',
    twitter: 'MonishAlvalpati',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+918519851685',
    email: 'monishalavalapati@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1uaRRT1JIIcv--yr1PEAX5czZK5wnrBF1/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Verilog',
    'System Verilog',
    'TinyML',
    'MATLAB',
    'VHDL',
    'Nest.js',
    'C++',
    'Python',
    'Git',
    'C',
    'Perl',
    'Arduino',
    'Bash',
    'Simulink',
    'Cadence Virtuoso',
    'KiCAD',
    'XILINX Vivado',
    'PicsimLab',
    'Multisim',
  ],
  experiences: [
    {
      company: 'OPTELLENT, INC.',
      position: 'Design Engineer Intern',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'http://optellent.com',
    },
    {
      company: 'Emertxe Information Technologies',
      position: 'Project Intern',
      from: 'Feb. 2024',
      to: 'March 2024',
      companyLink: 'https://www.emertxe.com',
    },
    {
      company: 'Electronics Club-ELIX',
      position: 'Sub-Technical Lead',
      from: 'Oct. 2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Crash Course Electronics and PCB Design',
      body: '',
      year: 'May 2024',
      link: 'http://ude.my/UC-54295390-496b-40ad-b006-8a2f7f0005ba',
    },
    {
      name: 'Timing Analysis for Intel FPGAs ',
      body: '',
      year: 'Jan. 2024',
      link: 'https://www.credly.com/badges/1bd24d76-260f-40f8-911d-7d494d9293c7/public_url',
    },
    {
      name: 'Verilog HDL Basics',
      body: '',
      year: 'Dec. 2023',
      link: 'https://www.credly.com/badges/b9ba0c51-56be-4f91-9ba8-feb79e62083d/public_url',
    },
    {
      name: 'Verilog HDL Basics',
      body: '',
      year: 'Dec. 2023',
      link: 'https://www.credly.com/badges/b9ba0c51-56be-4f91-9ba8-feb79e62083d/public_url',
    },
    {
      name: 'Introduction to Embedded Machine Learning',
      body: '',
      year: 'Sept. 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/JBNKWQGZAB5U',
    },
    {
      name: 'The Arduino Platform and C Programming',
      body: '',
      year: 'Aug. 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/2E4GAXYRECMT',
    },
    {
      name: 'Simulink',
      body: '',
      year: 'July 2023',
      link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=61add314-f1d9-4699-bf3a-197451bf05ee&',
    },
    {
      name: 'Introduction to Programming Using Python',
      body: '',
      year: 'March 2023',
      link: 'https://www.sololearn.com/certificates/CC-C1B1JSIP',
    },   
  ],
  education: [
    {
      institution: 'Indian Institute of Information Technology, Kottayam',
      degree: 'B.Tech in Electronics and Communication Engineering',
      from: '2022',
      to: '2026',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'synthwave',
      'valentine',
      'halloween',
      'forest',
      'luxury',
      'dracula',
      'dim',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
