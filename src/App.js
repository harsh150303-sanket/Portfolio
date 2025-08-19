import React, { useState } from 'react';
import { 
  Mail, Phone, FileDown, MapPin, 
  Twitter, Linkedin, Facebook, Instagram, 
  MessageCircle, X 
} from 'lucide-react';

// Navbar
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center gap-6 py-4 bg-gray-900 text-white shadow-lg">
      <a href="#about" className="hover:text-blue-400 transition">About</a>
      <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
      <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
      <a href="#certificates" className="hover:text-blue-400 transition">Certificates</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/your-photo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Taily Harsh</h1>
        <p className="text-lg md:text-xl mb-6">
          Digital Marketing | SEO | Social Media | Data Analytics
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:harshtaily153@gmail.com" className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition">
            <Mail className="mr-2" /> Email Me
          </a>
          <a href="tel:+919714232024" className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition">
            <Phone className="mr-2" /> Call Me
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition">
            <FileDown className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

// Card Component
function Card({ title, subtitle, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      <div className="mt-3 text-gray-700">{children}</div>
    </div>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-relaxed">
        I am a B.Tech Agricultural Engineer with expertise in SEO, Social Media
        Marketing, Ads Management, and Data Visualization. Experienced in
        developing marketing strategies, technical consulting, and project
        execution with cross-functional collaboration.
      </p>
    </section>
  );
}

// Experience Section
function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card title="Technical Consultant" subtitle="Mansa Sugar | Dec 2024 - Present">
          <ul className="list-disc ml-5 space-y-1">
            <li>Optimized preventive maintenance schedules for irrigation pivots</li>
            <li>Conducted audits of raw materials and equipment</li>
            <li>Streamlined reporting for audits & reviews</li>
          </ul>
        </Card>
        <Card title="Executive Assistant to MD" subtitle="Bhoomi Agro Industries | Aug - Nov 2024">
          <ul className="list-disc ml-5 space-y-1">
            <li>Managed communication between MD, Sales & Production</li>
            <li>Organized meetings & events</li>
            <li>Conducted research & prepared reports</li>
          </ul>
        </Card>
        <Card title="SEO Executive" subtitle="Bhoomi Agro Industries | Jun - Aug 2024">
          <ul className="list-disc ml-5 space-y-1">
            <li>Created & optimized content for website launch</li>
            <li>Collaborated with developers & designers</li>
            <li>Ran SEO campaigns on Meta, LinkedIn, Twitter, YouTube</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <Card title="LULC Changes in Saurashtra" subtitle="GIS & Remote Sensing Project">
        <p>
          Conducted analysis of Land Use Land Cover changes using ArcGIS/QGIS
          and ERDAS Imagine. Produced maps, graphs, and reports to support
          sustainable land management.
        </p>
      </Card>
    </section>
  );
}

// Modal Component for Certificates
const Modal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl max-h-full overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-800 hover:text-red-500 transition"
        >
          <X size={28} />
        </button>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{certificate.name}</h3>
        <img 
          src={certificate.image} 
          alt={certificate.name} 
          className="w-full h-auto object-contain rounded-xl shadow-lg mb-4" 
        />
        <div className="text-gray-700">
          <p className="mb-1"><strong>Certified On:</strong> {certificate.certifiedDate}</p>
          <p className="mb-1"><strong>Expires On:</strong> {certificate.expiryDate}</p>
          <p className="mb-4"><a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Certificate (PDF)</a></p>
        </div>
      </div>
    </div>
  );
};

// Certificates Section
function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      name: "Campaign Manager 360",
      link: "/Campaign manager 360.pdf",
      image: "https://placehold.co/400x300/F17D23/FFF?text=Campaign+Manager+360",
      certifiedDate: "August 4, 2025",
      expiryDate: "August 4, 2026"
    },
    {
      name: "Google Analytics Certification",
      link: "/google analytics.pdf",
      image: "https://placehold.co/400x300/29B377/FFF?text=Google+Analytics",
      certifiedDate: "August 2, 2025",
      expiryDate: "August 2, 2026"
    },
    {
      name: "Fundamentals of Digital Marketing",
      link: "/Fundamentals of Digital Marketing.pdf",
      image: "https://placehold.co/400x300/773347/FFF?text=Digital+Marketing",
      certifiedDate: "July 25, 2025",
      expiryDate: "July 25, 2026"
    },
    {
      name: "The Complete 2024 Digital Marketing Course",
      link: "/Digital Marketing Course.pdf",
      image: "https://placehold.co/400x300/3A4F6A/FFF?text=Digital+Marketing+Course",
      certifiedDate: "August 1, 2025",
      expiryDate: "August 1, 2026"
    },
    {
      name: "Masterclass on Marketing Analytics",
      link: "/Marketing Analytics Masterclass.pdf",
      image: "https://placehold.co/400x300/523A73/FFF?text=Marketing+Analytics",
      certifiedDate: "July 20, 2025",
      expiryDate: "July 20, 2026"
    },
    {
      name: "Python for Data Analytics",
      link: "/Python for Data Analytics.pdf",
      image: "https://placehold.co/400x300/4B7F52/FFF?text=Python+for+Data+Analytics",
      certifiedDate: "July 15, 2025",
      expiryDate: "July 15, 2026"
    },
    {
      name: "SEO for Beginners",
      link: "/SEO for Beginners.pdf",
      image: "https://placehold.co/400x300/8B8C89/FFF?text=SEO+for+Beginners",
      certifiedDate: "June 30, 2025",
      expiryDate: "June 30, 2026"
    },
    {
      name: "Social Media Marketing Strategy",
      link: "/Social Media Marketing Strategy.pdf",
      image: "https://placehold.co/400x300/C13584/FFF?text=Social+Media+Marketing",
      certifiedDate: "June 20, 2025",
      expiryDate: "June 20, 2026"
    },
    {
      name: "Google Ads Search Certification",
      link: "/Google Ads Search.pdf",
      image: "https://placehold.co/400x300/3B82F6/FFF?text=Google+Ads+Search",
      certifiedDate: "August 8, 2025",
      expiryDate: "August 8, 2026"
    },
    {
      name: "Google Ads Display Certification",
      link: "/Google Ads Display.pdf",
      image: "https://placehold.co/400x300/ECB365/FFF?text=Google+Ads+Display",
      certifiedDate: "August 10, 2025",
      expiryDate: "August 10, 2026"
    },
  ];

  return (
    <section id="certificates" className="bg-gray-900 py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-2xl shadow h-auto cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex justify-center items-center h-[180px] mb-4 overflow-hidden rounded-xl">
              <img src={cert.image} alt={cert.name} className="h-full w-full object-cover rounded-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
              <p className="text-gray-600 mt-2">Certified on {cert.certifiedDate}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-2 flex items-center justify-center">
        <Mail className="mr-2" /> harshtaily153@gmail.com
      </p>
      <p className="mb-2 flex items-center justify-center">
        <Phone className="mr-2" /> +91 9714232024
      </p>
      <p className="flex items-center justify-center">
        <MapPin className="mr-2" /> Una, Gujarat, India
      </p>
    </section>
  );
}

// App Component
export default function App() {
  const socialLinks = {
    twitter: "https://x.com/HarshTaily",
    linkedin: "https://www.linkedin.com/in/harsh-taily-780338271",
    facebook: "#",
    instagram: "#",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <a 
        href="https://wa.me/919714232024" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 left-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={32} />
      </a>
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Twitter size={24} /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Linkedin size={24} /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Facebook size={24} /></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Instagram size={24} /></a>
        </div>
        © {new Date().getFullYear()} Taily Harsh. All rights reserved.
      </footer>
    </div>
  );
}
