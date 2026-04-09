import { Link } from "react-router-dom";
import { type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Share2, Palette, Video, ChevronRight, Layers3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredServices, services, serviceCategories } from "@/data/services";

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

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-10 left-10 w-96 h-96 blob-shape bg-accent/10 animate-float" />
          <div className="absolute top-20 right-20 w-72 h-72 blob-shape bg-primary/10 animate-spin-slow" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Main Services We <span className="text-gradient-brand">Highlight</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We mainly focus on Web Design, Video Editing, Graphic Designing, Social Media Management, and SEO.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Main Services</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              Services We <span className="text-gradient-brand">Showcase</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => {
              const Icon = featuredIconMap[service.slug] ?? Layers3;
              const gradient = featuredGradientMap[service.slug] ?? "from-brand-purple to-brand-pink";
              return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`}>
                  <Button variant="brand" size="sm" className="rounded-full">
                    View Details <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* View All Services */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">More Services</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground">
              <span className="text-gradient-brand">All Services</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Related services are grouped below for easy browsing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div key={category} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <h3 className="text-lg font-heading font-bold text-card-foreground mb-4">{category}</h3>
                <div className="space-y-2">
                  {services
                    .filter((service) => service.category === category)
                    .map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <span>{service.title}</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-teal blur-3xl animate-pulse-glow" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">We tailor our services to fit your unique business needs. Let's talk!</p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base rounded-full">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
