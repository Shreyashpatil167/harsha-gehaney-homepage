import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import lookbookImage from "@/assets/lookbook-image.jpg";
import bridalImage from "@/assets/collection-bridal.jpg";

const slides = [
  {
    id: 1,
    image: heroImage,
    subtitle: "Autumn/Winter 2024",
    title: "The Royal",
    titleAccent: "Chronicle",
    cta: "Explore Collection",
    link: "#collections",
  },
  {
    id: 2,
    image: lookbookImage,
    subtitle: "Bridal Couture",
    title: "Dreams in",
    titleAccent: "Zardozi",
    cta: "View Bridal",
    link: "#bridal",
  },
  {
    id: 3,
    image: bridalImage,
    subtitle: "Festive Edit",
    title: "Celebrate",
    titleAccent: "Tradition",
    cta: "Shop Festive",
    link: "#collections",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <section className="relative h-[85vh] lg:h-[90vh] overflow-hidden bg-primary">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
            <div
              className={`max-w-2xl transition-all duration-700 delay-300 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-body tracking-[0.3em] uppercase text-secondary mb-4 md:mb-6">
                {slide.subtitle}
              </p>

              {/* Title */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] mb-6 md:mb-8">
                {slide.title}
                <span className="block font-heading italic text-secondary mt-2">
                  {slide.titleAccent}
                </span>
              </h1>

              {/* Decorative Line */}
              <div className="w-20 h-px bg-secondary mb-8" />

              {/* CTA */}
              <a
                href={slide.link}
                className="inline-flex items-center gap-4 text-sm font-body tracking-[0.2em] uppercase text-primary-foreground hover:text-secondary transition-colors duration-300 group"
              >
                <span>{slide.cta}</span>
                <span className="w-12 h-px bg-current transform group-hover:w-16 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-0.5 transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-secondary"
                : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Text */}
      <div className="hidden lg:flex absolute right-8 bottom-24 origin-bottom-right -rotate-90">
        <span className="text-[10px] font-body tracking-[0.3em] uppercase text-primary-foreground/50">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
