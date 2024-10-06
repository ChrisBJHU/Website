import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import profilepic3 from "../images/Christian/ChristianBakhitMain3.jpg";
import heroImage from "../images/Christian/header-background.jpg";
import image1 from "../images/Christian/image1.png";
import image2 from "../images/Christian/image2.jpg";
import testimonialImage from "../images/Christian/testimonial.jpg";
import dylanthomas from "../images/dylanthomas.jpg";
import Logo from "../images/logo.png";
import portfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-10.jpg";
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
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Bakhit | Software Engineering",
  description: "Christian and Jonathan Bakhit's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Hobbies: "hobbies",
  Testimonials: "testimonials",
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
        I am a Graduate Student from {" "}
        <strong className="text-stone-100">Johns Hopkins University</strong>. My
        current aspirations have led me to the field of Artificial Intelligence
        and robotics research. I hope that one day I can work on the first
        Artificial General Intelligence!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently on the search for jobs in the field of Data Science!
      </p>
    </>
  ),
  actions: [
    {
      href: "assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
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
  profileImageSrc: [profilepic3],
  description: `Dedicated Computer Science Undergraduate with three years of experience on a multitude of teams developing services for the greater
  community. Specialized in developing software for delivering information to specialized groups.`,
  aboutItems: [
    {label: "Age", text: "22", Icon: CalendarIcon},
    {label: "Location", text: "Houston, TX", Icon: MapIcon},
    {
      label: "Interests",
      text: "Guitar, Tennis, Astronomy, Baking",
      Icon: SparklesIcon,
    },
    {label: "Study", text: "Johns Hopkins University, St. Athanasius Theological Seminary", Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Arabic",
        level: 4,
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "Java",
        level: 10,
      },
      {
        name: "Python",
        level: 10,
      },
      {
        name: "C / C++",
        level: 8,
      },
    ],
  },
  {
    name: "Fullstack development",
    skills: [
      {
        name: "Node.js",
        level: 10,
      },
      {
        name: "React",
        level: 10,
      },
      {
        name: "SQL",
        level: 8,
      },
    ],
  },
  {
    name: "Miscellaneous",
    skills: [
      {
        name: "Unity",
        level: 7,
      },
      {
        name: "Android Studio",
        level: 7,
      },
      {
        name: "Flutter",
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
    title: "Delineo Modeling Project",
    description:
      "The research project I've been fortunate to help research and develop. We aim to create a sandbox for future epidemiological research.",
    url: "https://covidweb.isi.jhu.edu/",
    image: image1,
  },
  {
    title: "Gemini Discord Bot V2",
    description:
      "A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.",
    url: "https://github.com/ChrisBJHU/DiscordBot",
    image: portfolioImage7,
  },
  {
    title: "Covid Tracker (HopHacks 2020)",
    description:
      "A 48 hour hackathon project that aimed to give users information from the JHU dashboard using an API and providing a private tracing list. (Wordpress, Python)",
    url: "https://github.com/ChrisBJHU/CovidTracker2020",
    image: porfolioImage2,
  },
  {
    title: "Gemini Discord Bot V1",
    description:
      "A discord bot that provides useful information to the user about watched stocks, website downtimes, and more.",
    url: "",
    image: porfolioImage3,
  },
  {
    title: "HopMC",
    description:
      "A Minecraft server that I ran for a few years. It was a great way to learn about server management and how to run a community.",
    url: "https://studentaffairs.jhu.edu/dmc/hopmc/",
    image: image2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "Aug 2020 - May 2024",
    location: "Johns Hopkins University",
    title: "B.S. Computer Science, Applied Mathematics and Statistics",
    content: <h1> Minor in Robotics, Mathematics, and Psychology</h1>,
  },
];

export const fun: TimelineItem[] = [
  {
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2023 - May 2024",
    location: "SkillLink",
    title: "Founder",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Invented a business with the goal of revolutionizing the networking industry by addressing significant market issues.
        </li>
        <li>
          Constructed a tailored website and backend infrastructure using HTML5, CSS3, Node.js, and AWS S3.
        </li>
        <li>
          Competed in the Spark Accelerator, securing a $500 investment and developing a Minimum Viable Product (MVP).
        </li>
      </ul>
    ),
  },
  {
    date: "August 2022 - May 2024",
    location: "Johns Hopkins University",
    title: "Academic Support - Tutor",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Acted as a valuable resource and mentor for students taking introductory computer science courses.
        </li>
        <li>
          Created individualized tutoring plans for students, covering programming languages such as JavaScript, Python, Java, C, and C++.
        </li>
      </ul>
    ),
  },
  {
    date: "June 2022 - August 2023",
    location: "Saint Mary and Archangel Michael Church",
    title: "Fullstack Developer",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Developed and maintained the church website using React, Firebase Database, and EmailJS.
        </li>
        <li>
          Led a redesign of the user experience tailored to older users aged 60 and above.
        </li>
      </ul>
    ),
  },
  {
    date: "Jan 2021 - May 2023",
    location: "Delineo Disease Modeling",
    title: "Student Leader",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Managed a team of 50 Computer Science students, implementing Agile Project Management practices.
        </li>
        <li>
          Developed the AnyTown simulation for COVID-19 using Unity, C#, and React.
        </li>
        <li>
          Facilitated collaboration with Microsoft Research and AWS, testing a COVID-19 dashboard on Azure Kubernetes.
        </li>
        <li>
          Created an API and database using SQL to store user simulation runs.
        </li>
      </ul>
    ),
  },
  {
    date: "Jan 2023 - April 2023",
    location: "The Good Shepherd",
    title: "Web Developer",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li>
          Designed a bespoke website and mobile app for the Orthodox Church community using Next.js and React.
        </li>
        <li>
          Implemented new features, including account support using SQL.
        </li>
      </ul>
    ),
  },
];

export const leadership: TimelineItem[] = [
  {
    date: "May 2023 - Jan 2024",
    location: "Student Government Association (SGA)",
    title: "Senior Class Senator",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li> Organized 2+ campus events as part of the Senior Class Programming Board.</li>
        <li> Developed initiatives to improve campus student life, including enhancing library access.</li>
        <li> Advocated for and established a campus prayer room by liaising with Sheridan Libraries representatives.</li>
        <li> Improved student services, including wellness programs, housing accommodations, and career counseling.</li>
        <li> Contributed to curriculum development in the Whiting School of Engineering through faculty meetings.</li>
      </ul>
    ),
  },
  {
    date: "August 2023 - May 2024",
    location: "Orthodox Christian College Ministry (OCCM)",
    title: "President",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li> Founded and led a club for 10+ students, organizing weekly meetings and events.</li>
        <li> Secured space for the group’s General Body Meetings by coordinating with the LEED office.</li>
        <li> Fostered communication with other OCCM chapters and religious organizations for joint activities.</li>
      </ul>
    ),
  },
  {
    date: "August 2020 - May 2022",
    location: "Hopkins Minecraft Club (HopMC)",
    title: "President",
    content: (
      <ul style={{ listStyleType: "circle" }}>
        <li> Partnered with the Digital Media Center to provide gaming space for 60+ students.</li>
        <li> Developed targeted advertising campaigns, resulting in increased event attendance and engagement.</li>
        <li> Responded to critical data breaches like the Log4j vulnerability, ensuring system security.</li>
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
      name: "Dylan Thomas",
      text: '"Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light."',
      image:
        dylanthomas,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch",
  description:
    "I am currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!",
  items: [
    {
      type: ContactType.Email,
      text: "cbakhit1@jh.edu",
      href: "mailto:cbakhit1@jh.edu",
    },
    {
      type: ContactType.Location,
      text: "Baltimore, MD, USA",
      href: "https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z",
    },
    {
      type: ContactType.Instagram,
      text: "@chrisbakhit",
      href: "https://www.instagram.com/chrisbakhit/",
    },
    {
      type: ContactType.Github,
      text: "ChrisBJHU",
      href: "https://github.com/ChrisBJHU",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: "Github", Icon: GithubIcon, href: "https://github.com/ChrisBJHU"},
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/christianbakhit/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/chrisbakhit/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/ChristianBakhit",
  },
];
