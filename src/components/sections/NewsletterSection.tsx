import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-peach-dark/40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <span className="text-secondary text-lg">✦</span>
            <div className="w-12 h-px bg-secondary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-light text-primary mb-4">
            Join the Inner Circle
          </h2>

          <p className="font-body font-light text-muted-foreground text-sm mb-10">
            Be the first to discover new collections, exclusive events, and curated offers.
          </p>

          {isSubmitted ? (
            <div className="bg-secondary/10 border border-secondary/30 px-8 py-6">
              <p className="font-heading text-lg text-primary">
                Welcome ✦
              </p>
              <p className="text-sm font-body text-muted-foreground mt-2">
                Expect elegance in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 bg-cream border border-border text-primary placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-primary text-primary-foreground text-[11px] font-body tracking-[0.15em] uppercase hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[10px] font-body text-muted-foreground/70 mt-6">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
