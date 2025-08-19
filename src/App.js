import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, FileDown, MapPin, 
  Twitter, Linkedin, Facebook, Instagram, 
  MessageCircle, X, ArrowRight, ArrowLeft,
  Code, Feather, PieChart, BarChart2,
  Database, Zap, Search, Sun, Cloud,
  Image, Layers
} from 'lucide-react';

// Helper for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 60, // Offset for fixed navbar
      behavior: 'smooth'
    });
  }
};

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center gap-6 py-4 bg-gray-900 text-white shadow-lg">
      <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-blue-400 transition">About</a>
      <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="hover:text-blue-400 transition">Experience</a>
      <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="hover:text-blue-400 transition">Skills</a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="hover:text-blue-400 transition">Projects</a>
      <a href="#certificates" onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }} className="hover:text-blue-400 transition">Certificates</a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-blue-400 transition">Contact</a>
    </nav>
  );
}

// Hero Section with a background image placeholder
function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/1f2937/d1d5db?text=Taily+Harsh+Portfolio')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6 rounded-xl bg-gray-900 bg-opacity-70 shadow-2xl backdrop-blur-sm">
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
function Card({ title, subtitle, children, image, imageAlt }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
      {image && (
        <img 
          src={image} 
          alt={imageAlt} 
          className="w-full h-auto object-cover rounded-xl mb-4" 
          loading="lazy"
        />
      )}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      <div className="mt-3 text-gray-700 flex-grow">{children}</div>
    </div>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        As a B.Tech Agricultural Engineer, I leverage a unique blend of technical knowledge and strategic marketing expertise. I specialize in a wide range of digital disciplines, including SEO, social media marketing, ads management, and data visualization. My experience lies in crafting and executing comprehensive marketing strategies, providing technical consulting, and leading collaborative projects to drive tangible results.
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
        <Card title="Technical Consultant" subtitle="Triefin services Pvt ltd | Dec 2024 - Present">
          <ul className="list-disc ml-5 space-y-1">
            <li>Optimized preventive maintenance schedules for irrigation pivots</li>
            <li>Conducted audits of raw materials and equipment</li>
            <li>Streamlined reporting for audits & reviews</li>
          </ul>
        </Card>
        <Card title="Executive Assistant to MD" subtitle="Bhoomi Agro Industries | August 2024 - November 2024">
          <ul className="list-disc ml-5 space-y-1">
            <li>Acted as a liaison between MD & Sales & Production for daily sales & production updates & occurrences.</li>
            <li>Organized & facilitated internal events, client meetings, and business gatherings.</li>
            <li>Supported decision making by conducting background research and preparing briefing materials.</li>
          </ul>
        </Card>
        <Card title="SEO Executive" subtitle="Bhoomi Agro Industries | June 2024-August 2024">
          <ul className="list-disc ml-5 space-y-1">
            <li>Created and optimized content for landing pages & product descriptions aligned with the new website upcoming for BHOOMI AGRO.</li>
            <li>Collaborated with developers and designers to implement SEO friendly site architecture.</li>
            <li>Ran seasonal and product specific SEO campaigns on different media platforms (Meta ads manager, LinkedIn, Twitter, You tube).</li>
            <li>Delivered Monthly reports detailing KPIS, traffic growth, ROI.</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

// Skills Section with Icons
function Skills() {
  const skills = [
    { name: "Digital Marketing", icon: <Feather size={48} className="text-blue-500" /> },
    { name: "SEO", icon: <Search size={48} className="text-purple-500" /> },
    { name: "Social Media Marketing", icon: <Layers size={48} className="text-green-500" /> },
    { name: "Ads Management", icon: <Zap size={48} className="text-yellow-500" /> },
    { name: "Data Visualization", icon: <PieChart size={48} className="text-red-500" /> },
    { name: "Data Analytics", icon: <BarChart2 size={48} className="text-indigo-500" /> },
    { name: "Python", icon: <Code size={48} className="text-gray-500" /> },
    { name: "GIS/Remote Sensing", icon: <MapPin size={48} className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Core Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-3 text-lg font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Section with Images
function Projects() {
  const projects = [
    {
      title: "LULC Changes in Saurashtra",
      subtitle: "GIS & Remote Sensing Project",
      description: "Conducted analysis of Land Use Land Cover changes using ArcGIS/QGIS and ERDAS Imagine. Produced maps, graphs, and reports to support sustainable land management.",
      image: "https://placehold.co/600x400/8B5CF6/FFF?text=GIS+Project+Mockup",
      imageAlt: "Mockup image of a GIS and Remote Sensing project map"
    },
    {
      title: "Digital Marketing Campaign",
      subtitle: "Social Media & SEO",
      description: "Designed and executed a comprehensive digital marketing campaign for a local business, increasing their online visibility by 30% and social media engagement by 50% in three months.",
      image: "https://placehold.co/600x400/10B981/FFF?text=Digital+Marketing+Campaign",
      imageAlt: "Mockup image of a digital marketing campaign dashboard"
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index}
            title={project.title} 
            subtitle={project.subtitle}
            image={project.image}
            imageAlt={project.imageAlt}
          >
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
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

// Certificates Section with a custom carousel
function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    { name: "Campaign Manager 360", link: "/Campaign manager 360.pdf", image: "https://placehold.co/400x300/F17D23/FFF?text=Campaign+Manager+360", certifiedDate: "Aug 4, 2025", expiryDate: "Aug 4, 2026" },
    { name: "Google Analytics Certification", link: "/google analytics.pdf", image: "https://placehold.co/400x300/29B377/FFF?text=Google+Analytics", certifiedDate: "Aug 2, 2025", expiryDate: "Aug 2, 2026" },
    { name: "Fundamentals of Digital Marketing", link: "/Fundamentals of Digital Marketing.pdf", image: "https://placehold.co/400x300/773347/FFF?text=Digital+Marketing", certifiedDate: "Jul 25, 2025", expiryDate: "Jul 25, 2026" },
    { name: "The Complete 2024 Digital Marketing Course", link: "/Digital Marketing Course.pdf", image: "https://placehold.co/400x300/3A4F6A/FFF?text=Digital+Marketing+Course", certifiedDate: "Aug 1, 2025", expiryDate: "Aug 1, 2026" },
    { name: "Masterclass on Marketing Analytics", link: "/Marketing Analytics Masterclass.pdf", image: "https://placehold.co/400x300/523A73/FFF?text=Marketing+Analytics", certifiedDate: "Jul 20, 2025", expiryDate: "Jul 20, 2026" },
    { name: "Python for Data Analytics", link: "/Python for Data Analytics.pdf", image: "https://placehold.co/400x300/4B7F52/FFF?text=Python+for+Data+Analytics", certifiedDate: "Jul 15, 2025", expiryDate: "Jul 15, 2026" },
    { name: "SEO for Beginners", link: "/SEO for Beginners.pdf", image: "https://placehold.co/400x300/8B8C89/FFF?text=SEO+for+Beginners", certifiedDate: "Jun 30, 2025", expiryDate: "Jun 30, 2026" },
    { name: "Social Media Marketing Strategy", link: "/Social Media Marketing Strategy.pdf", image: "https://placehold.co/400x300/C13584/FFF?text=Social+Media+Marketing", certifiedDate: "Jun 20, 2025", expiryDate: "Jun 20, 2026" },
    { name: "Google Ads Search Certification", link: "/Google Ads Search.pdf", image: "https://placehold.co/400x300/3B82F6/FFF?text=Google+Ads+Search", certifiedDate: "Aug 8, 2025", expiryDate: "Aug 8, 2026" },
    { name: "Google Ads Display Certification", link: "/Google Ads Display.pdf", image: "https://placehold.co/400x300/ECB365/FFF?text=Google+Ads+Display", certifiedDate: "Aug 10, 2025", expiryDate: "Aug 10, 2026" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="bg-gray-900 py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="relative max-w-lg mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certificates.map((cert, index) => (
            <div key={index} className="w-full flex-shrink-0 px-3">
              <div 
                className="bg-white p-4 rounded-2xl shadow h-full cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="flex justify-center items-center h-[180px] mb-4 overflow-hidden rounded-xl">
                  <img src={cert.image} alt={`${cert.name} certification`} className="h-full w-full object-cover rounded-xl" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 mt-2">Certified on {cert.certifiedDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ArrowLeft className="text-gray-800" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ArrowRight className="text-gray-800" />
        </button>
      </div>
      <Modal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      text: "Harsh did amazing work. I will definitely hire again.",
      author: "Dev",
      title: "Freelancer"
    },
    {
      text: "Harsh's work as an auditor was invaluable. His insights and efficiency in streamlining our reporting and review processes were greatly appreciated. We were very satisfied and would highly recommend him.",
      author: "Triefin services Pvt ltd",
      title: "Employer"
    }
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
            <blockquote className="italic text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</blockquote>
            <p className="font-semibold text-gray-900">- {testimonial.author}</p>
            {testimonial.title && <p className="text-sm text-gray-500">{testimonial.title}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-2 flex items-center justify-center text-gray-700">
        <Mail className="mr-2" /> harshtaily153@gmail.com
      </p>
      <p className="mb-2 flex items-center justify-center text-gray-700">
        <Phone className="mr-2" /> +91 9714232024
      </p>
      <p className="flex items-center justify-center text-gray-700">
        <MapPin className="mr-2" /> Una, Gujarat, India
      </p>
    </section>
  );
}

// App Component with SEO meta tags
export default function App() {
  const socialLinks = {
    twitter: "https://x.com/HarshTaily",
    linkedin: "https://www.linkedin.com/in/harsh-taily-780338271",
    facebook: "#",
    instagram: "#",
  };

  useEffect(() => {
    document.title = "Taily Harsh - Digital Marketing & Data Portfolio";
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Taily Harsh is a B.Tech Agricultural Engineer specializing in digital marketing, SEO, social media, and data visualization. View portfolio, projects, and certificates.';
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Testimonials />
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
