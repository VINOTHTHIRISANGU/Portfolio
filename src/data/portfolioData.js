// Central content store for the portfolio.
// Edit this file to update any text, links, or content across the site.

export const profile = {
  name: "Vinoth T",
  title: "Full Stack Developer",
  experience: "3 Years",
  location: "India",
  roles: ["Full Stack Developer" ,"MERN Stack Developer","PHP Developer", "Laravel Developer", "React Developer"],
  email: "vinotht0519@gmail.com",
  phone: "+91 70102 91496",
  linkedin: "https://www.linkedin.com/in/vinoth19",
  github: "https://github.com/vinoth-t",
  resumeUrl: "/Vinoth T resume.pdf",
  about:
    "I am a Full Stack Developer with 3 years of experience building scalable web applications. I specialize in PHP, CodeIgniter, Laravel, React.js, MySQL, REST APIs, and Node.js. I enjoy solving business problems through software development and continuously learning new technologies.",
};

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "APIs Built", value: 30, suffix: "+" },
  { label: "Happy Clients", value: 8, suffix: "+" },
];

export const skills = {
  Frontend: [
    { name: "HTML5", level: 92 },
    { name: "CSS3", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 82 },
    { name: "Bootstrap", level: 88 },
    { name: "Tailwind CSS", level: 85 },
    { name: "jQuery", level: 80 },
  ],
  Backend: [
    { name: "PHP", level: 90 },
    { name: "CodeIgniter 3", level: 88 },
    { name: "Laravel", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "REST APIs", level: 88 },
    { name: "Express.js", level: 88 },
  ],
  Database: [
    { name: "MySQL", level: 88 },
    { name: "Postgresql", level: 88 },
    { name: "SQL Optimization", level: 80 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Postman", level: 82 },
    { name: "VS Code", level: 92 },
    { name: "XAMPP", level: 85 },
  ],
};

export const experience = [
  {
    role: "Software Developer",
    company: "Full Stack Engineering",
    period: "3 Years",
    points: [
      "Developed enterprise web applications end to end",
      "Built REST APIs powering web and mobile clients",
      "Optimized SQL queries for high-traffic reporting modules",
      "Fixed production bugs and improved application stability",
      "Designed inventory modules from schema to UI",
      "Developed hotel management modules including billing and bookings",
      "Worked with React frontend for modern dashboard interfaces",
      "Integrated third-party APIs for payments and notifications",
    ],
  },
];

export const timeline = [
  {
    year: "2021",
    title: "Started as PHP Developer",
    description: "Began professional journey building web applications with core PHP and MySQL.",
  },
  {
    year: "2022",
    title: "CodeIgniter & Laravel",
    description: "Moved into structured MVC development, shipping enterprise modules in CodeIgniter and Laravel.",
  },
  {
    year: "2023",
    title: "React.js & REST APIs",
    description: "Adopted React.js for frontend work and specialized in designing clean REST APIs.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    description: "Now building complete products end-to-end — PHP, Laravel, React.js, Node.js and MySQL.",
  },
];

export const projects = [
  {
    id: "pos-mobile-app",
    title: "Point of Sale (POS) Mobile Application",
    description:
      "Cross-platform Point of Sale (POS) mobile application developed for small and medium businesses. Provides real-time inventory management, sales tracking, billing, and receipt generation with secure backend integration.",
    tech: [
      "React Native",
      "React",
      "PHP",
      "MySQL",
      "REST API"
    ],
    features: [
      "Cross-Platform (Android & iOS)",
      "Sales Management",
      "Inventory Management",
      "Billing & Receipt Generation",
      "REST API Integration",
      "Real-time Synchronization",
      "MySQL Database",
      "Secure User Authentication"
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "hotel-room-booking",
    title: "Sky Room - Hotel Booking Web Application",
    description:
      "A web-based hotel room booking and management system that enables customers to search, reserve, and manage room bookings while providing administrators with complete hotel management features.",
    tech: [
      "PHP",
      "CodeIgniter 3",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Room Booking",
      "Room Availability",
      "Reservation Management",
      "Customer Management",
      "Admin Dashboard",
      "Room Management",
      "Booking Reports",
      "MVC Architecture"
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "inventory-management",
    title: "Store & Inventory Management System",
    description:
      "Enterprise inventory management solution that streamlines purchasing, warehouse operations, stock movement, supplier management, and reporting with real-time dashboards.",
    tech: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "jQuery",
      "AJAX"
    ],
    features: [
      "Purchase Management",
      "Warehouse Management",
      "Stock Transfer",
      "Stock Adjustment",
      "Goods Receipt (GRN)",
      "Supplier Management",
      "Inventory Reports",
      "Real-time Dashboard"
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    id: "ecommerce-platform",
    title: "E-commerce Web & Mobile Application",
    description:
      "Responsive e-commerce platform supporting web and mobile users with secure authentication, online payments, order management, product catalog, and real-time inventory synchronization.",
    tech: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Razorpay"
    ],
    features: [
      "User Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Online Payments",
      "Razorpay Integration",
      "Order Management",
      "Invoice Generation",
      "Mobile Responsive"
    ],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web application development from database design to polished UI.",
  },
  {
    title: "REST API Development",
    description: "Clean, documented, and secure APIs that power web and mobile applications.",
  },
  {
    title: "Database Design",
    description: "Efficient, normalized schemas and optimized queries for reliable performance at scale.",
  },
  {
    title: "React Development",
    description: "Fast, component-driven interfaces with smooth interactions and responsive layouts.",
  },
  {
    title: "Laravel Development",
    description: "Robust backend systems built on Laravel's ecosystem — auth, queues, and more.",
  },
  {
    title: "CodeIgniter Development",
    description: "Lightweight, high-performance applications built on CodeIgniter's MVC framework.",
  },
];

export const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Product Manager, Hospitality Tech",
    quote:
      "Vinoth shipped our hotel management platform ahead of schedule and handled every edge case in billing without being asked twice.",
  },
  {
    name: "Priya Raman",
    role: "Founder, Retail Startup",
    quote:
      "Our inventory system finally makes sense. The dashboard he built turned a spreadsheet nightmare into a one-click report.",
  },
  {
    name: "Karthik S",
    role: "CTO, F&B Chain",
    quote:
      "Reliable, communicative, and genuinely cares about the product. The POS system has run without a single major issue since launch.",
  },
];

export const socials = [
  { name: "GitHub", url: profile.github, icon: "github" },
  { name: "LinkedIn", url: profile.linkedin, icon: "linkedin" },
  { name: "Email", url: `mailto:${profile.email}`, icon: "mail" },
];
