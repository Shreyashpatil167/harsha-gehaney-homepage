import { Instagram } from "lucide-react";
import bridalImage from "@/assets/collection-bridal.jpg";
import festiveImage from "@/assets/collection-festive.jpg";
import coutureImage from "@/assets/collection-couture.jpg";
import pretImage from "@/assets/collection-pret.jpg";
import heroImage from "@/assets/hero-image.jpg";
import lookbookImage from "@/assets/lookbook-image.jpg";

const instagramPosts = [
  { id: 1, image: bridalImage, likes: "2.4k" },
  { id: 2, image: festiveImage, likes: "1.8k" },
  { id: 3, image: coutureImage, likes: "3.1k" },
  { id: 4, image: pretImage, likes: "2.9k" },
  { id: 5, image: heroImage, likes: "4.2k" },
  { id: 6, image: lookbookImage, likes: "5.6k" },
];

const InstagramSection = () => {
  return (
    <section className="section-luxury bg-background overflow-hidden">
      <div className="container-luxury mb-12">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="text-secondary" size={24} />
            <p className="text-xs font-body tracking-[0.3em] uppercase text-secondary">
              @harshagehaney
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-light text-primary mb-4">
            Follow Our Journey
          </h2>
          <p className="font-body font-light text-muted-foreground max-w-md mx-auto">
            Join our community of style connoisseurs for exclusive previews, 
            behind-the-scenes glimpses, and inspiration.
          </p>
        </div>
      </div>

      {/* Instagram Grid - Full Width */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
              <div className="text-center text-primary-foreground transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Instagram size={28} className="mx-auto mb-2" />
                <span className="text-sm font-body">♥ {post.likes}</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Follow Button */}
      <div className="container-luxury mt-12 text-center">
        <a
          href="#"
          className="btn-luxury-outline inline-flex items-center gap-3"
        >
          <Instagram size={18} />
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
