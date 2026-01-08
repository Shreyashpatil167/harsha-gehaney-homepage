import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";
import pretImage from "@/assets/collection-pret.jpg";

const collections = [
  {
    id: 1,
    name: "Bridal",
    description: "Exquisite wedding ensembles for your special day",
    image: bridalImage,
  },
  {
    id: 2,
    name: "Festive",
    description: "Celebrate traditions in resplendent elegance",
    image: festiveImage,
  },
  {
    id: 3,
    name: "Couture",
    description: "Bespoke creations for the discerning connoisseur",
    image: coutureImage,
  },
  {
    id: 4,
    name: "Prêt",
    description: "Contemporary luxury for everyday occasions",
    image: pretImage,
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="section-luxury bg-peach-dark/20">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary mb-4">
            Explore Our World
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6">
            Signature Collections
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <a
              key={collection.id}
              href="#"
              className="group relative overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Gold Line */}
                <div className="w-12 h-px bg-secondary mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <h3 className="font-heading text-2xl text-primary-foreground mb-2">
                  {collection.name}
                </h3>
                <p className="text-sm font-body font-light text-primary-foreground/80 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {collection.description}
                </p>
                
                <span className="text-xs font-body tracking-[0.2em] uppercase text-secondary">
                  Discover →
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-secondary/20 border-l-[40px] border-l-transparent group-hover:border-t-secondary/40 transition-colors duration-500" />
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a href="#" className="btn-luxury-outline">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
