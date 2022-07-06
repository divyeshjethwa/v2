/*
 * File: config.json
 * Project: v1
 * File Created: Thursday, 6th February 2020 5:54:04 pm
 * Author: Divyesh Jethwa
 * -----
 * Last Modified: Wednesday, 6th July 2022 11:40:51 am
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

export const aboutmeData = {
  p1: " Hello! I'm Divyesh, a software engineer based in Bangalore, India who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.",
  p2: 'Currently, I work with the engineering team at CSG International Telecomm where I analyzie UI designs and delineate them to create pixel perfect dynamic resuable components.',
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

export const workData = [
  {
    name: 'Project',
    image: 'https://picsum.photos/300/200.jpg',
    description:
      'Velit exercitation esse et reprehenderit in incididunt exercitation ut id aliquip. Et ullamco id cupidatat nulla enim sunt et laboris eiusmod proident labore velit. Ea est nostrud mollit proident nostrud magna sit exercitation ea consequat consectetur. Labore incididunt excepteur aliquip id mollit minim voluptate nisi anim laboris.',
  },
  {
    name: 'Project',
    image: 'https://picsum.photos/300/200.jpg',
    description:
      'Velit exercitation esse et reprehenderit in incididunt exercitation ut id aliquip. Et ullamco id cupidatat nulla enim sunt et laboris eiusmod proident labore velit. Ea est nostrud mollit proident nostrud magna sit exercitation ea consequat consectetur. Labore incididunt excepteur aliquip id mollit minim voluptate nisi anim laboris.',
  },
  {
    name: 'Project',
    image: 'https://picsum.photos/300/200.jpg',
    description:
      'Velit exercitation esse et reprehenderit in incididunt exercitation ut id aliquip. Et ullamco id cupidatat nulla enim sunt et laboris eiusmod proident labore velit. Ea est nostrud mollit proident nostrud magna sit exercitation ea consequat consectetur. Labore incididunt excepteur aliquip id mollit minim voluptate nisi anim laboris.',
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
