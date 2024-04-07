import {
  carolinacodeschool,
  contact,
  css,
  django,
  fsc,
  git,
  github,
  html,
  javascript,
  linkedin,
  postgresql,
  python,
  react,
  sql,
  tailwindcss,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database Query Language",
  },

  {
    imageUrl: django,
    name: "Django",
    type: "Backend Framework",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const education = [
  {
    iconUrl: carolinacodeschool,
    title: "Full Stack Developer Certification",
    school_name: "Carolina Code School",
    date: "January 2024 - April 2024",
    points: [
      "Completed an intensive, project-based coding bootcamp, mastering both front-end and back-end web development technologies in a demanding, immersive environment tailored for industry readiness.",
      "Engaged in 444 hours of rigorous training across full-stack technologies including Python, SQL, HTML, CSS, and JavaScript, with a deep dive into React and Django frameworks, fostering proficiency in coding, critical thinking, and complex problem-solving.",
      "Built a solid foundation in web development through a structured three-phase curriculum: starting with web fundamentals, advancing to application engineering with modern internet technology and tools, and culminating in a full stack web app sprint.",
      "In the first phase, developed a strong command of the building blocks of web development, creating responsive websites from scratch using HTML, CSS, and vanilla JavaScript, ensuring a grasp of key front-end concepts and design.",
      "During the application engineering phase, leveraged the power of REACT JS for dynamic client-side scripting and Django for robust server-side application logic, learning to integrate front-end and back-end technologies seamlessly.",
      "Executed a capstone project in a three-week sprint, synthesizing all learned skills into a full stack web application, showcasing it to peers and potential employers at Demo Day, a testament to my readiness to contribute to a professional tech team.",
      "Participated in collaborative projects that mirrored real-world software development practices, employing Agile methodologies and Git version control to work efficiently in team settings and adapt to the evolving demands of the tech industry.",
      "Gained valuable insights into UI/UX design principles, putting user experience at the forefront to develop applications that are not only functional but also intuitive and engaging, aligning with modern design trends and user expectations.",
      "Opted into an extensive Career Support program post-graduation, receiving an additional four weeks of curriculum and ongoing assistance in the job-seeking process, enhancing my professional development and marketability.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/rienfeels",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "http://www.linkedin.com/in/ryan-fields-1526b92ab",
  },
];

export const projects = [
  {
    iconUrl: fsc, // Replace with actual icon file
    theme: "btn-back-blue", // Theme color for the button background
    name: "Fields Specialty Contractors App",
    description:
      "Developed a comprehensive road striping app with features like user registration, form submission, and dashboard management. Enabled viewing, editing, expanding, and downloading of reports.",
    link: "https://github.com/rienfeels/fsc_project", // Replace with actual GitHub link
    tech: "Django, React, HTML, CSS, JavaScript, Python",
    achievements: [
      "Secured first contract before finishing bootcamp.",
      "Merged technology with business needs to fully digitize the daily report process, eliminating paper usage.",
      "Implemented in real-world operations.",
    ],
  },
  {
    theme: "btn-back-green", // Theme color for the button background
    name: "URL Shortener",
    description:
      "Built a website for shortening long URLs, with a focus on enhancing usability and security through user authentication and streamlined URL processing.",
    link: "https://github.com/rienfeels/url-shorter", // Replace with actual GitHub link
    tech: "JavaScript, HTML, CSS",
    achievements: [
      "Spearheaded the project independently, introducing user authentication and a streamlined URL conversion process.",
    ],
  },
  {
    theme: "btn-back-red", // Theme color for the button background
    name: "The Sampler Music App",
    description:
      "A web application allowing users to search for artists by their Discogs artist ID and discover the origin of samples in songs.",
    link: "https://github.com/rienfeels/music_app_react", // Replace with actual GitHub link
    tech: "React, JavaScript, HTML, CSS",
    achievements: [
      "First-time utilization of external APIs, incorporating Discogs API and OpenAI API for data retrieval and processing.",
    ],
  },
];
