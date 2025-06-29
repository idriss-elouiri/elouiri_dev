import React, { useState } from "react";
import gigImg1 from "../assets/img/webflowGig.png";
import gigImg2 from "../assets/img/figmaTohtml.png";
import gigImg3 from "../assets/img/cloneWeb.png";
import gigImg4 from "../assets/img/FrontEndReact.png";
import gigImg5 from "../assets/img/fullStack.png";
import gigImg6 from "../assets/img/FronEndHtml.png";

const GigsSection = () => {
  const gigsData = [
    {
      id: 1,
      title: "Design and develop innovative and fast Webflow websites",
      link: "https://mostaql.com/portfolio/2606692",
      image: gigImg1,
      price: 100,
      seller: {
        name: "DesignCraft",
        avatar: "/api/placeholder/100/100",
      },
    },
    {
      id: 2,
      title:
        "Developing user interfaces using HTML, CSS, JavaScript, and React",
      link: "https://mostaql.com/portfolio/2530197",
      image: gigImg4,
      price: 100,
      seller: {
        name: "ReactPro",
        avatar: "/api/placeholder/100/100",
      },
    },
    {
      id: 3,
      title:
        "You will get a responsive HTML website PSD/Figma/XD to HTML and CSS",
      link: "https://mostaql.com/portfolio/2606722",
      image: gigImg3,
      price: 100,
      seller: {
        name: "DevMaster",
        avatar: "/api/placeholder/100/100",
      },
    },
    {
      id: 4,
      title: "I will convert your designs into full websites, Figma to HTML",
      link: "https://mostaql.com/portfolio/2606713",
      image: gigImg2,
      price: 100,
      seller: {
        name: "DevMaster",
        avatar: "/api/placeholder/100/100",
      },
    },
    {
      id: 5,
      title: "Full Stack Web Developer | Next.js, React.js, Tailwind CSS",
      link: "https://mostaql.com/portfolio/2606713",
      image: gigImg5,
      price: 250,
      seller: {
        name: "Full Stack Dev",
        avatar: "/api/placeholder/100/100",
      },
    },
    {
      id: 6,
      title:
        "Professional developer of responsive and attractive websites for the client using HTML CSS",
      link: "https://mostaql.com/portfolio/2530232",
      image: gigImg6,
      price: 100,
      seller: {
        name: "DevMaster",
      },
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedGigs = showAll ? gigsData : gigsData.slice(0, 6);

  return (
    <section className="gigs-section">
      <h2>Featured Gigs</h2>
      <div className="gigs-container">
        {displayedGigs.map((gig) => (
          <a
            href={gig.link}
            key={gig.id}
            className="gig-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gig-image">
              <img src={gig.image} alt={gig.title} />
            </div>
            <div className="gig-content">
              <div className="seller-info">
                <div className="seller-details">
                  <span className="seller-name">{gig.seller.name}</span>
                </div>
              </div>
              <h3 className="gig-title">{gig.title}</h3>
              <div className="gig-price">
                <span>Starting at</span>
                <strong>${gig.price}</strong>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More / Show Less button */}
      {gigsData.length > 6 && (
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default GigsSection;
