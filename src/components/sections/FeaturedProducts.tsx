import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";
import pretImage from "@/assets/collection-pret.jpg";
import heroImage from "@/assets/hero-image.jpg";
import lookbookImage from "@/assets/lookbook-image.jpg";

const products = [
  {
    id: 1,
    name: "Maharani Bridal Lehenga",
    price: "₹2,85,000",
    image: bridalImage,
    hoverImage: lookbookImage,
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Noor Festive Anarkali",
    price: "₹95,000",
    image: festiveImage,
    hoverImage: heroImage,
    tag: "New",
  },
  {
    id: 3,
    name: "Royal Zari Silk Saree",
    price: "₹1,45,000",
    image: coutureImage,
    hoverImage: bridalImage,
    tag: null,
  },
  {
    id: 4,
    name: "Contemporary Kurta Set",
    price: "₹48,000",
    image: pretImage,
    hoverImage: festiveImage,
    tag: null,
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="new" className="py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <p className="text-[11px] font-body tracking-[0.3em] uppercase text-secondary mb-4">
              Curated for You
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-primary">
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="text-[11px] font-body tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors group inline-flex items-center gap-3"
          >
            View All
            <span className="w-8 h-px bg-current transform group-hover:w-12 transition-all duration-300" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-muted">
                {/* Main Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1.5">
                    <span className="text-[9px] font-body tracking-[0.1em] uppercase font-medium">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button
                    className="w-9 h-9 bg-cream/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={16} />
                  </button>
                  <button
                    className="w-9 h-9 bg-cream/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label="Quick add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>

                {/* Add to Cart Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm py-3 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-foreground">
                    Quick Add
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-body text-sm text-primary mb-1.5 group-hover:text-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground">
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
