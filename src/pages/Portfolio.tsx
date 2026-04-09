import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Web Design", "Branding", "Social Media", "Video"];

const projects = [
  { title: "TechStart Website Redesign", category: "Web Design", color: "from-brand-purple to-brand-pink" },
  { title: "StyleHub Brand Identity", category: "Branding", color: "from-brand-pink to-brand-orange" },
  { title: "GreenBuild Social Campaign", category: "Social Media", color: "from-brand-teal to-brand-purple" },
  { title: "FoodieApp Landing Page", category: "Web Design", color: "from-brand-orange to-brand-yellow" },
  { title: "AutoParts Promo Video", category: "Video", color: "from-brand-purple to-brand-teal" },
  { title: "HealthPlus Branding", category: "Branding", color: "from-brand-yellow to-brand-pink" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/3 w-80 h-80 blob-shape bg-primary/10 animate-float" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Our <span className="text-gradient-brand">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse through our portfolio of successful projects and see the results we've delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 lg:py-32">
        <div className="container">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.title} className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50">
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
                  <div className="text-primary-foreground text-center p-6 relative z-10">
                    <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                    <p className="text-sm opacity-80 mt-2">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
