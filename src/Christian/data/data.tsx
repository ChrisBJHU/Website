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
        I am a Senior at{" "}
        <strong className="text-stone-100">Johns Hopkins University</strong>. My
        current aspirations have led me to the field of Artificial Intelligence
        and robotics research. I hope that one day I can work on the first
        Artificial General Intelligence!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently working on a Startup Idea with the FFU team. We are
        working on a new way to connect people with similar interests. Find out
        more about it{" "}
        <a
          className="text-stone-100 underline hover:text-stone-200"
          href="https://www.skilllink.org/"
        >
          here
        </a>
        !
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
    {label: "Age", text: "21", Icon: CalendarIcon},
    {label: "Location", text: "Baltimore, MD", Icon: MapIcon},
    {
      label: "Interests",
      text: "Guitar, Tennis, Astronomy, Baking",
      Icon: SparklesIcon,
    },
    {label: "Study", text: "Johns Hopkins University", Icon: AcademicCapIcon},
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
    date: "Aug 2020 - Present",
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
    date: "August 2023 - Present",
    location: "FFU | SkillLink",
    title: "Co-Founder",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Developing a new way to connect people with similar interests using
          artificial intelligence and machine learning to match people with
          similar interests.
        </li>

        <li>
          {" "}
          Currently working with FFU to develop a business plan and meet with
          potential investors.
        </li>
      </ul>
    ),
  },
  {
    date: "Aug 2022 - Present",
    location: "Johns Hopkins University",
    title: "PILOT Leader",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Served as a student resource for students taking the Gateway Computing
          course, providing instruction for 5 students
        </li>

        <li>
          {" "}
          Prepared lesson plans with other student PILOT leaders weekly,
          discussing classwork done by students during week
        </li>
      </ul>
    ),
  },
  {
    date: "Jan 2021 - May 2023",
    location: "Delineo Disease Modeling",
    title: "Student Leader",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Manage a team of fifty Computer Science students to implement Agile
          Project Management
        </li>

        <li>
          {" "}
          Created the AnyTown simulation, a visual for COVID-19 leveraging
          Unity, C#, and React
        </li>

        <li>
          Facilitated communication with Microsoft Research and AWS and tested a
          COVID-19 dashboard on Azure Kubernetes
        </li>

        <li>
          {" "}
          Developed an API and Database using SQL to store user simulation runs
        </li>
      </ul>
    ),
  },
  {
    date: "June 2022 - August 2023",
    location: "Saint Mary and Archangel Michael Church",
    title: "Web Developer",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li> Developed a website for the church using React, HTML, and CSS</li>

        <li> Created a database using SQL to store user information</li>

        <li> Implemented a login system using React and Firebase</li>
      </ul>
    ),
  },
  {
    date: "Jan 2023 - Aug 2023",
    location: "Johns Hopkins University",
    title: "Individualized Tutor",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          Acted as a resource for students taking computer science classes at
          Johns Hopkins University
        </li>

        <li>
          Prepared individualized tutoring plans for each student depending on
          need and class difficulty; for Javascript, Python, Java, C, C++
        </li>
      </ul>
    ),
  },
];

/**
 * Leadership section
 */

export const leadership: TimelineItem[] = [
  {
    date: "Aug 2020 - Present",
    location: "HopHacks",
    title: "Participant",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Lead a team of 4 students to develop a website that allows users to
          track covid-19 cases nearby, and fed it constant data from the JHU API
          and the CDC
        </li>
      </ul>
    ),
  },
  {
    date: "May 2023 - Present",
    location: "Student Government Association (SGA)",
    title: "Senior Class Senator",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Organized 2+ events on campus as part of Senior Class Programming
          Board
        </li>
        <li>
          {" "}
          Designed Initiatives with other Senators to improve Campus Student
          Life, such as improving Library Access
        </li>
        <li>
          {" "}
          Advocated for and implemented a campus prayer room by liaising with
          Sheridan Libraries representatives once a month, ensuring a dedicated
          space for spiritual needs
        </li>
        <li>
          {" "}
          Managed and improved student services, including library resources,
          health and wellness programs, housing accommodations, career
          counseling, and financial aid suppor
        </li>
        <li>
          {" "}
          Structured curriculum development within the Whiting School of
          Engineering, addressing student-specific concerns and enhancing
          academic programs through monthly meetings with faculty and staff
        </li>
      </ul>
    ),
  },
  {
    date: "Aug 2023 - Present",
    location: "Orthodox Christian College Ministry (OCCM)",
    title: "President",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Developed a club for 10+ students and facilitated a space for people
          to open communication
        </li>
        <li> Organized weekly meetings and events for students to attend</li>
        <li>
          {" "}
          Coordinated with LEED office to assign a space for weekly General Body
          Meetings
        </li>
        <li>
          {" "}
          Drove initiative to assist members of executive staff in reaching out
          to other OCCM representatives to allow cross school communication
        </li>
      </ul>
    ),
  },
  {
    date: "Aug 2020 - May 2022",
    location: "Hopkins Minecraft Club (HopMC)",
    title: "President",
    content: (
      <ul
        style={{
          listStyleType: "circle",
        }}
      >
        <li>
          {" "}
          Coordinated project with the Digital Media Center at Hopkins to
          provide students with a place to play video games, such as Minecraft
          for 60+ students{" "}
        </li>
        <li>
          {" "}
          Built tailored advertising campaigns and organized events designed to
          cater to distinct groups and interests, such as designers, musicians,
          and competitive students, resulting in a noticeable increase in
          attendance and engagement within these target communities{" "}
        </li>
        <li>
          {" "}
          Delivered timely updates and swift responses to critical data
          breaches, including addressing the Log4j vulnerability, ensuring
          minimal downtime and maximum security for organization's systems and
          data{" "}
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
      name: "Dylan Thomas",
      text: '"Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light."',
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
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
