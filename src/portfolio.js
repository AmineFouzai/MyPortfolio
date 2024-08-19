/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
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
    "https://drive.google.com/file/d/1B7ELqCkm7Ip8h8DMdiEXlkBa_hQOoc1k/view?usp=sharing",
  coverLetterLink:
    "https://drive.google.com/file/d/1NLPwCyzUoGEdiGAv8Q4RKauJu8N--9xv/view?usp=sharing",
  mail: "mailto:mohamed.amine.fouzai@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/AmineFouzai",
  linkedin: "https://www.linkedin.com/in/amine-fouzai/",
  gmail: "mohamed.amine.fouzai@gmail.com",
  facebook: "https://www.facebook.com/mohamedamine.fouzai.9003/",
  twitter: "https://x.com/Fouzai_M_Amine",
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
      website_link: "https://isetn.rnu.tn/",
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
      title: "Foundation Certificate in Architecture Concepts and Domains",
      subtitle: "BCS Foundation",
      logo_path: "https://www.bcs.org/media/8094/black-logo-main.png?rnd=133499950958670000",
      certificate_link:
        "#",
      alt_name: "BCS Foundation",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Professional Software Engineering Master Certification",
      subtitle: "IEEE Computer Society",
      logo_path: "https://ieeecs-media.computer.org/wp-media/2018/04/02183615/IEEE-CS_LogoTM-orange.png",
      certificate_link:
        "#",
      alt_name: "IEEE Computer Society",
      color_code: "#E2405F",
    },
    {
      title: "PCI Security Standards (PCIDSS)",
      subtitle: "Ampcus Cyber",
      logo_path: "https://www.ampcuscyber.com/wp-content/themes/Ampcuscyber/assets/img/ampcus-cyber-logo-red-white.png",
      certificate_link:
        "#",
      alt_name: "Ampcus Cyber",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Certified Ethical Hacker (C|EH)",
      subtitle: "EC-Council",
      logo_path: "https://www.eccouncil.org/wp-content/uploads/2020/12/ec-council-white-logo.png",
      certificate_link:
        "#",
      alt_name: "EC-Council",
      color_code: "#E2405F",
    },
    {
      title: "Certified Data Professional (CDP)",
      subtitle: "CDMP.info",
      logo_path: "https://cdmp.info/wp-content/uploads/elementor/thumbs/Global-Data-Management-p1j09j4ss6ii50d29k2wcfs8xlt8qaqq2bj3zrfmqu.jpg",
      certificate_link:
        "#",
      alt_name: "CDMP.info",

      color_code: "#47A048",
    },
    {
      title: "GIAC Open Source Intelligence Certification (GOSI)",
      subtitle: "GIAC.org",
      logo_path: "https://images.contentstack.io/v3/assets/blt36c2e63521272fdc/blt35b018ffc64a5b93/63c71c17e97936109ef2bcaf/GOSI.png",
      certificate_link:
        "#",
      alt_name: "GIAC.org",
      color_code: "#E2405F",
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
          description: `
          Cielo Costa is a dynamic software firm with extensive experience in Microsoft services and custom development. They use Microsoft Azure for secure application deployment and Microsoft Power Platform for business solutions. Their expertise ensures efficient, high-quality software solutions that align with business objectives and user requirements.
          `,
          color: "#0071C5",
        },
        {
          title: "Backend Developer / Data architects",
          company: "ZenFeat",
          company_url: "https://www.zenfeat.com/",
          logo_path: "https://media.licdn.com/dms/image/D4E0BAQH1QKKj-3PHnw/company-logo_200_200/0/1694897155932?e=1730937600&v=beta&t=DLcQTLXeymz12FoBaIzAPFWZRHIn6zc-XZX3rbm2A98",
          duration: "Mar 2023 - Jun 2023",
          location: "Canada,1 Heathfield St, Whitby, ON L1R 0K9",
          description: `I made significant contributions to the development of ZenFeat, a fast food application, by creating a strong data model and backend code. They worked with stakeholders to translate business requirements into a strong model, created detailed database schemas, and implemented data normalization techniques. i also developed scalable RESTful APIs, integrated third-party services, and utilized networking styles such as REST, GraphQL, and gRPC to facilitate data exchange.`,
          color: "#0071C5",
        },
        {
          title: "Backend Developer/ Mobile Developer",
          company: "TimeLapse Agency",
          company_url: "https://timelapse-agency.com/",
          logo_path: "https://media.licdn.com/dms/image/D4E03AQEkPEsDqPCm4g/profile-displayphoto-shrink_400_400/0/1641823111179?e=1728518400&v=beta&t=99KXy4hAw2UWALRi9tmXtMPh_7BHelt1Xs9atxL5Qlc",
          duration: "Dec 2021 - Mar 2023",
          location: "Tunisia,Sousse, Sousse",
          description: `As a backend developer, I enjoy overseeing app creation and conducting research to stay updated on app development developments. This research-based methodology enhances my skills and knowledge, allowing me to deliver top-notch, effective, and cutting-edge apps that meet user demands.`,
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
          description: `Structuring databases involves designing and organizing the schema, implementing indexing strategies, optimizing query performance, and ensuring data integrity and security. Normalization techniques, query rewriting, join optimization, and index utilization are crucial. Regular backups protect against data loss, while maintenance tasks monitor performance, manage growth, and apply software patches.`,
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
          description: `I was a part of a team that maintains a financial app and collaborates on back-end development. They contribute to server-side components, designing robust databases, APIs, and integrating third-party services. They prioritize security and privacy, and work closely with designers and stakeholders to ensure seamless integration. This role allows for continuous improvement and a secure financial management experience.`,
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
          description: `I contributed to the development of a robust, scalable application's core backend for managing distributed events, using a combination of programming languages, frameworks, and technologies to ensure seamless communication and coordination.`,
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
          description: `I oversees a city district's complex telecommunications systems and broadcasting equipment, ensuring seamless communication and efficient services for residents and businesses, monitoring and addressing any issues.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteering / Events",
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
    "With over 4 years of professional development experience, I’ve had the opportunity to contribute to a variety of projects across different companies. This are a list of some apps that i worked at during my past experience",
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
      name: "C-Wallet",
      url: "https://cwallet.qa/",
      description:
        "Cwallet is a fintech blockchain powered mobile money wallet that evolves in 3 basic principles. Payroll. Payment and Remittance.\n",
      languages: [
        {
          name: "Vue",
          iconifyClass: "logos-vue",
        },
        {
          name: "TypeScript",
          iconifyClass: "skill-icons:typescript",
        },
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "AWS ",
          iconifyClass: "logos-aws",
        },
      ],
      links: [
      
      ],
    },
    {
      id: "1",
      name: "Gym-Switch",
      url: "https://apps.apple.com/us/app/gymswitch/id1659507484?platform=iphone",
      description:
        "Gym Switch offers the possibility of accessing all gyms in Tunisia. \n", languages: [
          {
            name: "Laravel",
            iconifyClass: "logos-laravel",
          },
          {
            name: "Flutter",
            iconifyClass: "logos-flutter",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Linux",
            iconifyClass: "devicon:linux",
          },
        ],
      links: [
    
      ],
    },
    {
      id: "2",
      name: "Bitaqa",
      url: "https://github.com/AmineFouzai/Ballon_Dorz",
      description:
        "A simple tap ,Connections Impressive , Instantly share your social networks and contact details in a convenient and elegant way\n ", languages: [
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "NextJs",
            iconifyClass: "logos-nextjs",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Linux",
            iconifyClass: "devicon:linux",
          },
        ],
      links: [
    
      ],
    },
    {
      id: "3",
      name: "Dgicasse",
      url: "https://www.facebook.com/dgcaisse.tunisie/",
      description:
        "DGCaisse offers a variety of POS options to help you bring yours, Whether you run a restaurant, sell retail products, or simply need a multi-purpose POS.\n", languages: [
          {
            name: "Electron",
            iconifyClass: "devicon:electron",
          },
          {
            name: "Csharp",
            iconifyClass: "devicon:csharp",
          },
        ],
      links: [
     
      ],
    },
    {
      id: "4",
      name: "Digishop",
      url: "https://www.digishop.tech/",
      description:
        "A new form in the digital world through the LINE platform, the most popular in this era, that will help you achieve your business goals effectively. \n ", languages: [
          {
            name: "Rust",
            iconifyClass: "devicon:rust",
          },
          {
            name: "Graphql",
            iconifyClass: "logos-graphql",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
          {
            name: "NextJs",
            iconifyClass: "logos-nextjs",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "Linux",
            iconifyClass: "devicon:linux"},
            {
              name: "AWS ",
              iconifyClass: "logos-aws",
            },
          
        ],
      links: [
     
      ],
    },
    {
      id: "5",
      name: "Dieture",
      url: "https://www.dieture.com/",
      description:
        "Get the best diet plans for weight loss from a renowned dietician in Qatar. Discover effective keto diet plans and tasty meal plans for good health\n ", languages: [
          {
            name: "Flutter",
            iconifyClass: "devicon:flutter",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
          {
            name: "Graphql",
            iconifyClass: "logos-graphql",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "Linux",
            iconifyClass: "devicon:linux"},
            {
              name: "AWS ",
              iconifyClass: "logos-aws",
            },
        ],
      links: [
        
      ],
    },
    {
      id: "6",
      name: "ZenFeat",
      url: "https://www.linkedin.com/company/zenfeat?originalSubdomain=ca",
      description:
        "We are a platform for chefs & cooks to express their culinary adventures, skills, and experiences all in one place .\n", languages: [
          {
            name: "Flutter",
            iconifyClass: "devicon:flutter",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
          {
            name: "Firebase",
            iconifyClass: "logos-firebase",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Azure",
            iconifyClass: "logos-azure",
          },
        ],
      links: [
      
      ],
    },
    {
      id: "7",
      name: "Money Go",
      url: "https://money-go.com/",
      description:
        "MoneyGo guarantees maximum security and anonymity for your personal and financial data. We have developed a cutting-edge data protection system using SSL/TLS ...\n  ", languages: [
          {
            name: "Flutter",
            iconifyClass: "devicon:flutter",
          },
       
          {
            name: "Firebase",
            iconifyClass: "logos-firebase",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "Django",
            iconifyClass: "logos-django",
          },
          {
            name: "Azure",
            iconifyClass: "logos-azure",
          },
        ],
      links: [
    
      ],
    },
    {
      id: "8",
      name: "S.T.A.L.K.E.R.S Mobile Game (Backend and CI/CD)",
      url: "https://play.google.com/store/apps/details?id=com.TimeLapse.STALKERS&hl=en_ZA",
      description:
        "Stalkers is an online third-person shooter multiplayer mobile game. The game gathers up to 40 players who confront on an uncharted island.\n", languages: [
          {
            name: "C++",
            iconifyClass: "devicon:cplusplus",
          },
       
          {
            name: "Docker",
            iconifyClass: "devicon:docker",
          },
          {
            name: "Azure Play Fab",
            iconifyClass: "devicon:azure",
          },
       
          {
            name: "Azure",
            iconifyClass: "logos-azure",
          },
        ],
      links: [
      
      ],
    },
    {
      id: "9",
      name: "El-Mall",
      url: "https://elmall.com.tn/",
      description:
        "There is something for everyone, there is something for everyone and for every budget. In addition, El-Mall is the guarantee of reliable, fast and secure delivery...\n", languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "Graphql",
            iconifyClass: "logos-graphql",
          },
          {
            name: "NextJs",
            iconifyClass: "logos-nextjs",
          },
          {
            name: "MedusaJS",
            iconifyClass: "logos-medusa",
          },
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
        ],
      links: [
     
      ],
    },
    {
      id: "10",
      name: "Float Browser Extension ",
      url: "https://www.float.com/",
      description:
        " Rated the #1 Resource Management Software on G2.  a wrapper for chrome to facilitate access .\n", languages: [
          {
            name: "TypeScript",
            iconifyClass: "skill-icons:typescript",
          },
          {
            name: "Openapi",
            iconifyClass: "devicon:openapi",
          },
          {
            name: "Azure",
            iconifyClass: "devicon:azuredevops",
          },
          {
            name: "Azure",
            iconifyClass: "logos-azure",
          },
        ],
      links: [
    
      ],
    },
    {
      id: "10",
      name: "Azure Cloud / CI/CD ",
      url: "https://cielocosta.com/",
      description:
        "Internal client work related to Ci/Cd in Devops and Azure services \n ", languages: [
          {
            name: "Azure Devops",
            iconifyClass: "devicon:azuredevops",
          },
          {
            name: "Azure",
            iconifyClass: "logos-azure",
          },
          {
            name: "Azure SQL Database",
            iconifyClass: "devicon:azuresqldatabase",
          },
        ],
      links: [
      
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

