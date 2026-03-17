import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "DevOps Engineer",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Angular",
      icon: "/assets/tech/framer.svg",
      link: "https://angular.dev/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.svg",
      link: "https://www.djangoproject.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },{
      name: "Kubernetes",
      icon: "/assets/tech/Kubernetes.svg",
      link: "https://kubernetes.io/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "SDE",
    company_name: "JIO Platforms Limites",
    icon: "/assets/company/JIO.svg",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Currently serving as the Full Stack Developer at JPL, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
      "Led induction programs, ensured new member alignment, and provided technical mentorship.",
      "Developed ATAP Studio website, enhancing the organization's Inhouse Testing Tool with intutive User Interface.",
      "Enhanced an existing automation framework, optimizing efficiency and reducing execution time for automated processes.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "CodeClause",
    icon: "/assets/company/CodeClause.svg",
    iconBg: "#E6DEDD",
    date: "March 2022",
    points: [
      "Designed and implemented growth strategies to expand organizational reach and impact.",
      "Developed tools and platforms to enhance students educational experiences and skills.",
      "Engineered and optimized platform scalability, driving user growth from inception to over 1000+ active users through performance enhancements and system efficiency improvements.",
      "Organizing and conducting technical workshops for students, delivering hands-on training and knowledge-sharing sessions on emerging technologies and industry best practices.",
    ],
  },
  
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cattle Health Monitoring System",
    description:
          "Developed an IoT-based system with a Smart Band to monitor temperature and heart rate in real time. Enabled real-time data transmission and automated alerts for anomalies. Enhanced monitoring capabilities by integrating additional sensors for im- proved livestock management.",
    tags: [
      {
        name: "IOT",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Android",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Cattle1.jpg",
    
    source_code_link: "/#projects",
    deployed_link: "/#projects",
  },
  {
    name: "Automatic Result Saver",
    description:
      "Automated result fetching and storage for MSBTE students using web scraping techniques. Stored results systematically in Excel files for efficient data management.Improved usability with streamlined processes for result fetching and retrieval.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "green-text-gradient",
      },
      {
        name: "Web-Scrapper",
        color: "pink-text-gradient",
      },
      
    ],
    image: "/assets/projects/ResultSaver.webp",
    source_code_link: "https://github.com/Nileshkkamble/Result-Saver",
    deployed_link: "/#projects",
  },
  {
    name: "Virtual Mouse Using OpenCV",
    description:
      "Utilized Python’s OpenCV library to detect hand movements via webcam in real time.Designed a system to track a specific color on the hand and map it to mouse pointer coordinates.Enhanced user experience with improved accuracy and responsiveness of pointer movements.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
      {
        name: "intelligence",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/virtualmouse.webp",
    source_code_link:
      "https://github.com/Nileshkkamble/Mouse-With-OpenCV",
      deployed_link: "/#projects",
  },
  {
    name: "Weather Forecasting Using Arduino",
    description:
      "Built an IoT-based weather forecasting system using Arduino and environmental sensors.Designed a web interface to display real-time weather data, including temperature and humidity.Broadcasted data efficiently to a webpage for remote monitoring and analysis.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "IOT",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/arduinoweather.webp",
    source_code_link: "https://github.com/Nileshkkamble/Arduino-Humidity-and-Tempreture",
    deployed_link: "/#projects",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Nileshkkamble",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/nilesh-kamble-692173206/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "http://nileshkkamble.blogspot.com/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/n_k_kamble",
  },
];

const heroTexts = [
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "DevOps Engineer",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
