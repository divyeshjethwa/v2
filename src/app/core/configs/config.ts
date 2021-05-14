/*
 * File: config.json
 * Project: v1
 * File Created: Thursday, 6th February 2020 5:54:04 pm
 * Author: Divyesh Jethwa
 * -----
 * Last Modified: Saturday, 29th February 2020 8:04:50 am
 * Modified By: Divyesh Jethwa <divyesh.jeth@gmail.com>
 * -----
 */

export const introData = {
  header: "Hi, my name is",
  name: "Divyesh Jethwa.",
  tagline: "I build minimalistic web apps.",
  about:
    "I'm a software engineer based in Bangalore, India specializing in developing exceptional minimalistic, high-quality websites and applications.",
  getInTouch: "Get In Touch"
};

export const aboutmeData = {
  p1:
    " Hello! I'm Divyesh, a software engineer based in Bangalore, India who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.",
  p2:
    "Shortly after graduating from Mumbai University, I joined the engineering team at Altorum Leren where I work on a wide variety of interesting and meaningful projects on a daily basis.",
  p3: "Here are a few technologies I've been working with recently:",
  skills: [
    "JavaScript (ES6+)",
    "HTML & (S)CSS",
    "Angular 6+",
    "Node.js",
    "Express",
    "RxJS"
  ]
};

export const contactmeData = {
  title: "What's Next?",
  subtitle: "Get In Touch",
  content:
    "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
  button: "Say Hello"
};

export enum Direction {
  Up = "Up",
  Down = "Down"
}
export enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden"
}

export const navigationLinks = [
  {
    order: "I.",
    title: "About",
    id: "#about",
    delay: "delay-1"
  },
  {
    order: "II.",
    title: "Experience",
    id: "#experience",
    delay: "delay-2"
  },
  {
    order: "III.",
    title: "Work",
    id: "#work",
    delay: "delay-3"
  },
  {
    order: "IV.",
    title: "Contact",
    id: "#contact",
    delay: "delay-4"
  }
];
