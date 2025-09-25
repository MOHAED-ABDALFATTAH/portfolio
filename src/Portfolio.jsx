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
  name: "Mohamed Ahmed",
  title: "Software Engineer | React & Node.js Developer",
  contact: {
    email: "youremail@example.com",
    phone: "01012345678",
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  about: {
    summary: "I am a passionate developer who loves building web apps.",
    vision: "My goal is to create impactful and scalable solutions.",
  },
  education: {
    institution: "Alamein University",
    degree: "B.Sc. in Computer Science",
    details: "3rd Year CSE",
    courses: "Algorithms, Databases, AI, Quantum Computing",
  },
  skills: [
    { category: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    { category: "Other", items: ["Git", "Linux", "Docker"] },
  ],
  projects: [
    { title: "Bus Reservation System", description: "Built with Node.js and MongoDB", link: "#" },
    { title: "Portfolio Website", description: "Personal website using React", link: "#" },
  ],
  certifications: ["AWS Cloud Practitioner", "Coursera: Machine Learning"],
  achievements: [
    { title: "ECPC Participant", description: "Competed in programming contest" },
    { title: "Quantum Hackathon", description: "Worked on quantum computing project" },
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
