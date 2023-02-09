import {AcademicCapIcon, CalendarIcon, DownloadIcon, MapIcon, SparklesIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import profilepic from '../images/Christian/ChristianBakhitMain.jpg';
import profilepic2 from '../images/Christian/ChristianBakhitMain2.jpg';
import profilepic3 from '../images/Christian/ChristianBakhitMain3.jpg';
import profilepic4 from '../images/Christian/ChristianBakhitMain4.jpg';
import profilepic5 from '../images/Christian/ChristianBakhitMain5.jpg';
import profilepic6 from '../images/Christian/ChristianBakhitMain6.jpg';
import heroImage from '../images/Christian/header-background.jpg';
import testimonialImage from '../images/Christian/testimonial.jpg';
import Logo from '../images/logo.png';
import porfolioImage1 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-13.jpg';
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
  name: `I am Christian Bakhit.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Junior at <strong className="text-stone-100">Johns Hopkins University</strong>. My current aspirations
        have led me to the field of Artificial Intelligence and robotics research. I hope that one day I can work on the first Artificial General Intelligence!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        For the past three years I have worked in the <strong className="text-stone-100">Delineo Lab</strong>. Here, I
        have led the team in solving the problem of simulating disease spread.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/resume.pdf',
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
  returnButton: Logo,
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: [profilepic, profilepic2, profilepic3, profilepic4, profilepic5, profilepic6],
  description: `Dedicated Computer Science Undergraduate with three years of experience on a multitude of teams developing services for the greater
  community. Specialized in developing software for delivering information to specialized groups.`,
  aboutItems: [
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Location', text: 'Baltimore, MD', Icon: MapIcon},
    {label: 'Interests', text: 'Guitar, Tennis, Astronomy, Baking', Icon: SparklesIcon},
    {label: 'Study', text: 'Johns Hopkins University', Icon: AcademicCapIcon},
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
    name: 'Languages',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C / C++',
        level: 8,
      },
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
        name: 'SQL',
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
    title: 'Delineo Modeling Project',
    description:
      "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research. We are currently working on a simulation of the COVID-19 pandemic. In particular, I've worked on the website, developing the Python package, and handling backend communications.",
    url: 'https://covidweb.isi.jhu.edu/',
    image: porfolioImage4,
  },
  {
    title: 'AnyTown, USA',
    description:
      "This Unity Project was a team project to implement a 'sims' like simulation of COVID to support Delineo.",
    url: 'https://hub.jhu.edu/2021/08/12/anytown-usa-simulator/',
    image: porfolioImage1,
  },
  {
    title: 'Gemini Discord Bot V2',
    description:
      'A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.',
    url: 'https://github.com/ChrisBJHU/DiscordBot',
    image: porfolioImage3,
  },
  {
    title: 'Covid Tracker (HopHacks 2020)',
    description:
      'A 48 hour hackathon project that aimed to give users information from the JHU dashboard using an API and providing a private tracing list. (Wordpress, Python)',
    url: 'https://github.com/ChrisBJHU/CovidTracker2020',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2020 - Present',
    location: 'Johns Hopkins University',
    title: 'B.S. Computer Science, Applied Mathematics and Statistics',
    content: <h1> Minor in Robotics and Psychology</h1>,
  },
];

export const fun: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2021 - Present',
    location: 'Delineo Disease Modeling',
    title: 'Student Leader',
    content: (
      <ul>
        <li> Manage a team of fifty Computer Science students to implement Agile Project Management</li>
        <li> Created the AnyTown simulation, a visual for COVID-19 leveraging Unity, C#, and React</li>
        <li>
          Facilitated communication with Microsoft Research and AWS and tested a COVID-19 dashboard on Azure Kubernetes
        </li>
        <li> Developed an API and Database using SQL to store user simulation runs</li>
      </ul>
    ),
  },
  {
    date: 'June 2022 - Present',
    location: 'Saint Mary and Archangel Michael Church',
    title: 'Web Developer',
    content: (
      <ul>
        <li> Developed a website for the church using React, HTML, and CSS</li>
        <li> Created a database using SQL to store user information</li>
        <li> Implemented a login system using React and Firebase</li>
      </ul>
    ),
  },
  {
    date: 'Aug 2022 - Dec 2022',
    location: 'Johns Hopkins University',
    title: 'PILOT Leader',
    content: (
      <ul>
        <li>
          {' '}
          Served as a student resource for students taking the Gateway Computing course, providing instruction for 5
          students
        </li>
        <li>
          {' '}
          Prepared lesson plans with other student PILOT leaders weekly, discussing classwork done by students during
          week
        </li>
      </ul>
    ),
  },
  {
    date: 'Jan 2023 - Present',
    location: 'Johns Hopkins University',
    title: 'Individualized Tutor',
    content: (
      <ul>
        <li>Acted as a resource for students taking computer science classes at Johns Hopkins University</li>
        <li>
          Prepared individualized tutoring plans for each student depending on need and class difficulty; for
          Javascript, Python, Java, C, C++
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
      name: 'Dylan Thomas',
      text: '"Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description:
    'I am currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!',
  items: [
    {
      type: ContactType.Email,
      text: 'cbakhit1@jh.edu',
      href: 'mailto:cbakhit1@jh.edu',
    },
    {
      type: ContactType.Location,
      text: 'Baltimore, MD, USA',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@chrisbakhit',
      href: 'https://www.instagram.com/chrisbakhit/',
    },
    {
      type: ContactType.Github,
      text: 'ChrisBJHU',
      href: 'https://github.com/ChrisBJHU',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ChrisBJHU'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christianbakhit/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/chrisbakhit/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ChristianBakhit'},
];
