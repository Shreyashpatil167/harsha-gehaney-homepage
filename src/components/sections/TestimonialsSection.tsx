import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Harsha Gehaney crafted the most exquisite lehenga for my wedding. Every detail was absolute perfection — from the intricate zardozi embroidery to the impeccable fit. I truly felt like royalty.",
    author: "Priya Sharma",
    location: "Mumbai",
    occasion: "Bride, 2024",
  },
  {
    id: 2,
    quote: "The craftsmanship is unparalleled. I've purchased from many designers, but HG stands apart. Each piece tells a story of heritage and artistry that resonates with my soul.",
    author: "Meera Kapoor",
    location: "Delhi",
    occasion: "Mother of the Bride",
  },
  {
    id: 3,
    quote: "From the initial consultation to the final delivery, the experience was seamless and luxurious. The team understood my vision and created a truly bespoke masterpiece.",
    author: "Ananya Reddy",
    location: "Hyderabad",
    occasion: "Bride, 2023",
  },
];

const pressMentions = ["Vogue India", "Harper's Bazaar", "Elle", "Femina", "Grazia"];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-primary overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[11px] font-body tracking-[0.3em] uppercase text-secondary mb-4">
            Love Letters
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground">
            From Our Brides
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <Quote
            size={60}
            className="text-secondary/20 absolute -top-4 left-0 lg:-left-8"
          />

          {/* Testimonial Content */}
          <div className="text-center px-4 lg:px-16">
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground leading-relaxed mb-10 min-h-[150px]">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="w-12 h-px bg-secondary mx-auto mb-6" />

            <div>
              <p className="font-heading text-lg text-primary-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-[11px] font-body tracking-[0.15em] uppercase text-secondary mt-1">
                {testimonials[currentIndex].location} • {testimonials[currentIndex].occasion}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-secondary w-6"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Press Mentions */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10">
          <p className="text-[10px] font-body tracking-[0.3em] uppercase text-center text-primary-foreground/40 mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {pressMentions.map((press) => (
              <span
                key={press}
                className="font-heading text-lg lg:text-xl text-primary-foreground/30 hover:text-secondary transition-colors duration-300 cursor-pointer"
              >
                {press}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
