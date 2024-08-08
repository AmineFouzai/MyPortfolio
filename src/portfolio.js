/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};
const contactInfo = {
  title: "",
  subtitle: "",
  number: "",
  email_address: ""
}
//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Fouzai M Amine",
  logo_name: "M.A.F",
  nickname: "Amine / Constantine",
  full_name: "Mohamed Amine Fouzai",
  subTitle: "Super Stack Developer / Solution Developer 🔥. Your Go To.",
  resumeLink:
    "https://drive.google.com/file/d/1vdLDTWgP0CLEuWD9P4HjiyfUvGSx-kpB/view?usp=sharing",
  coverLetterLink:
    "https://drive.google.com/file/d/1NSJyalv88disa-ou0xMG-Ltq25mHQygo/view?usp=sharing",  
  mail: "mailto:mohamed.amine.fouzai@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/AmineFouzai",
  linkedin: "https://www.linkedin.com/in/amine-fouzai/",
  gmail: "mohamed.amine.fouzai@gmail.com",
  facebook: "https://www.facebook.com/mohamedamine.fouzai.9003/",
  twitter: "https://x.com/ine_constan",
};

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "BackEnd",
      skills: [
        "⚡ Create Scalable BackEnd Solutions.(REST/GraphQL/RPC/IO).",
        "⚡ Create Various Services With Different Networking Styles ",
        "⚡ Developed Various Services With Different Frameworks.",
        "⚡ Integrated Third-Party Services With Good Comprehension.",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },

      ],
    },
    {
      title: "Frontend Development",
      fileName: "FrontEnd",
      skills: [
        "⚡ Develop Highly Interactive User Interfaces ",
        "⚡ Building Responsive Website FrontEnd Using React/NEXT",
        "⚡ Integrated Various Types Of APIs Seamlessly.",
        "⚡ Integrated Designs With Pixel-Perfect Precision."

      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

      ],
    },
    {
      title: "Mobile Development",
      fileName: "MobileDev",
      skills: [
        "⚡ Experience Working With Flutter And JVM",
        "⚡ Experience Using Android Studio and XCode",
        "⚡ Create Mobile Apps With Maximum Maintainability",
        "⚡ Experience in Deployment Into Play-Store And Apple-Store",

      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

      ],
    },
    {
      title: "Data Administration",
      fileName: "DataAdmin",
      skills: [
        "⚡ Experience working With Data Houses",
        "⚡ Experience Modeling Data and Data Flow",
        "⚡ Experience Working with Diffrent DataBases",
        "⚡ Experience in Transforming And Normalizing Data",

      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

      ],
    },
    {
      title: "Development Operations",
      fileName: "Devops",
      skills: [
        "⚡ Experience Working On Multiple Cloud Platforms",
        "⚡ Experience Hosting And Managing Websites",
        "⚡ Experience with CI/CD",
        "⚡ Experience with Monitoring and Metrics",

      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Higher Institute of Technological Studies of Nabeul",
      subtitle: "Diploma In Information System Development (DSI)",
      logo_path: "iset.jpg",
      alt_name: "LACH",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I studied subjects like Advanced Web Development, Databases, and General System Development.",
        "⚡ I implemented several projects based on what I've learned under my Computer Engineering course. ",
      ],
      website_link:"https://isetn.rnu.tn/",
    },
    {
      title: "High School Atef Chayeb Hammamet Nabuel",
      subtitle: "Bachelor in Information Technology / Computer Science",
      logo_path: "lach.jpg",
      alt_name: "SSGC",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various  courses for Backend , Fronted , Mobile App Development, Machine Lerning .",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    `As a Super Stack Developer, I have worked with real projects for over 4+ years.
    Successfully satisfied customers through my careers of professional development by consistently delivering high-quality solutions and exceptional service with awesome individuals.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Work Experience",
      experiences: [
        {
          title: "Solutions Developer",
          company: "Cielo Costa",
          company_url: "https://cielocosta.com/",
          logo_path: "https://media.licdn.com/dms/image/D4E0BAQFZqBTlpIUIrA/company-logo_200_200/0/1708704399827/cielo_costa_logo?e=1730937600&v=beta&t=zoD0y8Y0Q8b0de3YL1_wjxPABZgrsmMJPv5xzffFB1w",
          duration: "Jul 2023 - Present",
          location: "Uk,Ketton Suite, The King Centre, Oakham, Rutland LE15 7WD",
          description: `Cielo Costa is a dynamic software firm with extensive experience in utilizing various Microsoft services and engaging in custom development. Cielo has a robust background in working with Microsoft Azure, leveraging its cloud services for scalable and secure application deployment. Additionally, they have proficiently used Microsoft Power Platform for creating business solutions, integrating Power Apps, Power Automate, and Power BI to streamline processes and enhance data analytics.

In custom development, Cielo excels in building tailored solutions to meet specific client needs. This includes developing web applications, APIs, and enterprise systems using modern frameworks and programming languages. Their expertise ensures efficient, high-quality software solutions that align with business objectives and user requirements.`,
          color: "#0071C5",
        },
        {
          title: "Backend Developer / Data architects",
          company: "ZenFeat",
          company_url: "https://www.zenfeat.com/",
          logo_path: "https://media.licdn.com/dms/image/D4E0BAQH1QKKj-3PHnw/company-logo_200_200/0/1694897155932?e=1730937600&v=beta&t=DLcQTLXeymz12FoBaIzAPFWZRHIn6zc-XZX3rbm2A98",
          duration: "Mar 2023 - Jun 2023",
          location: "Canada,1 Heathfield St, Whitby, ON L1R 0K9",
          description: `I played a pivotal role in creating the data modeling and backend code for the fast food application ZenFeat. By collaborating closely with stakeholders, I translated business requirements into a robust data model, designing comprehensive database schemas to manage complex data related to menu items, orders, customers, and delivery logistics. I implemented data normalization techniques to reduce redundancy and ensure data integrity while establishing and maintaining relationships between various data entities such as customers, orders, and menu items to support diverse application functionalities.

In the backend development phase, I created scalable and performant RESTful APIs to handle customer orders, manage inventory, and process payments. Using a diverse set of programming languages and frameworks, I built robust backend services tailored to each task. I seamlessly integrated third-party services like payment gateways and delivery tracking systems to enhance functionality and improve the user experience. Additionally, I developed services utilizing different networking styles, including REST, GraphQL, and gRPC, ensuring flexible and efficient data exchange. My commitment to pixel-perfect integration ensured that the backend services seamlessly aligned with frontend designs, providing a consistent and visually appealing user interface. Through these efforts, I contributed significantly to the development of a reliable, efficient, and user-friendly fast food application that meets the needs of both the business and its customers.`,
          color: "#0071C5",
        },
        {
          title: "Backend Developer/ Mobile Developer",
          company: "TimeLapse Agency",
          company_url: "https://timelapse-agency.com/",
          logo_path: "https://media.licdn.com/dms/image/D4E03AQEkPEsDqPCm4g/profile-displayphoto-shrink_400_400/0/1641823111179?e=1728518400&v=beta&t=99KXy4hAw2UWALRi9tmXtMPh_7BHelt1Xs9atxL5Qlc",
          duration: "Dec 2021 - Mar 2023",
          location: "Tunisia,Sousse, Sousse",
          description: `I get a lot of joy as a backend developer from overseeing the creation of back-end apps. I appreciate the chance to conduct research on apps to keep current on recent developments in the field of app development. With the help of this research-based methodology, I am able to enhance my abilities and broaden my knowledge. I'm inspired to try out proof-of-concept initiatives and carry out internal research to assess the viability and efficacy of new technologies or methods. I can deliver top-notch, effective, and cutting-edge apps that satisfy the demands of our users by fusing my technical proficiency with a research-driven attitude.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Administrator",
          company: "African Business Network",
          company_url: "https://africanbusinessnetwork.info/",
          logo_path: "https://media.licdn.com/dms/image/C560BAQG2XcIOmlCbgA/company-logo_200_200/0/1646862846181?e=1730937600&v=beta&t=iin8T5TaaFSqJIXeDHj52cFNf8tFtjV-_w4yjaQmFqk",
          duration: "Sep 2021 - Dec 2021",
          location: "Tunisia,Sousse, Sousse",
          description: `The most important details of structuring databases and related programs are designing and organizing the database schema, implementing suitable indexing strategies, optimizing query performance, and ensuring data integrity and security. Designing the database schema involves analyzing the application requirements and creating a schema that accurately represents the data. Normalization techniques such as First Normal Form (1NF) and Second Normal Form (2NF) help eliminate data duplication and maintain data consistency. Optimizing queries involves utilizing techniques such as query rewriting, join optimization, and proper utilization of indexes. Ensuring data integrity and security is of utmost importance.

Regular backups are established to protect against data loss or system failures. Database maintenance tasks include monitoring system performance, optimizing storage utilization, managing database growth, and applying necessary software patches.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer",
          company: "Astrolab Agency",
          company_url: "https://astrolab-agency.com/",
          logo_path: "https://media.licdn.com/dms/image/v2/C4E0BAQGOidJEkk7PBQ/company-logo_200_200/company-logo_200_200/0/1631361322831/astrolabtn_logo?e=1730937600&v=beta&t=jQRZmKB7dts2S1tFM3Ik4SaYkDHFoKWFwcJ3lmvblRE",
          duration: "Jan 2021 - Aug 2021",
          location: "Tunisia,3 Rue de Qairouan،, Sousse 4000",
          description: `Maintaining a financial app and collaborating with my team to develop largely back-end apps for specific situations is an exciting and challenging part of my role.

I actively contribute to the server-side components that power our financial app, designing robust databases, developing APIs, and integrating third-party services to enhance functionality and user experience. I also work on understanding the unique requirements, designing the back-end infrastructure, and implementing the necessary features to meet these specific use cases effectively. Security and privacy are paramount considerations in our financial app, and we prioritize implementing stringent security measures. 

Collaboration within the team is vital for our development process, and I actively engage in discussions with designers, front-end developers, and other stakeholders to align on requirements, exchange knowledge, and seamlessly integrate our back-end solutions with the front-end components. Overall, maintaining a financial app and collaborating on back-end development allows me to contribute to the seamless functioning and continuous improvement of our app, providing users with a secure and efficient financial management experience.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#0071C5",
        },
        {
          title: "Internship, Back End Developer",
          company: "Cube IT",
          company_url: "http://cubeit-corp.com/",
          logo_path: "https://media.licdn.com/dms/image/C4E0BAQFsRau3WRWJvQ/company-logo_200_200/0/1658247716101?e=1730937600&v=beta&t=ax8x6NQctTZ1pr-NooUTN6pm6yXVrwwbjLL1i2TjKO0",
          duration: "Jan 2020 - Mar 2020",
          location: "FRANCE, 13 rue de raidillon 78230. le pecq PARIS,",
          description: `I played a significant role in the development of the application's core backend, which was specifically designed to efficiently manage distributed events. This involved creating a robust and scalable architecture that could handle the complexities of handling events across various locations or systems.

To accomplish this, I utilized a combination of programming languages, frameworks, and technologies that were best suited for the task at hand. I carefully designed the backend system to ensure seamless communication and coordination between different components, enabling smooth event management and synchronization.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Internship, BackBone Network Telecommunication / Data Administrator",
          company: "Tunisie Telecom",
          company_url: "https://www.tunisietelecom.tn/",
          logo_path: "https://media.licdn.com/dms/image/C4D0BAQHJvltomSlPPA/company-logo_200_200/0/1630573461373/tunisie_t_l_com_logo?e=1730937600&v=beta&t=180WoSdm2rsNX326tsYsd-XrxElhC4YeJriPgHmUNys",
          duration: "Jan 2019 - Mar 2019",
          location: "CH46+63G, Avenue Yasser Arafet, Hammamet 8056",
          description: `As an overseer of complex telecommunications systems and related broadcasting equipment for an entire city district, my role is crucial in ensuring seamless communication and efficient broadcasting services for the residents and businesses within my jurisdiction. I am responsible for monitoring the telecommunications systems and broadcasting equipment within the district, ensuring their optimal functioning and promptly addressing any issues or disruptions that may arise.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Side Huslte / Events",
      experiences: [
        {
          title: "WE Hack 1.0 - Web & Mobile IT Innovation",
          company: "N/A",
          company_url: "#",
          logo_path: "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/308992987_470725938435824_2246901258690332877_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=exVtqzWGWVkQ7kNvgGTHjV-&_nc_ht=scontent.ftun14-1.fna&oh=00_AYDeQ2KQBr9BCmfSX1YN01aEYiyJzkoxhmNQfoVGHlsNAg&oe=66B9DD8F",
          duration: "Dec 2019 ",
          location: "Tunisia, Nabuel",
          description:
            "WE Hack 1.0 is a premier hackathon designed to foster creativity, collaboration, and innovation in the realms of web and mobile development. This inaugural event brings together talented individuals from diverse backgrounds, including software developers, designers, entrepreneurs, and tech enthusiasts, to tackle real-world challenges and create cutting-edge solutions.",
          color: "#D83B01",
        },
        {
          title: "JPO (Doors Open Days) / ISET Rades",
          company: "N/A",
          company_url: "#",
          logo_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLovhPrgVqlqiV7NMUxzwpckY7ScWiJHEHlg&s",
          duration: "Jan 2021 ",
          location: "Tunisia, Rades",
          description:
            "JPO (Journées Portes Ouvertes), or Doors Open Days, at ISET Rades is a vibrant event designed to welcome prospective students, parents, and the community to explore the Institute of Higher Technological Studies of Rades (ISET Rades). This annual event offers a unique opportunity for visitors to gain insights into the educational programs, facilities, and student life at one of the leading technological institutes in the region",
          color: "#FBBD18",
        },
        {
          title: "JPO (Doors Open Days) / ISET Nabuel",
          company: "N/A",
          company_url: "https://skillenza.com/",
          logo_path: "https://media.licdn.com/dms/image/C4D0BAQFWbzRCdxMdsw/company-logo_200_200/0/1630519939024?e=2147483647&v=beta&t=XnZk7LckJ61rAE4-K2dvFK2d3xr3BkqKc5dAuGFOasY",
          duration: "Feb 2020 ",
          location: "Tunisia, Nabuel",
          description:
            "JPO (Journées Portes Ouvertes), or Doors Open Days, at ISET Nabuel is a vibrant event designed to welcome prospective students, parents, and the community to explore the Institute of Higher Technological Studies of Rades (ISET Rades). This annual event offers a unique opportunity for visitors to gain insights into the educational programs, facilities, and student life at one of the leading technological institutes in the region",
          color: "#FBBD18",
        },
        {
          title: "Coding Land 4TH Edition",
          company: "N/A",
          company_url: "#",
          logo_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQvWlCSzjP9LkY3M1d439hzZbHqbSNvI5Sw&s",
          duration: "Dec 2019 ",
          location: "Tunisia, Tunis",
          description:
            "Coding Land 4TH Edition is an exhilarating event designed to celebrate and nurture the talents of coding enthusiasts from around the world. As the fourth installment of this highly anticipated series, this edition promises even more excitement, innovation, and learning opportunities for participants of all levels.",
          color: "#D83B01",
        },
        {
          title: "Hackathon Root Space",
          company: "N/A",
          company_url: "#",
          logo_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWYc2Ll4hR7x8Pm1-VABibR3tvPvRqGdCXQ&s",
          duration: "Mar 2019 ",
          location: "Tunisia, Sousse",
          description:
            "Hackathon Root Space is a dynamic and immersive event dedicated to driving innovation and collaboration among tech enthusiasts, developers, designers, and entrepreneurs. This hackathon, set in an inspiring and creative environment, aims to solve pressing challenges and push the boundaries of technology through teamwork and ingenuity.",
          color: "#D83B01",
        },
        {
          title: "IEEE Summit 2020 : Doors Open Days",
          company: "N/A",
          company_url: "#",
          logo_path: "https://pbs.twimg.com/profile_images/474591466749034496/2-H1zqWf_400x400.jpeg",
          duration: "Feb 2020 ",
          location: "Tunisia, Nabuel",
          description:
            "IEEE Summit 2020: Doors Open Days is a premier event that welcomes technology enthusiasts, professionals, students, and the general public to explore the latest advancements in engineering and technology. Hosted by the Institute of Electrical and Electronics Engineers (IEEE), this summit provides an open platform for learning, networking, and discovering cutting-edge innovations.",
          color: "#FBBD18",
        },
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Curriculum Vitae",
    profile_image_path: "me (1).png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Cover Letter",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },

};

const projects = {
  data: [
    {
      id: "0",
      name: "Mockup-AI-Interview",
      url: "https://github.com/AmineFouzai/Mockup-AI-Interview",
      description:
        "Mockup-AI-Interview is a cutting-edge project designed to simulate real-life interview scenarios using AI. This tool aims to help job seekers prepare for interviews by providing realistic mock interviews, comprehensive feedback, and detailed analysis of their performance.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "TornGraphQl",
      url: "https://github.com/AmineFouzai/TornGraphQl",
      description:
        "A Simple Python GraphQL API Built with Tornado and SQLalchemy ", languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "2",
      name: "Ballon_Dorz",
      url: "https://github.com/AmineFouzai/Ballon_Dorz",
      description:
        "Soccer tournaments mangment app made with django ", languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Wix",
            iconifyClass: "bxl:wix",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "Hospital_Project",
      url: "https://github.com/AmineFouzai/Hospital_Project",
      description:
        "hospital management system for doctors with their patients", languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/rajmahadev8/Fin-Split",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/finsplit",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Emosic",
      url: "https://github.com/kevalvavaliya/Emosic",
      description:
        "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ", languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Emosic",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/emosic",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "5",
      name: "GameShop_Backend",
      url: "https://github.com/AmineFouzai/GameShop_Backend",
      description:
        "GameShop is a platform where Gamers and Game Developers share their games this is its Backend API ", languages: [
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Storyblok",
            iconifyClass: "logos-storyblok-icon",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Fileblok",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/fileblok",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "6",
      name: "PygRPC",
      url: "https://github.com/AmineFouzai/PygRPC",
      description:
        "server implementation using gRPC tech ", languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bauddhikgeeks.co/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      name: "astrobuild-api",
      url: "https://github.com/AmineFouzai/astrobuild-api/tree/main",
      description:
        "Prototype of a collaboration tool between stakeholders for building software projects (Backend)  ", languages: [
          {
            name: "Flask",
            iconifyClass: "logos-flask",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb-icon",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/abhigoyani/votechain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "WADOG2",
      url: "https://github.com/AmineFouzai/WADOG2",
      description:
        "Powerfull Trojan Tool for generating exploitable and executable undetectable payloads on windows.", languages: [
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "MedusaJS",
            iconifyClass: "logos-medusa-icon",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/e-commerce-frontend",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "CompressImagesApi",
      url: "https://github.com/AmineFouzai/CompressImagesApi",
      description:
        "This platform enables users to manipulate images size in real time ", languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/node-blockchain",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "astroback",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        " ", languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Repl.it",
            iconifyClass: "logos-replit-icon",
          },
        ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/personal-portfolio",
          iconifyClass: "ri:github-fill",
        },
      ],
    },

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  contactInfo
};

