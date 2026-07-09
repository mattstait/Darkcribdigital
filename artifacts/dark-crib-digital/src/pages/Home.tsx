import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Skull, Flame, Hexagon, Zap, ArrowRight, Music, PenTool, Radio, Check } from "lucide-react";
import heroImg from "@/assets/hero.png";
import studioImg from "@/assets/studio.png";
import craftImg from "@/assets/craft.png";
import portfolioImg from "@/assets/portfolio.png";
import ritualImg from "@/assets/ritual.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-hidden selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference bg-background/5 backdrop-blur-sm border-b border-border/10">
        <div className="font-serif text-xl font-bold tracking-widest text-primary uppercase">
          Dark Crib Digital
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#problem" className="hover:text-primary transition-colors uppercase">The Curse</a>
          <a href="#services" className="hover:text-primary transition-colors uppercase">Our Craft</a>
          <a href="#portfolio" className="hover:text-primary transition-colors uppercase">The Archives</a>
          <a href="#process" className="hover:text-primary transition-colors uppercase">The Ritual</a>
          <a href="#pricing" className="hover:text-primary transition-colors uppercase">Tribute</a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: y1 }} className="h-[120%] w-full">
            <img 
              src={heroImg} 
              alt="Condemned Cinema" 
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-black leading-none mb-6 drop-shadow-2xl">
              <span className="block text-primary mix-blend-screen filter drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">RESURRECT</span>
              <span className="block text-foreground">YOUR DIGITAL PRESENCE</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-2xl font-mono text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Web design for horror creatives, heavy metal bands, and dark illustrators who refuse to die in corporate templates.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider h-14 px-8 rounded-none border border-primary font-bold shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300" data-testid="button-hero-cta">
              Enter the Void
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-border/50 font-mono uppercase tracking-wider h-14 px-8 rounded-none bg-transparent" data-testid="button-hero-secondary">
              View Our Craft
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em]">Descend</span>
          <ChevronDown className="w-5 h-5 text-primary opacity-50" />
        </motion.div>
      </section>

      {/* 2. The Problem / Corporate Templates */}
      <section id="problem" className="py-32 px-6 bg-background relative z-20 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Corporate templates are a <span className="text-accent italic">death sentence.</span>
              </h2>
              <p className="font-mono text-muted-foreground mb-6 leading-relaxed">
                You spend months crafting nightmares, designing grotesque creatures, and writing stories that bleed. But your website looks like a dentist's office.
              </p>
              <p className="font-mono text-muted-foreground leading-relaxed">
                Standard web agencies don't understand the dark arts. They sanitize your vision. We amplify the shadows.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square border border-border p-4 bg-card/50"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />
              <img src={studioImg} alt="Dark Studio" className="w-full h-full object-cover filter grayscale contrast-150 mix-blend-lighten opacity-80" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="py-32 px-6 bg-card relative z-20 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-black uppercase tracking-widest text-secondary drop-shadow-[0_0_10px_rgba(75,0,130,0.5)] mb-4">Our Craft</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Skull className="w-10 h-10 text-primary" />,
                title: "Cinematic Web Design",
                desc: "Custom-built, atmospheric experiences that grab your audience by the throat. No sterile layouts."
              },
              {
                icon: <Flame className="w-10 h-10 text-accent" />,
                title: "E-Commerce from Hell",
                desc: "Sell your merch, books, and art prints without sacrificing your aesthetic to boring cart templates."
              },
              {
                icon: <Hexagon className="w-10 h-10 text-secondary" />,
                title: "Atmospheric Branding",
                desc: "Logos and visual identities forged in darkness. Professional, sharp, and unmistakably yours."
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                className="border border-border/50 p-8 hover:bg-background transition-colors duration-500 group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                data-testid={`card-service-${i}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">{s.title}</h3>
                <p className="font-mono text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio / Showcase */}
      <section id="portfolio" className="py-32 px-6 relative z-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase mb-4">The Archives</h2>
              <p className="font-mono text-muted-foreground max-w-xl">
                A selection of digital manifestations we've brought into this world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase rounded-none rounded-tl-xl rounded-br-xl h-12 px-8" data-testid="button-view-all-work">
                View All Work
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="relative w-full aspect-video border border-border bg-card/30 p-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={portfolioImg} alt="Portfolio Showcase" className="w-full h-full object-cover filter contrast-125 saturate-50 hover:saturate-100 hover:contrast-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase drop-shadow-lg">Necromantic Arts</h3>
                <p className="font-mono text-primary mt-2 uppercase tracking-widest text-sm drop-shadow-md">E-Commerce & Branding</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Process / The Ritual */}
      <section id="process" className="py-32 px-6 bg-card relative z-20 border-y border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-1/2 space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 uppercase">The Ritual</h2>
              <p className="font-mono text-muted-foreground">How we summon your site from the depths.</p>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {[
                { step: "I", title: "The Seance", desc: "We sit in the dark and discuss your vision, your audience, and what makes your blood pump." },
                { step: "II", title: "Incantation", desc: "Design mockups. Typography selection. We establish the mood and visual hierarchy." },
                { step: "III", title: "Flesh & Bone", desc: "Development. We build the architecture, wire the interactions, and breathe life into the code." },
                { step: "IV", title: "Resurrection", desc: "Launch. Your new digital presence is unleashed upon the mortal plane." }
              ].map((p, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(57,255,20,0.2)] text-primary font-serif font-bold">
                    {p.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border border-border/50 bg-background/50 backdrop-blur hover:border-primary/50 transition-colors">
                    <h4 className="font-serif text-xl font-bold uppercase mb-2 text-foreground">{p.title}</h4>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square border border-border p-2 bg-background">
              <img src={ritualImg} alt="Coding Ritual" className="w-full h-full object-cover filter contrast-125 saturate-150 opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Target Audience */}
      <section id="audience" className="py-32 px-6 relative z-20 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] border-l-4 border-accent pl-6">
              <img src={craftImg} alt="Dark Art" className="w-full h-full object-cover filter contrast-125 saturate-150 opacity-90" />
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 uppercase">For the Damned</h2>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: <PenTool />, title: "Horror Authors", desc: "Showcase your bibliography with terrifying elegance." },
                { icon: <Zap />, title: "Creature Designers", desc: "Let your horrific creations take center stage." },
                { icon: <Music />, title: "Heavy Metal Bands", desc: "Tour dates, merch, and soundscapes in one brutal hub." },
                { icon: <Radio />, title: "Paranormal Podcasters", desc: "Engage your listeners with a cinematic audio experience." }
              ].map((a, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    {a.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold uppercase mb-2 group-hover:text-primary transition-colors">{a.title}</h4>
                    <p className="font-mono text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Pricing / Offerings */}
      <section id="pricing" className="py-32 px-6 bg-card relative z-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase mb-4">Tribute</h2>
            <p className="font-mono text-muted-foreground">Professional craft. Transparent pricing. No blood oaths required.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Package 1 */}
            <motion.div 
              className="border border-border bg-background p-8 flex flex-col hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold uppercase text-foreground mb-2">The Apparition</h3>
              <p className="font-mono text-muted-foreground text-sm mb-6">A focused, single-page presence to establish your domain.</p>
              <div className="text-4xl font-mono text-primary font-bold mb-8">$1,500</div>
              
              <ul className="space-y-4 font-mono text-sm text-foreground/80 mb-8 flex-grow">
                {['Single cinematic landing page', 'Custom scroll animations', 'Basic contact form', 'Mobile responsive', '1 round of revisions'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full border-border font-mono uppercase rounded-none hover:bg-primary/10 hover:text-primary transition-colors" data-testid="button-pricing-tier-1">
                Select Tribute
              </Button>
            </motion.div>

            {/* Package 2 */}
            <motion.div 
              className="border border-primary bg-primary/5 p-8 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 bg-primary text-black font-mono text-xs font-bold uppercase px-3 py-1">Recommended</div>
              <h3 className="text-2xl font-serif font-bold uppercase text-primary mb-2">The Leviathan</h3>
              <p className="font-mono text-muted-foreground text-sm mb-6">A full digital ecosystem with e-commerce capabilities.</p>
              <div className="text-4xl font-mono text-primary font-bold mb-8">$4,500</div>
              
              <ul className="space-y-4 font-mono text-sm text-foreground/80 mb-8 flex-grow">
                {['Up to 8 custom pages', 'E-commerce integration (Shopify/Stripe)', 'Advanced WebGL/Canvas effects', 'CMS for blog/news', 'Newsletter integration', '3 rounds of revisions'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono font-bold uppercase rounded-none shadow-[0_0_15px_rgba(57,255,20,0.2)]" data-testid="button-pricing-tier-2">
                Select Tribute
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section id="contact" className="py-40 px-6 bg-card relative z-20 border-t border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Skull className="w-16 h-16 mx-auto text-primary mb-8 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-serif font-black mb-6 uppercase">Ready to Bleed?</h2>
            <p className="font-mono text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stop hiding your dark craft behind bright, generic websites. Let's build a digital sanctuary worthy of your nightmares.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono uppercase tracking-wider h-16 px-12 text-lg rounded-none border border-accent shadow-[0_0_20px_rgba(138,3,3,0.3)] hover:shadow-[0_0_40px_rgba(138,3,3,0.6)] transition-all duration-300" data-testid="button-final-cta">
              Summon Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 bg-background text-center relative z-20">
        <div className="font-serif text-2xl font-bold tracking-widest text-primary/50 uppercase mb-4">
          Dark Crib Digital
        </div>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Dark Crib Digital. Built in Hell.
        </p>
      </footer>
    </div>
  );
}
