import adaptiveImg from "./assets/images/adaptive.png";
import boonoobImg from "./assets/images/boonoob.jpeg";
import ctripImg from "./assets/images/ctrip.png";
const portfilio = {
  intro: `I'm Zhenyu Ye. \nI also go by Mike. I'm currently a Graduate student at Northeastern University, 
    majoring in Computer Software Engineering - Information Systems. 
    I earned my Bachelor's Degree in Software Engineering at Wuhan University, China, in 2019. 
    I'm' determint to be a software engineer. 
    I'm proficient in Java, but I also familiar with Python, JavaScript.`,
  name: "Zhenyu Ye",
  resumes: [
    {
      company: "Adaptive Biotechnologies",
      imgURL: adaptiveImg,
      color: "rgb(0,79,138)",
      title: "Software Engineer Intern",
      date: "June, 2021 - Present",
      work: [
        "Built tools to check tailing primers (DNA sequences) in the correct well positions and analyze contamination rate for wells, increased performance by 40% with multi-processing.",
        "Implemented testing script to speed up testing of tools for tailing primers check, significantly reduced time for running integration test.",
        "Creating self-driven tool to maintain integrity of laboratory data by generating audit trail log records",
        "Collaborating with cross-team members to assure correct business logic.",
      ],
    },
    {
      company: "Boonoob.com",
      imgURL: boonoobImg,
      color: "rgb(95,99,255)",
      title: "Backend Engineer Intern",
      date: "Sept, 2020 - Dec, 2020",
      work: [
        "Participated in algorithm design and implementation for customers’ friend recommendation to improve existed customers engagement.",
        "Generated post recommendations based on the behaviors of the user’s friends.",
        "Collaborated with frontend team to implement notification for customers’ activity updates.",
        "Modularized code for activity service based on design patterns to achieve code reusability and scalability.",
      ],
    },
    {
      company: "Ctrip.com",
      imgURL: ctripImg,
      color: "rgb(36,118,226)",
      title: "Java Engineer Intern",
      date: "July, 2018 - Octo, 2018",
      work: [
        "Refactorized web services for the company’s group purchasing system",
        "Built new features to improve our company’s offline retail management system by showing statistical data for different order categories within specific time periods, reached a response time of 314ms, and improved query performance by optimizing query filters in ElasticSearch",
      ],
    },
  ],
  educations: [
    {
      college: "Northeastern University",
      date: "Sept, 2019 - Dec, 2021",
      degree: "M.S in Information Systems",
      courses: [
        "Application Engineering and Development",
        "Data Science Engineering Methods and Tools",
        "Program Structure and Algorithm",
        "Web Development Tools and Methods",
        "Smartphones-based Web Development",
        "Network Structures and Cloud Computing",
        "Web Design and User Experience Engineering",
      ],
    },
    {
      college: "Wuhan University",
      date: "Sept, 2015 - June, 2019",
      degree: "B.E in Software Engineering",
      courses: [
        "Data Structure and Algorithm",
        "Operating System",
        "Principles of Database and Design",
        "Object Oriented Programming",
        "Computer Network",
      ],
    },
  ],
  projects: [
    {
      name: "Split the Bill",
      description:
        "A full-stack project to make splitting group purchasing bill easier.",
      details: [
        `Implemented backend APIs for functionality including orders and items creation, 
        users joining orders to split the bill, and for generating billing information for each user involved in an order`,
        "Integrated backend with JWT mechanism for user authentication to improve user security",
        "Created infrastructure with CI/CD pipeline using AWS CloudFormation",
        "Designed user-friendly mobile web",
      ],
    },
    {
      name: "Garage Sale Mobile App",
      description:
        "A mobile application for buyers and sellers to do garage sales.",
      details: [
        "Implemented basic garage sales operation, including posting, viewing items",
        "Integrated real-time chatroom function",
        "Designed document format for chatroom collection, provided shortcut of items and enabled image transmission in chatrooms to improve communication efficiency",
        "Created pop-up notification feature for chats and new items to increase user stickiness",
        "Increased account security by supporting third-party(Google) user authentication",
      ],
      link: "https://github.com/HellDream/sale_garage_platform",
    },
    {
      name: "Cloud Computing Project",
      description: "Cloud Computing course project.",
      details: [
        "Built webapp using Spring Boot",
        "Built AMI using Packer",
        "Created Infrastructure with AWS using Terraform, including EC2, ALB, S3, RDS, SNS, Lambda",
        "Constructed CI/CD pipeline using github workflow and CodeDeploy",
        "Implemented AWS Lambda for email notification",
      ],
      link: "https://github.com/yez-spring2021",
    },
    {
      name: "Image Management Tool",
      description: "A tool to modify image",
      details: [
        "Image Cropping",
        "Text Editting",
        "Image Rotation",
        "Image thumbnail and properties",
        "Used Singleton Pattern for ImageManager instance and FrontendImageManager instance",
        "Used Command Pattern for redo and undo command",
        "Used MVC pattern to manage the interaction between the views, controllers, and models",
      ],
      link: "https://github.com/HellDream/ImageTools",
    },

    {
      name: "Risk Management System based on Shadow Banking",
      description:
        "A financial application for 2017 Citi Financial Innovation Application Competition",
      details: [
        "Created website and desktop application to evaluate risks of bank investment in financial products",
        "Retrieved  public  financial  data and enabled asynchronous operations to ensure regular data updates",
        "Designed default probability analysis algorithm based on KMV model and neural network",
      ],
    },
    {
      name: "Thrift Store",
      description: "A simple online thrift shop",
      details: [
        "Built frontend website using ReactJS and pure CSS.",
        "Integrated Firebase Functions to serve backend service.",
      ],
      link: "https://helldream.github.io/seainfo6150-final-project-webapp",
    },
  ],
  socialLink: {
    facebook: "https://www.facebook.com/yu.ye.10236",
    instagram: "https://www.instagram.com/yzydreamer/",
    linkedIn: "https://www.linkedin.com/in/zhenyu-ye-713b65133/",
    github: "https://github.com/helldream",
    email: "zhenyuye1996@gmail.com",
    website: "helldream.github.io",
  },
};

export default portfilio;
