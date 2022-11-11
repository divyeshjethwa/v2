/*
 * File: config.json
 * Project: v1
 * File Created: Thursday, 6th February 2020 5:54:04 pm
 * Author: Divyesh Jethwa
 * -----
 * Last Modified: Friday, 11th November 2022 9:50:39 am
 * Modified By: Divyesh Jethwa<divyesh.jeth@gmail.com>
 * -----
 */

export const introData = {
  header: 'Hi, my name is',
  name: 'Divyesh Jethwa.',
  tagline: 'I build minimalistic web apps.',
  about:
    "I'm a software engineer based in Bangalore, India specializing in developing exceptional minimalistic, high-quality websites and applications.",
  getInTouch: 'Hire me',
};

export const expData = [
  {
    name: 'Recreate App',
    position: 'UI Developer',
    isClicked: true,
    time: 'July 2022 - Present',
    content: [
      'Build responsive user interfaces.',
      'Write clean, commented code.',
      'Optimize app for modularity and speed.',
      'Estimate tasks and stick with self-imposed deadlines.',
    ],
  },
  {
    name: 'CSG International',
    position: 'Software Engineer',
    isClicked: false,
    time: 'May 2020 - June 2022',
    content: [
      'Built and maintained a search engine with support for searching with various categories and subcategories.',
      'Transformed UIs using Angular, RxJS and Storybook, decreasing development time and increasing the rate of delivery by 30%.',
      'Focused on front-end development, providing mentorship and coaching to new joinees.',
    ],
  },
  {
    name: 'Altorum leren',
    position: 'Web Developer',
    isClicked: false,
    time: 'Jan 2019 - Feb 2020',
    content: [
      'Developed a highly interactive and responsive application using React and RxJS.',
      'Teamed up with peers to redesign a clean API that offered increased flexibility and integrated APIs with the front-end.',
      'Took the challenge of implementing voice and video call in the application using Twilio. ',
      'Drafted documentation delineating designs and specs for more than 6 projects.',
    ],
  },
  {
    name: 'Mystro',
    position: 'Application Development Intern',
    time: 'Jul 2018 - Dec 2018',
    isClicked: false,
    content: [
      'Worked with 5 other interns under the supervision of senior software engineer full stack development of the e-commerce system.',
      'Received coaching and support from peers and senior software engineers, and gained practical experience using Java and Python.',
      'Developed a PDF file generator by reading data from JSON files and creating word documents using JAVA and Apache POI Lib. Implemented using the Collections framework.',
    ],
  },
];

export const aboutmeData = {
  p1: " Hello! I'm Divyesh, a software engineer based in Bangalore, India who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.",
  p2: 'Currently, I work with the engineering team at Recreate App where I analyzie UI designs and delineate them to create pixel perfect dynamic resuable components.',
  p3: "Here are a few technologies I've been working with recently:",
  skills: [
    'JavaScript (ES6+)',
    'HTML & (S)CSS',
    'Angular/React',
    'Node.js',
    'Storybook',
    'Redux',
  ],
};

// 'https://i.postimg.cc/9F0GZ61S/angular.png',
// 'https://i.postimg.cc/P58YF1gQ/html5.png',
// 'https://i.postimg.cc/Fs60ZTBK/nodejs.png',
// 'https://i.postimg.cc/3w5mMd75/sass.png',
// 'https://i.postimg.cc/0NYm9P26/typescript.png',
// 'https://i.postimg.cc/3R3GRVdt/webpack.png',

export const workData = [
  {
    name: 'Personal portfolio',
    hosting_link: 'https://libraverse.netlify.app/',
    image: 'https://i.postimg.cc/k4DjjTmX/v2-landing.png',
    description: 'A starry dark themed minimalistic portfolio. ',
    skills: [
      { link: 'https://i.postimg.cc/9F0GZ61S/angular.png', name: 'Angular' },
      { link: 'https://i.postimg.cc/P58YF1gQ/html5.png', name: 'HTML5' },
      { link: 'https://i.postimg.cc/3w5mMd75/sass.png', name: 'Sass' },
      {
        link: 'https://i.postimg.cc/0NYm9P26/typescript.png',
        name: 'Typescript',
      },
      { link: 'https://i.postimg.cc/3R3GRVdt/webpack.png', name: 'Webpack' },
    ],
  },
  {
    name: 'NG Currencies demo with API',
    hosting_link: 'https://ng-currencies.netlify.app/',
    image: 'https://i.postimg.cc/q7gj9HLg/full.png',
    description:
      'A sample SPA with dropdowns and minimalistic UI showcasing currencies API integration. ',
    skills: [
      { link: 'https://i.postimg.cc/9F0GZ61S/angular.png', name: 'Angular' },
      { link: 'https://i.postimg.cc/P58YF1gQ/html5.png', name: 'HTML5' },
      { link: 'https://i.postimg.cc/3w5mMd75/sass.png', name: 'Sass' },
      {
        link: 'https://i.postimg.cc/0NYm9P26/typescript.png',
        name: 'Typescript',
      },
      { link: 'https://i.postimg.cc/3R3GRVdt/webpack.png', name: 'Webpack' },
    ],
  },
];

export const contactmeData = {
  title: "What's Next?",
  subtitle: 'Get In Touch',
  content:
    "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
  button: 'Say Hello',
};

export enum Direction {
  Up = 'Up',
  Down = 'Down',
}

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

export const navigationLinks = [
  {
    order: 'I.',
    title: 'About',
    id: '#about',
    delay: 'delay-1',
  },
  {
    order: 'II.',
    title: 'Experience',
    id: '#experience',
    delay: 'delay-2',
  },
  {
    order: 'III.',
    title: 'Work',
    id: '#work',
    delay: 'delay-3',
  },
  {
    order: 'IV.',
    title: 'Contact',
    id: '#contact',
    delay: 'delay-4',
  },
];
