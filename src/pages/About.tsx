import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is designed to deliver measurable outcomes for your business.", color: "from-brand-purple to-brand-pink" },
  { icon: Heart, title: "Client-First", desc: "Your success is our priority. We listen, understand, and deliver beyond expectations.", color: "from-brand-pink to-brand-orange" },
  { icon: Zap, title: "Innovation", desc: "We stay ahead of trends to give you cutting-edge digital marketing solutions.", color: "from-brand-teal to-brand-purple" },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team, ensuring seamless communication.", color: "from-brand-orange to-brand-yellow" },
  { icon: Award, title: "Excellence", desc: "Quality is non-negotiable. We deliver nothing less than the best.", color: "from-brand-purple to-brand-teal" },
  { icon: Eye, title: "Transparency", desc: "Clear reporting and honest communication at every step of the way.", color: "from-brand-yellow to-brand-pink" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 blob-shape bg-primary/10 animate-spin-slow" />
          <div className="absolute bottom-0 left-10 w-72 h-72 blob-shape bg-accent/10 animate-float" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              We Are <span className="text-gradient-brand">PixorKraft</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate team of digital marketers, designers, and developers helping businesses grow in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Building Digital Success Stories
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>PixorKraft was founded with a simple mission: to help businesses of all sizes harness the power of digital marketing.</p>
                <p>From humble beginnings, we've grown into a full-service digital agency serving clients across industries.</p>
                <p>What sets us apart is our commitment to understanding your business goals and crafting strategies that deliver real, measurable results.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "200+", label: "Projects Done", color: "from-brand-purple to-brand-pink" },
                { val: "150+", label: "Happy Clients", color: "from-brand-pink to-brand-orange" },
                { val: "5+", label: "Years Experience", color: "from-brand-teal to-brand-purple" },
                { val: "50+", label: "Team Members", color: "from-brand-orange to-brand-yellow" },
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-8 text-primary-foreground text-center hover:scale-105 transition-transform duration-300`}>
                  <div className="text-4xl font-heading font-bold">{s.val}</div>
                  <p className="text-sm mt-1 opacity-80">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-10 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To empower businesses with innovative digital marketing solutions that drive growth and create lasting customer relationships.</p>
            </div>
            <div className="bg-card rounded-3xl p-10 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-purple flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To become the most trusted digital marketing agency, recognized for creativity, innovation, and client success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
              What We <span className="text-gradient-brand">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 text-center border border-border/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <v.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-card-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-yellow blur-3xl animate-pulse-glow" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Ready to Work Together?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Let's discuss how PixorKraft can help your business grow digitally.</p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base rounded-full">
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
