import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  VetCare,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  AirEv,
  mongodb,
  git,
  ChatApp,
  figma,
  docker,
  Youtube,
  // meta,
  // starbucks,
  // tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Footox Footwear Limted",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2022 - April 2023",
    points: [
      "Architected and coded server-side features for an e-commerce website, driving a 40% increase in sales within six months.",
      "Implemented robust security measures, optimized performance, and enhanced user experience for a seamless and secure application environment.",
      "Wrote clean, well-documented code following best practices and industry standards.",
      " Utilized AWS and Google Cloud Platform for scalable development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },


  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: shopify,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },


  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "AirEv",
    description:
      "Web-based platform that allows users to search, book, and rent Ev Charging Stations from various providers, providing a convenient and efficient solution for Ev in India.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: AirEv,
    source_code_link: "https://github.com/OctoCat-r/Airev.git",
  },
  {
    name: "VetCare",
    description:
      "Introducing Vetcare, the ultimate healthcare app for animal lovers! Vetcare is a comprehensive platform that connects pet owners with veterinary professionals from all around the country. This project is developed using the MERN stack technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: VetCare,
    source_code_link: "https://github.com/OctoCat-r/VetCare.git",
  },
  {
    name: "ChatApp",
    description:
      "A comprehensive Chat Application which great user Interface where you can chat privately or in groups while sharing photos",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React/Vite",
        color: "green-text-gradient",
      },
      {
        name: "chatEngine API",
        color: "pink-text-gradient",
      },
    ],
    image: ChatApp,
    source_code_link: "https://github.com/OctoCat-r/chatApp.git",
  },
  {
    name: "Youtube Clone",
    description:
      "A exact clone to the original youtube using youtube API where you can wtach videos for free. ",
    tags: [
      {
        name: "API Calling",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Youtube,
    source_code_link: "https://github.com/OctoCat-r/YoutubeClone.git",
    app_link : "https://youtube-clone-y3w7.onrender.com/"
  },
];

export { services, technologies, experiences,  projects };
