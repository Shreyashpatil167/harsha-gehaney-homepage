import lookbookImage from "@/assets/lookbook-image.jpg";

const LookbookSection = () => {
  return (
    <section id="lookbook" className="relative">
      {/* Full-width Image */}
      <div className="relative h-[80vh] lg:h-screen">
        <img
          src={lookbookImage}
          alt="Harsha Gehaney Lookbook Campaign"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-xl">
              <p className="text-[11px] font-body tracking-[0.3em] uppercase text-secondary mb-6">
                Autumn/Winter 2024
              </p>

              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-[0.95] mb-8">
                The Royal
                <span className="block font-heading italic text-secondary">
                  Chronicle
                </span>
              </h2>

              <div className="w-16 h-px bg-secondary mb-8" />

              <p className="font-body font-light text-primary-foreground/80 text-sm lg:text-base leading-relaxed mb-10 max-w-md">
                A journey through the opulent courts of Mughal India, reimagined 
                for the modern muse. Shot in the historic palaces of Rajasthan.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-4 text-[11px] font-body tracking-[0.2em] uppercase text-primary-foreground hover:text-secondary transition-colors group"
              >
                <span>View Lookbook</span>
                <span className="w-8 h-px bg-current transform group-hover:w-12 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Play Button (decorative) */}
        <button className="absolute top-1/2 left-1/2 lg:left-auto lg:right-1/4 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-20 h-20 border border-primary-foreground/40 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 group">
          <svg
            className="w-6 h-6 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Decorative Side Text */}
        <div className="hidden lg:flex absolute right-8 bottom-16 origin-bottom-right -rotate-90">
          <span className="text-[10px] font-body tracking-[0.3em] uppercase text-primary-foreground/40">
            Campaign 2024 — Jaipur, Rajasthan
          </span>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
