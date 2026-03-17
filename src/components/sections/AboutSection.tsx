import logo from "@/assets/logo.jpg";
import coutureImage from "@/assets/collection-couture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={coutureImage}
                  alt="Harsha Gehaney Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Logo Card */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-32 lg:w-40 h-32 lg:h-40 bg-cream shadow-xl flex items-center justify-center p-4">
                <img
                  src={logo}
                  alt="HG Monogram"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-secondary/40" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-[11px] font-body tracking-[0.3em] uppercase text-secondary mb-4">
              The Atelier
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-8 leading-[1.1]">
              A Legacy of
              <span className="block font-heading italic text-secondary">
                Royal Craft
              </span>
            </h2>

            <div className="w-16 h-px bg-secondary mb-8" />

            <div className="space-y-5 text-muted-foreground font-body font-light leading-relaxed text-sm lg:text-base">
              <p>
                Harsha Gehaney embodies the rich textile heritage of India, 
                weaving centuries-old craftsmanship with contemporary silhouettes. 
                Each creation is a testament to Mughal-era artistry, reimagined 
                for the modern woman.
              </p>
              <p>
                From hand-embroidered zardozi to delicate thread work, every piece 
                undergoes hundreds of hours of meticulous crafting in our ateliers, 
                working alongside India's finest artisans.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-3 gap-8">
              <div>
                <p className="font-heading text-3xl lg:text-4xl text-secondary">20+</p>
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Years
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl lg:text-4xl text-secondary">500+</p>
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Artisans
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl lg:text-4xl text-secondary">10K+</p>
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Brides
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-[11px] font-body tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors group"
              >
                <span>Book an Appointment</span>
                <span className="w-8 h-px bg-current transform group-hover:w-12 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
