import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Harsha Gehaney crafted the most exquisite lehenga for my wedding. Every detail was perfection — from the intricate embroidery to the impeccable fit. I felt like royalty.",
    author: "Priya Sharma",
    location: "Mumbai",
    occasion: "Bride, 2024",
  },
  {
    id: 2,
    quote: "The craftsmanship is unparalleled. I've purchased from many designers, but HG stands apart. Each piece tells a story of heritage and artistry.",
    author: "Meera Kapoor",
    location: "Delhi",
    occasion: "Mother of the Bride",
  },
  {
    id: 3,
    quote: "From consultation to delivery, the experience was seamless. The team understood my vision and created a truly bespoke piece that exceeded all expectations.",
    author: "Ananya Reddy",
    location: "Hyderabad",
    occasion: "Bride, 2023",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-luxury bg-primary text-primary-foreground overflow-hidden">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary mb-4">
            Love Letters
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            From Our <span className="font-heading italic text-secondary">Brides</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative ${index === 1 ? 'md:-mt-8' : ''}`}
            >
              {/* Card */}
              <div className="bg-navy-light/30 backdrop-blur-sm border border-primary-foreground/10 p-8 md:p-10 relative">
                {/* Quote Icon */}
                <Quote
                  size={40}
                  className="text-secondary/30 absolute top-6 right-6"
                />

                {/* Quote Text */}
                <blockquote className="font-body font-light text-base leading-relaxed text-primary-foreground/90 mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="w-12 h-px bg-secondary mb-4" />
                  <p className="font-heading text-lg text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs font-body tracking-[0.1em] uppercase text-secondary mt-1">
                    {testimonial.location}
                  </p>
                  <p className="text-xs font-body text-primary-foreground/60 mt-1">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r border-b border-secondary/30" />
            </div>
          ))}
        </div>

        {/* Press Mentions */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10">
          <p className="text-xs font-body tracking-[0.2em] uppercase text-center text-primary-foreground/50 mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Vogue India", "Harper's Bazaar", "Elle", "Femina", "GQ India"].map((press) => (
              <span
                key={press}
                className="font-heading text-lg md:text-xl text-primary-foreground/40 hover:text-secondary transition-colors duration-300 cursor-pointer"
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
