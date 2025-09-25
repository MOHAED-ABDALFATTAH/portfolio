import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Brush,
  BookOpen,
  Send,
  ExternalLink,
} from "lucide-react";

import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import "./styles/portfolio.css";

// Example data
const portfolioData = {
  name: "Mohamed Ahmed AbdAlfattah",
  title: "Aspiring Data Analyst & Software Engineer",
  contact: {
    email: "mohamed.a.abdalfattah.abozied@gmail.com",
    phone: "+201012416300",
    github: "https://github.com/MOHAED-ABDALFATTAH",
    linkedin: "https://linkedin.com/in/mohamed-a-abdalfattah",
  },
  about: {
    summary:
      "I am a passionate Computer Science student with a strong foundation in programming, data analysis, and scalable system design. I thrive at the intersection of AI, data, and software engineering, dedicated to transforming complex problems into elegant, real-world solutions.",
    vision:
      "My journey into tech began not just in the classroom, but from a deep-seated curiosity about the patterns hidden within data. I envision a career where I can leverage my analytical skills to uncover insights that drive business decisions while also building the robust software systems needed to implement those strategies. My goal is to bridge the gap between raw data and tangible impact.",
  },
  education: {
    institution: "Egypt-Japanese University of Science and Technology",
    degree: "Bachelor of Engineering in Computer Science",
    details: "Grade: B+ | Expected Graduation: 2027",
    courses:
      "Data Structures, Algorithms, Software Engineering, Embedded Systems, Database Management",
  },
  skills: [
    {
      category: "Programming & Databases",
      icon: "server", // use a string instead of JSX
      items: ["Python", "SQL", "C++", "Java", "PHP", "JavaScript", "MongoDB"],
    },
    {
      category: "Frameworks & Tools",
      icon: "code",
      items: [
        "Node.js",
        "React",
        "Express.js",
        "Git/GitHub",
        "VS Code",
        "Unit Testing",
        "Debugging",
      ],
    },
    {
      category: "Data & AI",
      icon: "lightbulb",
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Generative AI Concepts"],
    },
  ],
  projects: [
    {
      title: "Car Rental System",
      description:
        "Developed a full-stack web application featuring user authentication, real-time booking, and an admin dashboard for fleet management. Built with HTML, CSS, JavaScript, and a robust SQL backend.",
      link: "https://github.com/MOHAED-ABDALFATTAH/Car-Rental-System",
    },
    {
      title: "Bus Reservation System",
      description:
        "Engineered a secure and high-performance backend using Node.js, Express, and MongoDB. Implemented a RESTful API for handling bookings, user data, and route management.",
      link: "https://github.com/MOHAED-ABDALFATTAH/Bus-Reservation",
    },
    {
      title: "Review Paper: Attention Mechanisms",
      description:
        "Authored a comprehensive literature survey titled 'Attention Mechanisms in Machine Learning,' analyzing seminal papers and their impact on modern Natural Language Processing (NLP) and Computer Vision (CV) models.",
      link: "#",
    },
  ],
  certifications: [
    "QBronze Diploma (QWorld 2025)",
    "QNickel Diploma (QWorld 2025)",
    "Python Programming Basics (ITI)",
    "Generative AI Explained (NVIDIA DLI 2025)",
    "Alexandria Business Association Training (2024)",
  ],
  achievements: [
    {
      title: "1st Place – Robotics Competition",
      description:
        "Led a team to victory by designing and programming an autonomous robot.",
    },
    {
      title: "3rd Place – Egypt’s National Quantum Hackathon (IQAFE 2025)",
      description:
        "Collaborated on a novel quantum algorithm for optimization problems.",
    },
    {
      title: "ECPC Participant",
      description:
        "Competed in the Egyptian Collegiate Programming Contest, honing advanced problem-solving and algorithmic skills under pressure.",
    },
  ],
};



export default function Portfolio() {
  const { name, title, contact, about, education, skills, projects, certifications, achievements } = portfolioData;

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div className="socials">
          <a href={`mailto:${contact.email}`}><Mail /></a>
          <a href={`tel:${contact.phone}`}><Phone /></a>
          <a href={contact.github} target="_blank" rel="noreferrer"><Github /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <h3><Briefcase /> About Me</h3>
        <p>{about.summary}</p>
        <p><em>{about.vision}</em></p>
      </section>

      {/* Education */}
      <section className="section">
        <h3><GraduationCap /> Education</h3>
        <Card>
          <h4>{education.institution}</h4>
          <p>{education.degree}</p>
          <p>{education.details}</p>
          <p><strong>Relevant Coursework:</strong> {education.courses}</p>
        </Card>
      </section>

      {/* Skills */}
      <section className="section">
        <h3><Code /> Skills</h3>
        <div className="skills">
          {skills.map((s) => (
            <Card key={s.category}>
              <h4>{s.category}</h4>
              <div className="badges">
                {s.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h3><Brush /> Projects</h3>
        <div className="projects">
          {projects.map((p) => (
            <Card key={p.title}>
              <h4>
                {p.title}
                <a href={p.link} target="_blank" rel="noreferrer"><ExternalLink /></a>
              </h4>
              <p>{p.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section grid">
        <div>
          <h3><BookOpen /> Certifications</h3>
          <ul>
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <h3><Award /> Achievements</h3>
          <ul>
            {achievements.map((a) => (
              <li key={a.title}><strong>{a.title}</strong> - {a.description}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        <Button><Send /> Contact Me</Button>
      </footer>
    </div>
  );
}
