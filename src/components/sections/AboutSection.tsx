import logo from "@/assets/logo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-luxury bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-peach-dark/30 to-transparent" />
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Logo Side */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative Circle */}
              <div className="absolute inset-0 border border-secondary/20 rounded-full" />
              <div className="absolute inset-4 border border-secondary/10 rounded-full" />
              
              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center p-16">
                <img
                  src={logo}
                  alt="Harsha Gehaney Monogram"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Gold Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full" />
            </div>
          </div>

          {/* Content Side */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary mb-4">
              The Designer
            </p>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-8 leading-tight">
              A Legacy of
              <span className="block font-heading italic text-secondary">Royal Craftsmanship</span>
            </h2>

            <div className="gold-divider lg:mx-0 mb-8" />

            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                Founded with a vision to celebrate the rich textile heritage of India, 
                Harsha Gehaney blends centuries-old craftsmanship with contemporary silhouettes. 
                Each creation is a testament to the Mughal-era artistry that has inspired 
                generations of Indian royalty.
              </p>
              <p>
                From hand-embroidered zardozi work to delicate thread embroidery, 
                every piece undergoes hundreds of hours of meticulous craftsmanship. 
                Our ateliers work with the finest artisans, preserving traditions while 
                embracing the modern woman's desire for elegance and comfort.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="font-heading text-4xl text-secondary">20+</p>
                <p className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Years of Excellence
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl text-secondary">500+</p>
                <p className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Artisan Partners
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl text-secondary">10K+</p>
                <p className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Brides Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
