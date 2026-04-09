import { Link } from "react-router-dom";
import { type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Share2, Palette, Video, Star, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBlobs from "@/components/HeroBlobs";
import StatsSection from "@/components/StatsSection";
import { featuredServices } from "@/data/services";

const featuredIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "web-design": Globe,
  "search-engine-optimization": Search,
  "social-media-management": Share2,
  "graphic-designing": Palette,
  "video-editing": Video,
};

const featuredGradientMap: Record<string, string> = {
  "web-design": "from-brand-purple to-brand-pink",
  "search-engine-optimization": "from-brand-teal to-brand-purple",
  "social-media-management": "from-brand-pink to-brand-orange",
  "graphic-designing": "from-brand-orange to-brand-yellow",
  "video-editing": "from-brand-purple to-brand-teal",
};

const testimonials = [
  { name: "Raju", role: "CEO, TechStart", text: "PixorKraft transformed our online presence completely. Our leads increased by 300% in just 3 months!", rating: 5 },
  { name: "Ajay", role: "Founder, StyleHub", text: "The team's creativity and professionalism exceeded our expectations. Highly recommend their services!", rating: 5 },
  { name: "Priyanka", role: "Director, GreenBuild", text: "Their SEO strategy put us on the first page of Google. Game changer for our business.", rating: 5 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        <HeroBlobs />
        <div className="container relative z-10 pt-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 text-primary text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4" /> Digital Marketing Agency
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-bold text-foreground leading-[1.1] animate-fade-in-up">
              Grow Your Brand{" "}
              <span className="text-gradient-brand">Digitally</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              We craft powerful digital strategies that drive real results. From web design to SEO, social media to branding — we do it all.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 rounded-full">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-base px-8 rounded-full border-2 border-primary/30 hover:bg-primary/5">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              Our <span className="text-gradient-brand">Services</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              We offer a comprehensive suite of digital marketing services to help your business thrive online.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => {
              const Icon = featuredIconMap[service.slug] ?? Globe;
              const gradient = featuredGradientMap[service.slug] ?? "from-brand-purple to-brand-pink";
              return (
                <div
                  key={service.title}
                  className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 lg:py-32 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Your Trusted <span className="text-gradient-brand">Digital Partner</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PixorKraft is a full-service digital marketing agency dedicated to helping businesses grow their online presence. We combine creativity with data-driven strategies to deliver measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From startups to established brands, we've helped hundreds of businesses achieve their digital goals.
              </p>
              <Link to="/about">
                <Button variant="brand" size="lg" className="rounded-full">
                  Know More <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center border border-border/50">
                  <div className="text-center p-8">
                    <div className="text-7xl font-heading font-bold text-gradient-brand">5+</div>
                    <p className="text-muted-foreground mt-2 text-lg">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl bg-gradient-warm flex items-center justify-center shadow-glow animate-bounce-gentle">
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl font-heading font-bold">200+</div>
                  <p className="text-xs opacity-80">Projects</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl bg-gradient-cool flex items-center justify-center shadow-glow-purple animate-float">
                <div className="text-center text-primary-foreground">
                  <div className="text-2xl font-heading font-bold">150+</div>
                  <p className="text-xs opacity-80">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              What Our <span className="text-gradient-brand">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-yellow blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-teal blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
            Let's discuss how we can help you achieve your digital marketing goals. Get a free consultation today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-10 rounded-full">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-light" size="lg" className="text-base px-10 rounded-full">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
