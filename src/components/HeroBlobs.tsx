const HeroBlobs = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] blob-shape bg-primary/10 animate-spin-slow" />
    <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] blob-shape bg-accent/10 animate-float" />
    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] blob-shape bg-secondary/10 animate-pulse-glow" />
    <div className="absolute top-20 left-1/3 w-[200px] h-[200px] rounded-full bg-brand-yellow/10 animate-bounce-gentle" />
  </div>
);

export default HeroBlobs;
