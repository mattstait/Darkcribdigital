import { useEffect } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const sites = [
  {
    title: "Matthew Tait — Author",
    url: "https://matthewtaitauthor.com/",
    display: "matthewtaitauthor.com",
    desc: "A literary home for horror fiction author Matthew Tait — bibliography, events, and the world behind the work.",
  },
  {
    title: "Davey Ribbon",
    url: "https://daveyribbon.com/",
    display: "daveyribbon.com",
    desc: "Launch page for a forthcoming novel.",
  },
  {
    title: "Deception Pass",
    url: "https://deceptionpassbook.com/",
    display: "deceptionpassbook.com",
    desc: "Dedicated book site for Deception Pass, winner of the 2020 Australian Shadows Award for Best Novel.",
  },
  {
    title: "Insect Kin",
    url: "https://insectkinbook.com/",
    display: "insectkinbook.com",
    desc: "Book site for Insect Kin — something is growing beneath Ashbrook Court.",
  },
];

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference bg-background/5 backdrop-blur-sm border-b border-border/10">
        <Link href="/" className="font-serif text-xl font-bold tracking-widest text-primary uppercase">
          Dark Crib Digital
        </Link>
        <Link href="/" className="flex items-center gap-2 font-mono text-sm uppercase hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to the Crib
        </Link>
      </nav>

      <main className="pt-32 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">Dark Crib Digital</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold uppercase mb-6">See Our Work</h1>
            <p className="font-mono text-muted-foreground uppercase tracking-widest text-sm">
              A selection of sites built for dark creatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sites.map((site, i) => (
              <motion.a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-card p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-serif font-bold uppercase group-hover:text-primary transition-colors">
                    {site.title}
                  </h2>
                  <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{site.desc}</p>
                <span className="font-mono text-xs text-primary/60 uppercase tracking-widest mt-auto group-hover:text-primary transition-colors">
                  {site.display} ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}