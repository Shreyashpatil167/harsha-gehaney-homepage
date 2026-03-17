import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";
import pretImage from "@/assets/collection-pret.jpg";

const collections = [
  {
    id: 1,
    name: "Bridal",
    subtitle: "Couture",
    image: bridalImage,
    link: "#bridal",
  },
  {
    id: 2,
    name: "Festive",
    subtitle: "Wear",
    image: festiveImage,
    link: "#festive",
  },
  {
    id: 3,
    name: "Couture",
    subtitle: "Bespoke",
    image: coutureImage,
    link: "#couture",
  },
  {
    id: 4,
    name: "Prêt",
    subtitle: "à Porter",
    image: pretImage,
    link: "#pret",
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[11px] font-body tracking-[0.3em] uppercase text-secondary mb-4">
            Shop By Category
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary">
            Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={collection.link}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-body tracking-[0.2em] uppercase text-secondary mb-1">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl text-primary-foreground">
                    {collection.name}
                  </h3>
                  
                  {/* Explore Link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-body tracking-[0.2em] uppercase text-primary-foreground flex items-center gap-2">
                      Explore
                      <span className="w-6 h-px bg-secondary" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
