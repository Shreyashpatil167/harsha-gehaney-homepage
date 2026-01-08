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
    <section className="py-16 md:py-24 bg-peach-dark/30">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-secondary" />
            <span className="text-secondary">✦</span>
            <div className="w-16 h-px bg-secondary" />
          </div>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-4">
            Join Our Inner Circle
          </h2>

          <p className="font-body font-light text-muted-foreground mb-8">
            Be the first to discover new collections, exclusive events, 
            and receive special offers curated just for you.
          </p>

          {isSubmitted ? (
            <div className="bg-secondary/10 border border-secondary/30 px-8 py-6">
              <p className="font-heading text-lg text-primary">
                Welcome to the family ✦
              </p>
              <p className="text-sm font-body text-muted-foreground mt-2">
                Thank you for subscribing. Expect elegance in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-background border border-border text-primary placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="btn-luxury-gold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs font-body text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
