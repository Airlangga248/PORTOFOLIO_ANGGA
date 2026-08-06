export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Projects Data
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    category: "Web Dev",
    description:
      "A full-featured e-commerce platform with cart, payment gateway, and admin panel.",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Attendance App with GPS",
    category: "Mobile App",
    description:
      "Mobile application for employee attendance tracking with geo-tagging and face detection.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "School Management System Dashboard",
    category: "UI/UX",
    description:
      "Intelligent UI/UX design prototype for managing school courses, students, and grading system.",
    tech: ["Figma", "UI Design", "Prototyping"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Personal Landing Page Portfolio",
    category: "Web Dev",
    description:
      "Highly responsive, premium dark-themed portfolio site built with speed and animations.",
    tech: ["HTML", "Vanilla JS", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Task Management Mobile App",
    category: "Mobile App",
    description:
      "Cross-platform mobile app to track tasks, organize projects, and collaborate with team members.",
    tech: ["Flutter", "Dart", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Smart Home Control Interface",
    category: "UI/UX",
    description:
      "Modern dark-themed dashboard design for smart home appliance monitoring.",
    tech: ["Figma", "Interaction Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "🌐",
    skills: [
      { name: "HTML5 / CSS3", level: "Advanced", percentage: 90 },
      { name: "JavaScript (ES6+)", level: "Advanced", percentage: 85 },
      { name: "React.js", level: "Intermediate", percentage: 75 },
      { name: "Next.js (App Router)", level: "Intermediate", percentage: 70 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 80 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 70 },
      { name: "Postman", level: "Advanced", percentage: 80 },
      { name: "VS Code", level: "Advanced", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Javascript Essential 1",
    issuer: "Cisco Networking",
    date: "11 Juni 2026",
    credentialId: "Cert ID: 41d070b4-481f-4152-bcb0-7a4f03df29a0",
    verificationUrl: "https://www.credly.com/badges/287dd2ac-3286-4938-8bbc-d58c2980810e/public_url",
  },
  {
    id: 2,
    title: "Javascript Essential 2",
    issuer: "Cisco Networking",
    date: "11 Juni 2026",
    credentialId: "Cert ID: 41d070b4-481f-4152-bcb0-7a4f03df29a0",
    verificationUrl: "https://www.credly.com/badges/287dd2ac-3286-4938-8bbc-d58c2980810e/public_url",
  },
  {
    id: 3,
    title: "Javascript Essential 3",
    issuer: "Cisco Networking",
    date: "11 Juni 2026",
    credentialId: "Cert ID: 41d070b4-481f-4152-bcb0-7a4f03df29a0",
    verificationUrl: "https://www.credly.com/badges/287dd2ac-3286-4938-8bbc-d58c2980810e/public_url",
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elzhar Ramadhan",
    role: "Kepala Jurusan RPL",
    company: "SMK Telkom MKS",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Airlangga menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatif dan skill.",
  },
  {
    id: 2,
    name: "Aufa Safaraz Prianda",
    role: "Teman Sekelas / Ketua Kelas",
    company: "XII RPL 1",
    avatar: "🧑‍💻",
    stars: 5,
    quote:
      "Belajar kelompok bareng Airlangga selalu asik. Dia pintar menjelaskan konsep pemrograman yang susah dengan bahasa yang gampang dimengerti oleh kami sekelas.",
  },
  {
    id: 3,
    name: "Akramul Nouval",
    role: "Guru Produktif Web & Mobile",
    company: "SMK Telkom MKS",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Pemahaman Airlangga terhadap framework Next.js dan Tailwind CSS v4 di usianya sekarang sangat mengagumkan. Proyek-proyeknya dikerjakan dengan sangat baik.",
  },
];

// Helper delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(800);
  return testimonials;
}