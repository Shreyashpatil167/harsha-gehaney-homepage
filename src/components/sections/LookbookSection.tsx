import lookbookImage from "@/assets/lookbook-image.jpg";

const LookbookSection = () => {
  return (
    <section id="lookbook" className="relative overflow-hidden">
      {/* Full-width Image */}
      <div className="relative h-[70vh] md:h-[90vh]">
        <img
          src={lookbookImage}
          alt="Harsha Gehaney Lookbook Campaign"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div className="max-w-lg">
              <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary mb-4">
                Autumn/Winter 2024
              </p>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-6 leading-tight">
                The Royal
                <span className="block font-heading italic">Chronicle</span>
              </h2>

              <div className="w-24 h-px bg-secondary mb-8" />

              <p className="text-base md:text-lg font-body font-light text-primary-foreground/90 mb-10 leading-relaxed">
                A journey through the opulent courts of Mughal India, 
                reimagined for the modern muse. Explore our latest campaign 
                shot in the historic palaces of Rajasthan.
              </p>

              <a
                href="#"
                className="btn-luxury bg-secondary text-secondary-foreground hover:bg-gold-light"
              >
                View Lookbook
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-l from-secondary/20 to-transparent" />
        
        {/* Side Text */}
        <div className="hidden lg:flex absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-primary-foreground/50">
            Lookbook • Campaign • Editorial
          </span>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
