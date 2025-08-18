import React from 'react';
import { Mail, Phone, FileDown, MapPin, Twitter, Linkedin, Facebook, Instagram, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components for the carousel
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-40px", zIndex: 1 }}
      onClick={onClick}
    >
      <ChevronRight size={48} color="#fff" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-40px", zIndex: 1 }}
      onClick={onClick}
    >
      <ChevronLeft size={48} color="#fff" />
    </div>
  );
};

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
          <a
            href="mailto:harshtaily153@gmail.com"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition"
          >
            <Mail className="mr-2" /> Email Me
          </a>
          <a
            href="tel:+919714232024"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition"
          >
            <Phone className="mr-2" /> Call Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-xl bg-white text-gray-800 font-medium shadow hover:bg-gray-200 transition"
          >
            <FileDown className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      <div className="mt-3 text-gray-700">{children}</div>
    </div>
  );
}

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

function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card
          title="Technical Consultant"
          subtitle="Mansa Sugar | Dec 2024 - Present"
        >
          <ul className="list-disc ml-5 space-y-1">
            <li>Optimized preventive maintenance schedules for irrigation pivots</li>
            <li>Conducted audits of raw materials and equipment</li>
            <li>Streamlined reporting for audits & reviews</li>
          </ul>
        </Card>
        <Card
          title="Executive Assistant to MD"
          subtitle="Bhoomi Agro Industries | Aug - Nov 2024"
        >
          <ul className="list-disc ml-5 space-y-1">
            <li>Managed communication between MD, Sales & Production</li>
            <li>Organized meetings & events</li>
            <li>Conducted research & prepared reports</li>
          </ul>
        </Card>
        <Card
          title="SEO Executive"
          subtitle="Bhoomi Agro Industries | Jun - Aug 2024"
        >
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

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <Card
        title="LULC Changes in Saurashtra"
        subtitle="GIS & Remote Sensing Project"
      >
        <p>
          Conducted analysis of Land Use Land Cover changes using ArcGIS/QGIS
          and ERDAS Imagine. Produced maps, graphs, and reports to support
          sustainable land management.
        </p>
      </Card>
    </section>
  );
}

function Certificates() {
  const certificates = [
    { 
      name: "Campaign Manager 360", 
      link: "/Campaign manager 360.pdf", 
      image: "/Campaign manager 360_page-0001.jpg",
      certifiedDate: "August 4, 2025",
      expiryDate: "August 4, 2026"
    },
    { 
      name: "X Website Traffic & Sales Campaigns", 
      link: "/X Website Traffic & Sales Campaigns Badge _ X Ads Academy.pdf", 
      image: "/X Website Traffic & Sales Campaigns Badge _ X Ads Academy_page-0001.jpg",
      certifiedDate: "June 6, 2025",
      expiryDate: "June 6, 2027"
    },
    { 
      name: "Privacy & data protection", 
      link: "/Privacy and data protection across Meta technologies _ Learn new skills to build your brand or business.pdf", 
      image: "/Privacy and data protection across Meta technologies _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Conversion Tracking on X", 
      link: "/Conversion Tracking on X _ X Ads Academy.pdf", 
      image: "/Conversion Tracking on X _ X Ads Academy_pages-to-jpg-0001.jpg",
      certifiedDate: "June 5, 2025",
      expiryDate: "June 5, 2027"
    },
    { 
      name: "X Ads Manager Fundamentals", 
      link: "/X Ads Manager Fundamentals Badge _ X Ads Academy.pdf", 
      image: "/X Ads Manager Fundamentals Badge _ X Ads Academy_page-0001.jpg",
      certifiedDate: "June 6, 2025",
      expiryDate: "June 6, 2027"
    },
    { 
      name: "Build a Facebook Page Presence", 
      link: "/Build an online presence with a Facebook Page _ Learn new skills to build your brand or business.pdf", 
      image: "/Build an online presence with a Facebook Page _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Mobile App Campaign Badge", 
      link: "/Mobile App Campaign Badge _ X Ads Academy.pdf", 
      image: "/Mobile App Campaign Badge _ X Ads Academy_page-0001.jpg",
      certifiedDate: "June 6, 2025",
      expiryDate: "June 6, 2027"
    },
    { 
      name: "Meta Business Suite", 
      link: "/Connect with customers using Meta Business Suite _ Learn new skills to build your brand or business.pdf", 
      image: "/Connect with customers using Meta Business Suite _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Meta Pixel & Conversions API", 
      link: "/Set up and use the Meta Pixel and Meta Conversions API for website campaigns _ Learn new skills to build your brand or business.pdf", 
      image: "/Set up and use the Meta Pixel and Meta Conversions API for website campaigns _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Marketing with Meta technologies", 
      link: "/Start marketing with Meta technologies _ Learn new skills to build your brand or business.pdf", 
      image: "/Start marketing with Meta technologies _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Build an Instagram Presence", 
      link: "/Learn new skills to build your brand or business.pdf", 
      image: "/Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Establish Messenger Presence", 
      link: "/Establish your business presence with Messenger _ Learn new skills to build your brand or business.pdf", 
      image: "/Establish your business presence with Messenger _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Advertising on Facebook & Instagram", 
      link: "/Get started with advertising on Facebook and Instagram _ Learn new skills to build your brand or business.pdf", 
      image: "/Get started with advertising on Facebook and Instagram _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Use WhatsApp for Business", 
      link: "/Use WhatsApp for a business _ Learn new skills to build your brand or business.pdf", 
      image: "/Use WhatsApp for a business _ Learn new skills to build your brand or business_page-0001.jpg",
      certifiedDate: "June 4, 2025",
      expiryDate: "Not Applicable"
    },
    { 
      name: "Google Analytics Certification", 
      link: "/google analytics.pdf", 
      image: "/google analytics_page-0001.jpg",
      certifiedDate: "August 2, 2025",
      expiryDate: "August 2, 2026"
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="certificates" className="bg-gray-900 py-16 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="relative max-w-5xl mx-auto">
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-4 rounded-2xl shadow mx-2 h-full flex flex-col justify-between">
                <div className="flex justify-center items-center h-[175px] mb-4 overflow-hidden rounded-xl">
                  <img src={cert.image} alt={cert.name} className="h-full w-full object-cover rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 mt-2">Certified on {cert.certifiedDate}</p>
                  <p className="text-gray-600">Expires on {cert.expiryDate}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

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

export default function App() {
  const socialLinks = {
    twitter: "https://x.com/HarshTaily",
    linkedin: "https://www.linkedin.com/in/harsh-taily-780338271",
    facebook: "YOUR_FACEBOOK_URL",
    instagram: "YOUR_INSTAGRAM_URL",
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
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Twitter size={24} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin size={24} />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Facebook size={24} />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Instagram size={24} />
          </a>
        </div>
        © {new Date().getFullYear()} Taily Harsh. All rights reserved.
      </footer>
    </div>
  );
}