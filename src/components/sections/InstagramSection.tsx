import { Instagram } from "lucide-react";
import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";
import pretImage from "@/assets/collection-pret.jpg";
import heroImage from "@/assets/hero-image.jpg";
import lookbookImage from "@/assets/lookbook-image.jpg";

const instagramPosts = [
  { id: 1, image: bridalImage },
  { id: 2, image: festiveImage },
  { id: 3, image: coutureImage },
  { id: 4, image: pretImage },
  { id: 5, image: heroImage },
  { id: 6, image: lookbookImage },
];

const InstagramSection = () => {
  return (
    <section className="py-16 lg:py-24">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center mb-12">
        <a
          href="https://instagram.com/harshagehaney"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[11px] font-body tracking-[0.3em] uppercase text-secondary hover:text-primary transition-colors"
        >
          <Instagram size={18} />
          @harshagehaney
        </a>
        <h2 className="font-display text-3xl md:text-4xl font-light text-primary mt-4">
          Follow Our Journey
        </h2>
      </div>

      {/* Instagram Grid - Full Width */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-2">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={post.image}
              alt="Instagram post"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <Instagram size={28} className="text-primary-foreground" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
