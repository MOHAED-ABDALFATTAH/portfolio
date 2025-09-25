import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Award, Code } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Cover Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Mohamed Ahmed AbdAlfattah</h1>
        <h2 className="text-2xl font-light tracking-wide">
          Aspiring Data Analyst & Software Engineer
        </h2>
        <div className="flex justify-center gap-8 mt-8">
          <a href="mailto:mohamed.a.abdalfattah.abozied@gmail.com" className="hover:text-yellow-300"><Mail /></a>
          <a href="tel:+201012416300" className="hover:text-yellow-300"><Phone /></a>
          <a href="https://github.com/MOHAED-ABDALFATTAH" target="_blank" className="hover:text-yellow-300"><Github /></a>
          <a href="#" target="_blank" className="hover:text-yellow-300"><Linkedin /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">About Me</h3>
        <p className="leading-relaxed text-lg">
          I am a passionate Computer Science student with a strong foundation in programming,
          data analysis, and scalable system design. I thrive at the intersection of AI, data,
          and software engineering, and I enjoy transforming ideas into real-world solutions.
        </p>
        <p className="italic text-gray-500 mt-4">
          [Add a personal story, unique value, or career vision here]
        </p>
      </section>

      {/* Education Section */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Education</h3>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h4 className="font-bold text-xl">Egypt-Japanese University of Science and Technology</h4>
            <p className="mt-2">Bachelor of Engineering in Computer Science | Grade: B+ | Expected Grad: 2027</p>
            <p className="text-gray-500 mt-1">Relevant Coursework: Data Structures, Algorithms, Software Engineering, Embedded Systems</p>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold mb-2">Programming & Databases</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Python, SQL, C++, Java, PHP, JavaScript</li>
                <li>Databases: SQL, MongoDB</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold mb-2">Frameworks & Tools</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Node.js, React, Express.js</li>
                <li>Git/GitHub, VS Code</li>
                <li>Unit Testing, Debugging</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work & Projects Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Projects & Work</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl mb-2">Car Rental System</h4>
              <p>Full-stack app (HTML, CSS, JS, SQL) with robust database integration.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl mb-2">Bus Reservation System</h4>
              <p>MongoDB + Node.js backend optimized for security and performance.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <h4 className="font-bold text-xl mb-2">Review Paper</h4>
              <p>"Attention Mechanisms in Machine Learning" – survey on NLP & CV models.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition italic text-gray-500 flex items-center justify-center">
            [Placeholder for future projects]
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Certifications & Training</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>QBronze Diploma (QWorld 2025)</li>
          <li>QNickel Diploma (QWorld 2025)</li>
          <li>Python Programming Basics (ITI)</li>
          <li>Generative AI Explained (NVIDIA DLI 2025)</li>
          <li>Alexandria Business Association Training (2024)</li>
          <li className="italic text-gray-500">[Placeholder for future certifications]</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Achievements & Activities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4 flex items-start gap-3">
              <Award className="text-blue-600" />
              <div>
                <p className="font-bold">3rd Place – Egypt’s First National Quantum Hackathon (IQAFE 2025)</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-start gap-3">
              <Award className="text-blue-600" />
              <div>
                <p className="font-bold">1st Place – Robotics Competition</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-start gap-3">
              <Code className="text-blue-600" />
              <div>
                <p className="font-bold">ECPC Participant – Enhanced problem-solving and coding skills</p>
              </div>
            </CardContent>
          </Card>
          <Card className="italic text-gray-500 flex items-center justify-center">
            [Placeholder for future awards/publications]
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Offered Services</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Backend Development</li>
          <li>Data Analysis & Visualization</li>
          <li>AI & Machine Learning Research</li>
          <li>Quantum Computing (beginner level)</li>
          <li className="italic text-gray-500">[Placeholder for freelancing/consulting services]</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2">Testimonials</h3>
        <p className="italic text-gray-500">[Placeholder for testimonials from professors, mentors, or teammates]</p>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
        <p>Email: mohamed.a.abdalfattah.abozied@gmail.com</p>
        <p>GitHub: github.com/MOHAED-ABDALFATTAH</p>
        <p className="italic">[Placeholder for LinkedIn / Portfolio Website link]</p>
        <Button variant="secondary" className="mt-6">Contact Me</Button>
      </section>
    </div>
  );
}