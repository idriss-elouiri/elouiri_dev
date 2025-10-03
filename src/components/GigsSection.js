import React, { useState } from "react";
import gigImg1 from "../assets/img/مطور تطبيق ويب.png";
import gigImg2 from "../assets/img/htmltofigma.png";
import gigImg3 from "../assets/img/cloneWebsiteDesing.png";
import gigImg4 from "../assets/img/mern stack gig.jpg";
import gigImg5 from "../assets/img/WEB APP.png";
import gigImg6 from "../assets/img/ديناميكي ومخصص باستخدام أحدث تقنيات.png";
import gigImg7 from "../assets/img/تطوير مواقع.png";
import gigImg8 from "../assets/img/احصل على موقع متكامل لأعمالك – تصميم فريد، سهل الاستخدام، وأداء متميز..png";

const GigsSection = () => {
  const gigsData = [
    {
      id: 1,
      title:
        "I will develop full stack web application as a mern stack developer",
      link: "https://www.fiverr.com/elouiridev/develop-a-full-mern-web-application-with-admin-panel-and-api-integration?context_referrer=seller_page&ref_ctx_id=e57f73feb5c94bf189090765b1e26f83&pckg_id=1&pos=4&seller_online=true&imp_id=7466a8e9-4ae3-4977-a126-b6fb3275152d",
      image: gigImg5,
      price: 100,
    },

    {
      id: 2,
      title:
        "I will do full stack website development as mern stack, frontend, backend developer",
      link: "https://www.fiverr.com/elouiridev/develop-mern-stack-web-app-as-a-mern-stack-developer?context_referrer=seller_page&ref_ctx_id=e57f73feb5c94bf189090765b1e26f83&pckg_id=1&pos=1&seller_online=true&imp_id=5d9a395a-622f-4f60-853e-e3292b6bd88d",
      image: gigImg4,
      price: 85,
    },
    {
      id: 3,
      title:
        "I will copy, clone website or landing page using html, css, javascript, reactjs",
      link: "https://www.fiverr.com/elouiridev/copy-clone-website-or-landing-page-using-html-css-javascript-reactjs-nextjs?context_referrer=seller_page&ref_ctx_id=e57f73feb5c94bf189090765b1e26f83&pckg_id=1&pos=2&seller_online=true&imp_id=43035f16-2205-48b0-ba97-5cf20e3eebb2",
      image: gigImg3,
      price: 15,
    },
    {
      id: 4,
      title:
        "I will convert figma to HTML, figma to react using tailwind CSS, HTML CSS",
      link: "https://www.fiverr.com/elouiridev/convert-figma-to-html-css-psd-to-html-xd-to-html-responsive-design-tailwind?context_referrer=seller_page&ref_ctx_id=e57f73feb5c94bf189090765b1e26f83&pckg_id=1&pos=3&seller_online=true&imp_id=bebd73ba-7544-4179-a5ad-244cd0c1082b",
      image: gigImg2,
      price: 15,
    },
    {
      id: 5,
      title: "مطور MERN Stack محترف بناء تطبيقات ويب سريعة وقابلة للتوسع",
      link: "https://khamsat.com/programming/web-application-development/3071338-%D9%85%D8%B7%D9%88%D8%B1-mern-stack-%D9%85%D8%AD%D8%AA%D8%B1%D9%81-%D8%A8%D9%86%D8%A7%D8%A1-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D9%88%D9%8A%D8%A8-%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9-%D9%88%D9%82%D8%A7%D8%A8%D9%84%D8%A9-%D9%84%D9%84%D8%AA%D9%88%D8%B3%D8%B9",
      image: gigImg1,
      price: 20,
    },
    {
      id: 6,
      title: "مطور محترف لمواقع استجابية وجذابة للعميل باستعمال HTML CSS",
      link: "https://khamsat.com/programming/css-html/3071269-%D9%85%D8%B7%D9%88%D8%B1-%D9%85%D8%AD%D8%AA%D8%B1%D9%81-%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%A7%D8%B3%D8%AA%D8%AC%D8%A7%D8%A8%D9%8A%D8%A9-%D9%88%D8%AC%D8%B0%D8%A7%D8%A8%D8%A9-%D9%84%D9%84%D8%B9%D9%85%D9%8A%D9%84-%D8%A8%D8%A7%D8%B3%D8%AA%D8%B9%D9%85%D8%A7%D9%84-html-css",
      image: gigImg6,
      price: 10,
    },
    {
      id: 7,
      title: "تطوير واجهات المستخدم باستخدام HTML, CSS, JavaScript, React",
      link: "https://khamsat.com/programming/custom-website-development/3071403-%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-html-css-javascript-react",
      image: gigImg7,
      price: 15,
    },
    {
      id: 8,
      title: "تصميم وتطوير مواقع مبتكرة وسريعة Webflow",
      link: "https://khamsat.com/programming/custom-website-development/3071307-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D9%85%D8%A8%D8%AA%D9%83%D8%B1%D8%A9-%D9%88%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9-webflow",
      image: gigImg8,
      price: 15,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedGigs = showAll ? gigsData : gigsData.slice(0, 8);

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
      {gigsData.length > 8 && (
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default GigsSection;
