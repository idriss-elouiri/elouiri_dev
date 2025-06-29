import React from "react";

const testimonials = [
  {
    name: "This A.",
    date: "منذ شهر و21 يوم",
    text: "تسليم بوقت قياسي.",
    rating: 4.5,
  },
  {
    name: "Jubair S.",
    date: "منذ 4 أشهر و10 أيام",
    text: "رجل محترم وإنسان خلوق، أتعبته معي ولم يرد لي طلب.",
    rating: 5,
  },
  {
    name: "عمر ك.",
    date: "منذ 4 أشهر و27 يوم",
    text: "بالتوفيق.",
    rating: 5,
  },
  {
    name: "Shahada A.",
    date: "منذ 5 أشهر و4 أيام",
    text: "شكراً لك.",
    rating: 5,
  },
  {
    name: "Ahmed A.",
    date: "منذ 6 أشهر ويومين",
    text: "الله يعطيك العافية شاب خلوق وصبور وينفذلك العمل على أكمل وجه. بارك الله فيك.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {hasHalfStar && <span>☆</span>}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <span key={i + 5}>☆</span>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" dir="rtl">
      <h2 className="section-title">آراء العملاء</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <h3>{t.name}</h3>
            <p className="position">{t.date}</p>
            <StarRating rating={t.rating} />
            <p className="text">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
