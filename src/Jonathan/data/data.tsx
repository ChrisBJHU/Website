import {AcademicCapIcon, CalendarIcon, DownloadIcon, MapIcon, SparklesIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/Jonathan/1.jpg';
import churchImg from '../images/Jonathan/Church.jpg';
import covidImg from '../images/Jonathan/Covid.jpg';
import DoItImg from '../images/Jonathan/DOIT.png';
import heroImage from '../images/Jonathan/Moon.jpg';
import testimonialImage from '../images/Jonathan/Space.png';
import UnityImg from '../images/Jonathan/Unity.jpg';
import DiscordImg from '../images/Jonathan/Discord.png';
import portImg from '../images/portfolio/portfolio-12.jpg';
import HopMC from '../images/Jonathan/HopMC.jpg';


import {
  About,
  ContactSection,
  ContactType,
  Header,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Bakhit | Software Engineering',
  description: "Christian and Jonathan Bakhit's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Hobbies: 'hobbies',
  Testimonials: 'Words',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I am Jonathan Bakhit.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Senior at <strong className="text-stone-100">Johns Hopkins University</strong>. Currently, I am envisioning solutions to help 
        make AI technology more accessible to the general public and to use AI to help solve real world problems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I've worked on a variety of projects ranging from <strong className="text-stone-100">web development</strong> to <strong className="text-stone-100">machine learning</strong>. 
        I hope to continue to learn and grow as a software engineer and to become a reliable and valuable member of any team.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm curently working on a new initative, <a href="https://skilllink.org/" className="text-stone-100"><strong className = "text-stone-100">SkillLink,</strong></a> which is a platform that allows students and job seekers to connect with mentors and professionals in their field of interest.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/JonResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const headerData: Header = {
  returnButton: 'Home',
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: [profilepic],
  description: `Self-Driven and energetic computer science student with a desire to learn and expand his horizons. Over 10 years of experience with a repertoire of knowledge in a lot of different computer-science adjacent fields. Worked in research, industry, and community-based projects which have impacted thousands of people.  `,
  aboutItems: [
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Location', text: 'Houston, TX', Icon: MapIcon},
    {label: 'Interests', text: 'Astronomy, Hiking, Personal Training', Icon: SparklesIcon},
    {label: 'College', text: 'Johns Hopkins University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Arabic',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'JavaScript',
        level: 9,
      }, 
      {
        name: 'C / C++',
        level: 8,
      },
      {
        name: 'HTML',
        level: 7,
      }, {
        name: 'SQL',
        level: 5,
      }
    ],
  },
  {
    name: 'Fullstack development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 7,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Unity',
        level: 7,
      },
      {
        name: 'Android Studio',
        level: 7,
      },
      {
        name: 'Flutter',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'DoIt',
    description: 'A "Social Media" app that allows users to chat with their friends and challenge them to do "tasks". (React, mongoDB, Node.js, Express)',
    url: 'https://doit-oose.herokuapp.com/',
    image: DoItImg,
  },
  {
    title: 'Saint Mary & Archangel Michael Church Website',
    description: 'A website for a local church in Houston, TX. (React)',
    url: 'https://testingwebsiteforchurch.netlify.app/',
    image: churchImg,
  },
  {
    title: 'Delineo Modeling Project',
    description:
      "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research. We are currently working on a simulation of the COVID-19 pandemic. In particular, I've worked on the website, developing the Python package, and handling backend communications.",
    url: 'https://covidweb.isi.jhu.edu/',
    image: covidImg,
  },
  {
    title: 'AnyTown, USA',
    description:
      "This Unity Project was a team project to implement a 'sims' like simulation of COVID to support Delineo.",
    url: 'https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/',
    image: UnityImg,
  },
  {
    title: 'Gemini Discord Bot V2',
    description:
      'A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.',
    url: 'https://github.com/ChrisBJHU/DiscordBot',
    image: DiscordImg,
  },  
  {
    title: 'Covid Tracker (HopHacks 2020)',
    description:
      'A 48 hour hackathon project that aimed to give users information from the JHU dashboard using an API and providing a private tracing list. (Wordpress, Python)',
    url: 'https://github.com/ChrisBJHU/CovidTracker2020',
    image: portImg,
  },
  {
    title: 'HopMC',
    description:
      'A Minecraft Server where I worked on the backend and website. (Java, JSON)',
    url: 'https://studentaffairs.jhu.edu/dmc/hopmc/',
    image: HopMC,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2020 - May 2024',
    location: 'Johns Hopkins University',
    title:
      'B.S. Computer Science, Applied Mathematics and Statistics' +
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ',
    content: <p className="text-sm text-neutral-800">
        Minor(s) in Robotics, Psychology, Mathematics
      </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2023 - Present',
    location: 'FFU | SkillLink',
    title: 'Co-Founder',
    content: (
      <ul className="list-disc">
        <li>Spearheaded the development of a dynamic, personalized website and a robust backend system, seamlessly managing client payments, communication channels, and administrative controls</li>
        <li>Engineered a personalized website and backend handling client payments, communication, and administration control</li>
      </ul>
    ),
  },
  {
    date: 'Aug 2022 - Present',
    location: 'Johns Hopkins University',
    title: 'Head PILOT Leader',
    content: (
      <ul className="list-disc">
        <li>Managed a team of 3 PILOT leaders to provide support for 16 students taking the Gateway Computing course, allowing students to pass the course with a B+ or higher</li>
      </ul>
    ),

  },
  
  {
    date: 'Jan 2021 - Mar 2023',
    location: 'Delineo Disease Modeling',
    title: 'Fullstack Software Engineer & Team Leader',
    content: (
      <ul className="list-disc">
        <li> Managed team of full-stack undergraduates to develop Delineo's robust front-end and back-end for easy navigation of website.</li>
        <li> Created the AnyTown simulation, a visual for COVID-19 leveraging Unity, C#, and React, allowing Delineo to be interesting to all-age groups</li>
        <li>
          Supported Student Leader in working with Microsoft Research and AWS to develop a cloud-based simulation for Delineo as well as updates to Microsoft's COVID UI Dashboard
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2022 - Present',
    location: 'Saint Mary and Archangel Michael Church',
    title: 'Web Developer',
    content: (
      <ul className="list-disc">
        <li> Designed and developed a website for Saint Mary Community Church using React and CSS </li>
        <li> Developed a robust backend which allows the church to easily update the website with new information and keeps the website secure </li>
        <li> Developed a mobile-friendly website that is easy to navigate and allows users to easily access information about the church, greatly increasing the usefulness of the website </li>
      </ul>
    ),
  },
  {
    date: 'Aug 2022 - Present',
    location: 'Johns Hopkins University',
    title: 'PILOT Leader',
    content: (
      <ul className="list-disc">
        <li>
          {' '}
          Served as a student resource for students taking the Gateway Computing course, providing instruction for 5
          students and allowing students to pass the course with a B+ or higher
        </li>
        <li>
          {' '}
          Prepared lesson plans with other PILOT leaders weekly to provide students with the necessary skills to be
          successful in the course and in other future courses
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Twelfth Doctor',
      text: 'Hey, you know, maybe there’s no point to any of this at all. But it’s the best I can do. So I’m going to do it. And I will stand here doing it until it kills me. And you’re going to die too! Some day.. And how will that be? Have you thought about it? What would you die for? Who I am is where I stand. Where I stand is where I fall.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description:
    'I am currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!',
  items: [
    {
      type: ContactType.Email,
      text: 'jbakhit1@jh.edu',
      href: 'mailto:jbakhit1@jh.edu',
    },
    {
      type: ContactType.Location,
      text: 'Houston, TX, USA',
      href: 'https://www.google.ca/maps/place/Houston,+TX/@29.7559698,-95.3573194,3a,75y,90t'
    },
    {
      type: ContactType.Instagram,
      text: '@BakhitJonathan',
      href: 'https://www.instagram.com/BakhitJonathan/',
    },
    {
      type: ContactType.Github,
      text: 'Jonathan Bakhit',
      href: 'https://github.com/syncre02',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/syncre02'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jonathanbakhit/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bakhitjonathan/'},
];
