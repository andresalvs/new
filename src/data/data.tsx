// External imports (alphabetically sorted)
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Relative component imports (alphabetically sorted)
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
// Relative image imports (alphabetically sorted)
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
// Data and type imports (alphabetically sorted)a
import {
  About,
  ContactSection,
  ContactType,
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
  title: 'Andre Salvador | Portfolio',
  description: "Example site built with Tim Baker's react resume template",
}

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'background',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const

export type SectionId = (typeof SectionId)[keyof typeof SectionId]

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Andre Salvador`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Graphic Artist - Web Designer - Photography - Cinematography
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome to my creative space! I'm a <strong className="text-stone-100">graphic artist and web designer</strong>,
        passionate about photography and cinematography. Explore my portfolio to see how I blend artistry and technology
        to bring ideas to life.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
}

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With a keen eye for detail and a passion for creativity, Andre delves into each project, delivering ultimate results that elevate brand narratives and visual experiences.`,
  aboutItems: [
    {label: 'Location', text: 'Butuan City, BC', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Filipino', Icon: FlagIcon},
    {label: 'Interests', text: ' Graphic Design, Cinematography', Icon: SparklesIcon},
    {label: 'Study', text: 'Caraga State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Dynamic Freelance', Icon: BuildingOffice2Icon},
  ],
}

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {name: 'English', level: 9},
      {name: 'Tagalog', level: 8},
      {name: 'Cebuano', level: 10},
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {name: 'React', level: 8},
      {name: 'Vue Js', level: 7},
      {name: 'Bootstrap', level: 9},
    ],
  },
  {
    name: 'Graphic Design',
    skills: [
      {name: 'Logo/Branding', level: 9},
      {name: 'Motion Graphics', level: 8},
      {name: 'Web and User Interface Design', level: 7},
    ],
  },
  {
    name: 'Media Production',
    skills: [
      {name: 'Photography', level: 9},
      {name: 'Videography', level: 10},
      {name: 'Cinematography', level: 9},
    ],
  },
]

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Photography',
    description: 'Click here to view these photos.',
    url: 'https://www.facebook.com/retrofilmvibes/posts/pfbid037fc1WRy3jvm2ayET8LgmKXCunbBfvF6QWKtScDBhkJw5MQa6aQfYvYRUeuvddB3ql',
    image: porfolioImage1,
  },
  {
    title: 'Cinematography',
    description: 'Click here to view this video.',
    url: 'https://www.facebook.com/retrofilmvibes/videos/1253807068684994',
    image: porfolioImage2,
  },
  {
    title: 'Artist',
    description: 'Click here to view our Instagram.',
    url: 'https://www.instagram.com/andreeeofficial/',
    image: porfolioImage3,
  },
  {
    title: 'Videography',
    description: 'Click here to view our Facebook Page.',
    url: 'https://www.facebook.com/retrofilmvibes',
    image: porfolioImage4,
  },
  {
    title: 'Dynamic',
    description: 'Click here to view our Instagram.',
    url: 'https://www.instagram.com/andreeeofficial/',
    image: porfolioImage6,
  },
  {
    title: 'Artist',
    description: 'Click here to view our Instagram.',
    url: 'https://www.instagram.com/andreeeofficial/',
    image: porfolioImage8,
  },
  {
    title: 'Artist',
    description: 'Click here to view our Instagram.',
    url: 'https://www.instagram.com/andreeeofficial/',
    image: porfolioImage9,
  },
  {
    title: 'Creatives',
    description: 'Click here to view these photos.',
    url: 'https://www.facebook.com/retrofilmvibes/posts/pfbid037fc1WRy3jvm2ayET8LgmKXCunbBfvF6QWKtScDBhkJw5MQa6aQfYvYRUeuvddB3ql',
    image: porfolioImage11,
  },
]

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022-2024 (Present)',
    location: 'Caraga State University',
    title: 'College of Computing in Information Sciences',
    content: (
      <p>
        As a student in the College of Computing, I gained a strong foundation in information technology, mastering
        skills in programming, data management, and system design. This education empowered me to tackle complex
        computing challenges and understand the broader impact of technology on society.
      </p>
    ),
  },
  {
    date: 'March 2022',
    location: 'Caraga State University',
    title: 'SHS Graduate',
    content: (
      <p>
        As a Senior High School graduate, I developed a solid understanding of the fundamentals of information
        technology, including basic programming, data management, and system design. This foundation prepared me to
        explore the dynamic world of computing and its impact on everyday life.
      </p>
    ),
  },
]

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Freelancer',
    title: 'Photographer/Videographer',
    content: (
      <p>
        As a photographer, I've worked on various projects including events, portraits, and commercial shoots. Notable
        achievements include exhibitions showcasing my work and collaborating with local businesses for promotional
        photography.
      </p>
    ),
  },
  {
    date: 'November 2020 - Present',
    location: 'Freelancer',
    title: 'Programmer/Graphic Design',
    content: (
      <p>
        I've crafted branding materials and marketing assets, with achievements like winning design contests and having
        my work featured in local publications. I often use tools like Adobe Creative Suite and various coding languages
        to blend functionality with aesthetics.
      </p>
    ),
  },
]

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Glaiza Domine',
      text: "Working with Andre Salvador has completely transformed our project. The insights and creative solutions provided were beyond our expectations. It felt like having an expert team member who was always available, responsive, and eager to help. Our outcomes improved significantly, and I couldn't be happier with the collaboration!",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Kurt Reserva',
      text: "Collaborating with Andre Salvador was a game-changer for our team. The ability to brainstorm ideas and get instant feedback made our creative process so much smoother. It's like having a brainstorming partner that never runs out of ideas. I appreciated how it kept us on track and helped us elevate our work to the next level!",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Joshua Villamor',
      text: "As a manager, I value efficiency and innovation, and Andre Salvador delivered on both fronts. The way it anticipates needs and provides solutions has streamlined our workflow tremendously. It's clear that this tool not only supports our goals but actively enhances our team's productivity. I can't imagine our team without it!",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
}

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    "Feel free to reach out if you have any questions, collaborations, or project inquiries! We're always eager to connect and explore new opportunities. ",
  items: [
    {
      type: ContactType.Email,
      text: 'andresalvadorgregorio@gmail.com',
      href: 'mailto:andresalvadorgregorio@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Butuan City, Philippines',
      href: 'https://www.google.com/maps/place/Butuan+City,+8600+Philippines/@8.9472479,125.539661,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@andreeeofficial',
      href: 'https://www.instagram.com/andreeeofficial/',
    },
    {
      type: ContactType.Github,
      text: 'andresalvs',
      href: 'https://github.com/andresalvs',
    },
  ],
}

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/andresalvs'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/andreeeofficial'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/andreeeofficial/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/andreeeofficial'},
]