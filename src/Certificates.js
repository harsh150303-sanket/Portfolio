import React from 'react';

function Certificates() {
  const certificates = [
    { 
      name: "Establish your business presence with Messenger", 
      link: "/Establish your business presence with Messenger _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Connect with customers using Meta Business Suite", 
      link: "/Connect with customers using Meta Business Suite _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Build an online presence with a Facebook Page", 
      link: "/Build an online presence with a Facebook Page _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Build an online business presence with Instagram", 
      link: "/Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Get started with advertising on Facebook and Instagram", 
      link: "/Get started with advertising on Facebook and Instagram _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Privacy and data protection across Meta technologies", 
      link: "/Privacy and data protection across Meta technologies _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Set up and use the Meta Pixel and Meta Conversions API", 
      link: "/Set up and use the Meta Pixel and Meta Conversions API for website campaigns _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Start marketing with Meta technologies", 
      link: "/Start marketing with Meta technologies _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Use WhatsApp for a business", 
      link: "/Use WhatsApp for a business _ Learn new skills to build your brand or business.pdf" 
    },
    { 
      name: "Campaign Manager 360", 
      link: "/Campaign manager 360.pdf" 
    },
    { 
      name: "Google Analytics Certification", 
      link: "/google analytics.pdf" 
    },
    { 
      name: "X Ads Manager Fundamentals", 
      link: "/X Ads Manager Fundamentals Badge _ X Ads Academy.pdf" 
    },
    { 
      name: "X Website Traffic & Sales Campaigns", 
      link: "/X Website Traffic & Sales Campaigns Badge _ X Ads Academy.pdf" 
    },
    { 
      name: "Mobile App Campaign Badge", 
      link: "/Mobile App Campaign Badge _ X Ads Academy.pdf" 
    },
    { 
      name: "Conversion Tracking on X", 
      link: "/Conversion Tracking on X _ X Ads Academy.pdf" 
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">{cert.name}</h3>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;