/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Me",
  logo_name: "V1P3RZ ⚕",
  nickname: "hrishi1999 / picleric",
  full_name: "Abdelilah FILALI",
  subTitle: "Cybersecurity Engineering Student Enthusiastic. Always learning.",
  resumeLink:
    "https://drive.google.com/drive/u/4/folders/1S-5xSCjN3SGf4_7-6S5MoEV9S_v-RuYI",
  mail: "filali.abdelilah007@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/V1P3RZ",
  linkedin: "https://www.linkedin.com/in/abdelilah-filali-5731bb229/",
  gmail: "filali.abdelilah007@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/hrishi_55",
  instagram: "https://www.instagram.com/picleric/",
};

const skills = {
  data: [
    {
      title: "Proficient in a Diverse Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Penetration Testing",
        " ⤷ Kali Linux, BurpSuite, Nmap, Metasploit, Nessus, Bloodhound, Wireshark, SQLMap, Gobuster, JohnTheRipper, Hashcat, Hydra, Ghidra, Autopsy",
        "⚡ Network Protocols & Services",
        " ⤷ OSI, TCP/IP, Cisco (Switching and Routing), Other Protocols",
        "⚡ Programming Languages",
        " ⤷ Bash. Python, C, SQL",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "fa-linux",
          style: {
            color: "#e6e8ff",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#246fc9",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#262f52",
          },
        },
        {
          skillName: "Android App ",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
      ],
    },

    {
      title: "I also enjoy ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Playing CTF in : HackTheBox, TryHackMe",
        "⚡ Mixing Music (FL Studio).",
      ],
      softwareSkills: [],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National School of Applied Sciences of Oujda, Morocco",
      subtitle: "Cybersecurity Engineer",
      logo_path: "ensao.png",
      alt_name: "DAL",
      duration: "2019 - 2024",
      descriptions: [
        "Throughout this program, I've delved into multiple units that have formed the core of my understanding in cybersecurity and computer science. I've traversed various disciplines such as Mathematics, Algorithmics, Programming,and Statistics, which laid the groundwork for comprehending the intricate aspects of these fields.",
        "⚡ Exploring Network Security.",
        "⚡ Cryptographic Techniques and Secure Communication",
        "⚡ Mobile Forensics and Device Security.",
        "⚡ Ethical Hacking and Penetration Testing.",
      ],
      website_link:
        "http://ensao.ump.ma/fr/cycle-ingenieur-securite-informatique-et-cyber-securite",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Jr Penetration Tester",
      subtitle: "Certificate of completion",
      logo_path: "tryhackme.png",
      certificate_link:
        "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-I6593ARN9A.png",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Projects and Volunteership",
  description:
    "This portfolio encapsulates my professional voyage, detailing insightful experiences from internships, impactful projects, and rewarding volunteer engagements. It's a compendium showcasing my practical learning and contributions across varied domains.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "End of year internship",
          company: "NearSecure",
          company_url: "https://www.nearsecure.com/",
          logo_path: "nearsecure_logo.png",
          duration: "Jul - Aug 2023",
          location: "",
          description:
            "project focused on creating a service for analyzing suspicious files for malware detection",
          color: "#26eee7",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title:
            "Implementation of Open Source SIEM and XDR Solution using Wazuh",
          company: "Academy project",
          company_url: "https://github.com/V1P3RZ/SIEM-XDR/tree/main",
          logo_path: "SIEM.png",
          duration: "Jun 2023",
          location: "ENSAO",
          description:
            "Strengthening System Security using Wazuh Open Source SIEM and XDR Implementation.",
          color: "#0000FF",
        },
        {
          title: "Mobile-TradingApp-analysis ",
          company: "Academy project",
          company_url: "https://github.com/V1P3RZ/Mobile-TradingApp-analysis",
          logo_path: "StaticAnalysis.png",
          duration: "December 2022",
          location: "ENSAO",
          description:
            "This mini project aims to explore the security of financial apps and crypto wallets using in-depth analysis and reverse engineering techniques, covering both static and dynamic approaches.",
          color: "#797be8",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Sponsor Liaison",
          company: "Defensys club",
          company_url: "https://www.linkedin.com/company/club-defensys/",
          logo_path: "defensys.png",
          duration: "Summer of 2017 / 18 / 20",
          location: " ",
          description:
            "Responsible for the sponsorship unit within the “Defensys” club: - Start negotiations with  partners Determine the terms of the partnership.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Blogs",
  description:
    "This blog encapsulates my ongoing journey, embracing CTF writeups and delving into fascinating encounters from my academic pursuits. It's a platform where my passion for exploring diverse topics through the lens of cutting-edge technology tools truly shines.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Abdou.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Stay tuned for more exciting updates and information!",
    subtitle: "...",
    link: ":)",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "CineScope",
      url: "https://github.com/Hrishi1999/CineScope",
      description: "An IMDB-like application.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
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
};
