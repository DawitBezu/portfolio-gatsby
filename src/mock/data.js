import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dawit Bezu | Developer', 
  lang: 'en', 
  description: 'Welcome to my website', 
};

// HERO DATA
export const heroData = {
  title: "Hello I'm",
  name: 'Dawit Bezu',
  subtitle: '/ a JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: "When I'm not trying to help make the Web a better place, I can be found taking of on a cycling adventure, experimenting in the kitchen with my little once or playing football.",
  paragraphTwo: 'available for hire',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pic03.jpg',
    title: 'Recipe Finder',
    info: 'A recipe lookup application implemented with React & an API.',
    info2: '',
    url: 'https://cocky-heyrovsky-c3d950.netlify.app/',
    repo: 'https://github.com/DawitBezu/react-recipe-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pic01.jpg',
    title: 'Responsive Product landing page',
    info: 'Displays UI with showcase & overlay for products.',
    info2: 'Implemented with css variable & Media Queries.',
    url: 'https://affectionate-meitner-30615b.netlify.app/',
    repo: 'https://github.com/DawitBezu/responsive-product-landing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pic02.jpg',
    title: 'Netflix Clone',
    info: 'A responsive Netflix clone landing page',
    info2: '',
    url: 'https://heuristic-bhabha-ed51f7.netlify.app/',
    repo: 'https://github.com/DawitBezu/Netflix-landing/', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dawitbezumengistu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dawit-bezu',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DawitBezu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
