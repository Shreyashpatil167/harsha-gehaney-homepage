import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-luxury overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 54c-13.2 0-24-10.8-24-24S16.8 6 30 6s24 10.8 24 24-10.8 24-24 24z' fill='%231E2F5A' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-32 pb-20">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
              {/* Eyebrow */}
              <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary animate-fade-up opacity-0 stagger-1">
                New Collection 2024
              </p>

              {/* Main Heading */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-primary animate-fade-up opacity-0 stagger-2">
                Where Heritage
                <span className="block font-heading italic text-secondary">Meets Elegance</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg font-body font-light leading-relaxed text-muted-foreground max-w-md mx-auto lg:mx-0 animate-fade-up opacity-0 stagger-3">
                Discover exquisite bridal wear and festive couture, where each 
                thread weaves stories of timeless Indian artistry and modern sophistication.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 stagger-4">
                <a
                  href="#collections"
                  className="btn-luxury-primary"
                >
                  Explore Collection
                </a>
                <a
                  href="#about"
                  className="btn-luxury-outline"
                >
                  Our Story
                </a>
              </div>

              {/* Gold Divider */}
              <div className="gold-divider lg:mx-0 mt-12" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-secondary/30 hidden lg:block" />
              
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src={heroImage}
                  alt="Luxury bridal couture by Harsha Gehaney"
                  className="w-full h-auto object-cover animate-fade-in"
                  style={{ animationDelay: "0.5s", opacity: 0 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-primary text-primary-foreground px-6 py-4 shadow-lg">
                <p className="text-xs font-body tracking-[0.15em] uppercase">Handcrafted</p>
                <p className="font-heading text-lg">With Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
