const stats = [
  { value: "200+", label: "Projects Completed", color: "from-brand-purple to-brand-pink" },
  { value: "150+", label: "Happy Clients", color: "from-brand-teal to-brand-purple" },
  { value: "5+", label: "Years Experience", color: "from-brand-pink to-brand-orange" },
  { value: "50+", label: "Team Members", color: "from-brand-orange to-brand-yellow" },
];

const StatsSection = () => (
  <section className="py-10 relative -mt-2">
    <div className="container">
      <div className="bg-card rounded-3xl shadow-card-hover border border-border/50 p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-4xl md:text-5xl font-heading font-bold text-gradient-brand`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
