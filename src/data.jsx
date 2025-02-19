import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbDeviceMobileCharging } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { TiPrinter } from "react-icons/ti";
import { FaIdCard } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaSimCard } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import {
  profile2,
  profile3,
  profile4,
  profile5,
  member1,
  member2,
  member3,
  member4,
  building_4,
  building_11,
  building_5,
  building_6,
  building_7,
  building_8,
  building_9,
  building_10,
  blog_1,
  blog_2,
  blog_3,
} from "./assets";

export const navTabs = [
  { name: "Home", id: "header" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Team", id: "team" },
  { name: "News & Updates", id: "project" },
  { name: "Testimonial", id: "testimonial" },
  { name: "Recent Activities", id: "blog" },
];

export const services = [
  {
    name: "Online Services",
    icon: <RiCustomerService2Fill />,
    description: `A Common Service Center (CSC) provides a range of digital and government services online, including bill payments, Aadhaar services, PAN applications, and more. It serves as a one-stop solution for citizens to access essential services conveniently.`,
  },
  {
    name: "Computer Service",
    icon: <FaComputer />,
    description: `We provide expert computer repair, maintenance, and troubleshooting services
     for hardware and software issues. Fast, reliable solutions to keep your systems running 
     smoothly.`,
  },
  {
    name: "Mobile Sales & Service ",
    icon: <TbDeviceMobileCharging />,
    description: `We provide expert mobile sales and repair services, offering the latest
     smartphones and reliable fixes for all issues. Fast, affordable, and customer-focused 
     solutions guaranteed!.

    `,
  },
  {
    name: "Mobile Recharge & Sim's",
    icon: <FaSimCard />,
    description: `Mobile recharge allows users to top up their prepaid balance or pay
     postpaid bills online. SIM cards provide network connectivity for calls, SMS, and 
     data services.`,
  },
  {
    name: "Xerox,Printouts",
    icon: <TiPrinter />,
    description: `We provide high-quality Xerox (photocopying) and printout services for documents, projects, and reports. Our services include black & white and color prints on various paper sizes. Fast, affordable, and reliable for all your printing needs!`,
  },
  {
    name: " All Id Cards Lamination",
    icon: <FaIdCard />,
    description: `Protect your ID cards with high-quality lamination for durability and a professional look. Our lamination shields against water, dust, and wear. Ideal for offices, schools, and personal use.`,
  },
];

export const teams = [
  {
    name: "Shoukath Ali",
    title: "Admin",
    profile: member1,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },

      { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/shouka_jn/" },

      { name: "LinkedIn", icon: <FiPhoneCall />, url: "https://wa.me/919843399622" },
    ],
  },
  {
    name: " Fathima",
    title: "Employee ",
    profile: member2,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },

      { name: "Instagram", icon: <FaInstagram />, url: "http://instagram.com" },

      { name: "LinkedIn", icon: <FiPhoneCall />, url: "https://wa.me/918667547080" },
    ],
  },
  {
    name: " Afsal Ahamed",
    title: "Staff",
    profile: member3,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },

      { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/_.hash_.7/" },

      { name: "LinkedIn", icon: <FiPhoneCall />, url: "https://wa.me/917708689622" },
    ],
  },
  {
    name: " Salmanul Farish",
    title: "Staff",
    profile: member4,
    social: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },

      { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/heyy._sf/" },

      { name: "LinkedIn", icon: <FiPhoneCall />, url: "https://wa.me/919363677964" },
    ],
  },
];

export const projects = [
  {
    title: "Community Certificate ",
    image: building_4,
    description: `A Community Certificate is an official document that certifies a person's caste or community. It is essential for availing government benefits, reservations, and educational opportunities.`,
  },
  {
    title: "Income Certificate",
    image: building_11,
    description: `An Income Certificate is an official document that verifies a person's annual income from all sources. It is required for availing government schemes, scholarships, and other benefits.`,
  },
  {
    title: "Passport Services – Easy & Fast Processing",
    image: building_5,
    description: `A passport is an official travel document issued by a government that certifies the identity and nationality of the holder. It allows international travel and serves as a primary identification document abroad.`,
  },
  {
    title: "Police verification report",
    image: building_6,
    description: `Police verification reports confirm an individual's background, criminal record status, and identity for official purposes. They are often required for jobs, passports, and legal documentation.`,
  },
  {
    title: "Comprehensive Ration Card Services",
    image: building_7,
    description: `Our comprehensive ration card services include new applications, corrections, and family member additions or deletions. We ensure a smooth and hassle-free process for obtaining and updating your ration card`,
  },
  {
    title: "Comprehensive Voter ID Services",
    image: building_8,
    description: `Get your Voter ID easily with our end-to-end services, including new registration, corrections, and updates. Hassle-free process with expert assistance.`,
  },
  {
    title: "PAN Card Services – Easy & Fast Processing",
    image: building_9,
    description: `Get your PAN card quickly with our hassle-free processing services. Fast approval and minimal documentation required!`,
  },
  {
    title: "Document Registration Services",
    image: building_10,
    description: `We provide hassle-free document registration services, including birth, marriage, and community certificates. Get your official documents processed quickly and securely.`,
  },
];

export const testimonial = [
  {
    image: profile2,
    name: "Al Majith",
    review: ` I applied for a PAN card through JN CSC, and the service was excellent. The process was smooth, and I received my card on time without any hassle. The staff was helpful and guided me efficiently—I highly recommend JN CSC!`,
  },
  {
    image: profile3,
    name: "Mohammed Meeram",
    review: ` I updated my Aadhaar card at JN CSC center, and the service was excellent. The staff was very helpful, making the process smooth and hassle-free. Updates were accurate and completed on time—I highly recommend this center!`,
  },
  {
    image: profile4,
    name: "Mohammed Yusuf Jamal",
    review: `JN CSC service was excellent for Voter ID application and correction. I  recommend them for their smooth and efficient process.`,
  },
  {
    image: profile5,
    name: "Mohammed Afsal",
    review: ` Our local JN CSC center provided excellent service when my father obtained his Income Certificate. Following that, I applied for my Community Certificate, and they processed it smoothly. I truly appreciate their efficient and helpful service!`,
  },
];

export const blogs = [
  {
    title: "Certified Document Copy & Online DD Application Available ",
    image: blog_1,
    category: "Stamp",
    content: `
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
    date: new Date("January 25, 2025"),
    likeCount: 34,
    commentCount: 4,
    tags: ["Edu4CommDev", "CommGrowthEdu", "EducateCommunities"],
    poster: {
      name: "Johnson",
    },
  },
  {
    title: "Ration Card Applications in Progress at JN CSC",
    image: blog_2,
    category: "Ration Card",
    content: `
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
    date: new Date("Febrarury 10, 2025"),
    likeCount: 201,
    commentCount: 123,
    tags: ["Skills4Growth", "EconSkillImpact", "GrowWithSkills"],
    poster: {
      name: "Bissi",
    },
  },
  {
    title: "Aadhaar Card Updates in Progress at JN CSC",
    image: blog_3,
    category: "Aadhaar Card Updates",
    content: `
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
    date: new Date("Febrarury 17, 2025"),
    likeCount: 198,
    commentCount: 121,
    tags: ["CommEdu", "CommunityEngagement", "EduCommunity"],
    poster: {
      name: "Abisola",
    },
  },
];

export const contacts = [
  {
    name: "Email",
    value: "JnShouka@gmail.com",
    icon: <MdOutlineAlternateEmail />,
    demoLink: "https://mailto:jnshouka@gmail.com",
  },
  {
    name: "Phone Number",
    value: "+91 9843399622",
    icon: <IoCallOutline />,
    demoLink: "https://wa.me/919843399622",
  },
  {
    name: "Address",
    value: "Aasath Nagar Karumbukkadai",
    icon: <IoLocationOutline />,
    map: 
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8203003477984!2d76.95846487587023!3d10.976932655461567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859006ec65df3%3A0xc6592b9c2f2e07e5!2sKARUMBUKKADAI!5e0!3m2!1sen!2sin!4v1731235723381!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>,
    
  },
];

export const footer = [
  {
    

    routes: [
      { value: "+91 9843399622"},
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
  {
    name: "Section",
    routes: [
      { name: "Home", id: "header" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Project", id: "project" },
      { name: "Testimonial", id: "testimonial" },
      { name: "Blog", id: "blog" },
    ],
  },
];
