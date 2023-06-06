import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    TJCP,
    GOL,
    threejs,
    Kotlin,
    FullSail,
    ComingSoon

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: backend,
    },
    
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Kotlin",
      icon: Kotlin,
    },
  ];
  
  const experiences = [
    {
      title: "Full Sail University",
      company_name: "Fullsail",
      icon: FullSail,
      iconBg: "#383E56",
      date: "August 2020 - March 2023",
      points: [
        "Studying Computer Science at Full Sail University was an exhilarating journey filled with challenges and opportunities. The campus boasted cutting-edge facilities and a dynamic atmosphere that fostered a passion for technology. The curriculum provided a comprehensive understanding of computer science fundamentals, with engaging professors who guided us through complex topics. The project-based approach was a standout feature, allowing us to apply our knowledge to real-world scenarios and collaborate with peers, honing our problem-solving and teamwork skills. The university's industry connections facilitated guest lectures, career fairs, and internships, offering valuable insights and practical experience. Beyond the classroom, a vibrant student community, tech clubs, and events further fueled our passion for computer science. Full Sail University's resources, such as the extensive library and accessible computer labs, supported our academic endeavors, while the dedicated career services team assisted with job placement. Overall, my Full Sail University experience in Computer Science provided a strong foundation, creativity, and readiness for a successful career in the ever-evolving tech industry.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Coming Soon.",
      name: "-Luis Bazaldua",
      designation: "Web Dev",
      company: "Abizzal Tech",
      image: ComingSoon,
    },
  ];
  
  const projects = [
    {
      name: "TJCP",
      description:
        "TJCP is an innovative companion app designed to enhance the gameplay experience of Escape from Tarkov. Its primary goal is to improve communication and coordination among teammates, while also offering valuable resources for learning maps and significant locations within the game. Drawing inspiration from the Joint Variable Communication Protocol (JVCP) system used by real-life military units, TJCP provides a user-friendly interface for multiple users.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "FireBase",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "violet-text-gradient",
        },
      ],
      image: TJCP,
      source_code_link: "https://github.com/Luis29178/TJCP/tree/dev/my-react-app",
    },
    {
      name: "OOP GameOfLife",
      description:
        "The OOP Game of Life project was a delightful endeavor that bolstered my object-oriented programming skills. It not only provided an enjoyable experience but also incorporated some exciting additional features such as a drawing board and a convenient copy-paste functionality.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Windows Forms",
          color: "green-text-gradient",
        },
      ],
      image: GOL,
      source_code_link: "https://github.com/Luis29178/Game-of-Life",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  