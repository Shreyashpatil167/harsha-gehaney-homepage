import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";

const products = [
  {
    id: 1,
    name: "Maharani Lehenga",
    category: "Bridal",
    price: "₹2,85,000",
    image: bridalImage,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Noor Anarkali",
    category: "Festive",
    price: "₹95,000",
    image: festiveImage,
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Zari Silk Saree",
    category: "Couture",
    price: "₹1,45,000",
    image: coutureImage,
    tag: null,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="bridal" className="section-luxury bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary mb-4">
              Curated Selection
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary">
              Featured Pieces
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-body tracking-[0.15em] uppercase text-primary hover:text-secondary transition-colors group"
          >
            View All
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <article
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6 hover-glow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2">
                    <span className="text-xs font-body tracking-[0.1em] uppercase">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="btn-luxury-gold-outline transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="font-heading text-xl text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-body font-light text-primary">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
