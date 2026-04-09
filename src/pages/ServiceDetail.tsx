import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-36 pb-24">
          <div className="container text-center max-w-2xl">
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Service not found</h1>
            <p className="text-muted-foreground mb-8">
              The service details you are looking for are not available.
            </p>
            <Link to="/services">
              <Button variant="brand" className="rounded-full">
                Back to Services
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-36 pb-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 blob-shape bg-primary/10 animate-spin-slow" />
          <div className="absolute bottom-0 left-10 w-72 h-72 blob-shape bg-accent/10 animate-float" />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{service.category}</p>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground">{service.longDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card border border-border/50">
            <h2 className="text-2xl font-heading font-bold text-card-foreground mb-6">What you get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="rounded-full">
                  Enquire Now <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
