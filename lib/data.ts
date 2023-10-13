import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import peakHealthImg from "@/public/peak_health.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Coventry University",
    location: "Kathmandu, Nepal",
    description:
      "I graduated in BSc (Hons) Computing with First Class Honors from Coventry University, Uk.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Ayat Digital Pvt Ltd, Nepal",
    description:
      "I joined as a front-end developer intern and worked in Ayat Digital for 6 months. I improved my skils and handled the front-end development of a new health care startup of Ayat Digital.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Junior Front-End Developer",
    location: "InternSathi, Nepal",
    description:
      "I'm now working as a junior front-end developer at a startup called InternSathi, developing new version of InternSathi Job Platform.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PeakHealth",
    description:
      "I worked as a frontend developer on this startup project for 6 months. ",
    tags: ["React", "Next.js", "Material UI", "Redux"],
    imageUrl: peakHealthImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
