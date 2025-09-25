// index.jsx - Entry point for CRA/Vite React app
import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import "./index.css"; // TailwindCSS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);

/* ----------------------------- */
/* Portfolio.jsx - Your component */

import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Server,
  Brush,
  BookOpen,
  Send,
  ExternalLink,
} from "lucide-react";

// Use relative imports instead of @/components
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

// --- Portfolio Data ---
const portfolioData = { /* same as before */ };

export default function Portfolio() {
  const { name, title, contact, about, education, skills, projects, certifications, achievements } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-24 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight">{name}</h1>
          <h2 className="text-xl md:text-2xl font-light opacity-90">{title}</h2>
          <div className="flex justify-center items-center gap-6 mt-8">
            <a href={`mailto:${contact.email}`} className="hover:text-yellow-300 transition-colors"><Mail /></a>
            <a href={`tel:${contact.phone}`} className="hover:text-yellow-300 transition-colors"><Phone /></a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><Github /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors"><Linkedin /></a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {/* About */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><Briefcase className="h-7 w-7" /> About Me</h3>
          <p className="leading-relaxed text-lg mb-4">{about.summary}</p>
          <p className="italic text-gray-600 leading-relaxed text-lg">{about.vision}</p>
        </section>

        {/* Education */}
        <section id="education" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><GraduationCap className="h-7 w-7" /> Education</h3>
          <Card className="shadow-md border-l-4 border-blue-600">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl">{education.institution}</h4>
              <p className="mt-1 text-md text-gray-700">{education.degree}</p>
              <p className="text-sm text-gray-500">{education.details}</p>
              <p className="text-sm text-gray-500 mt-2"><strong>Relevant Coursework:</strong> {education.courses}</p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><Code className="h-7 w-7" /> Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory) => (
              <Card key={skillCategory.category} className="shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">{skillCategory.icon} {skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillCategory.items.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><Brush className="h-7 w-7" /> Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col hover:border-blue-500 transition-colors">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section id="achievements" className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><BookOpen className="h-7 w-7"/> Certifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-md">
                {certifications.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 border-b-2 border-blue-600 pb-2 flex items-center gap-3"><Award className="h-7 w-7"/> Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((ach) => (
                  <li key={ach.title}>
                    <p className="font-semibold text-md">{ach.title}</p>
                    <p className="text-gray-600 text-sm">{ach.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm currently seeking new opportunities and am open to freelance projects. Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <a href={`mailto:${contact.email}`}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Me <Send className="h-4 w-4 ml-2" />
            </Button>
          </a>
          <div className="mt-12 border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ----------------------------- */
/* index.css - Tailwind setup */

