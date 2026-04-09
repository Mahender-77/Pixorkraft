import { Calendar, User, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { title: "10 SEO Strategies That Actually Work in 2026", excerpt: "Discover the latest SEO techniques that can boost your website's ranking.", date: "April 5, 2026", author: "PixorKraft Team", category: "SEO", color: "from-brand-teal to-brand-purple" },
  { title: "Why Your Business Needs Social Media Marketing", excerpt: "Learn how social media marketing can transform your brand's online presence.", date: "April 1, 2026", author: "PixorKraft Team", category: "Social Media", color: "from-brand-pink to-brand-orange" },
  { title: "The Complete Guide to Web Design in 2026", excerpt: "Everything you need to know about modern web design trends and best practices.", date: "March 28, 2026", author: "PixorKraft Team", category: "Web Design", color: "from-brand-purple to-brand-pink" },
  { title: "Content Marketing: A Beginner's Guide", excerpt: "How to create a content marketing strategy that drives traffic and builds trust.", date: "March 20, 2026", author: "PixorKraft Team", category: "Content", color: "from-brand-orange to-brand-yellow" },
  { title: "Graphic Design Trends to Watch This Year", excerpt: "Stay ahead of the curve with these emerging graphic design trends.", date: "March 15, 2026", author: "PixorKraft Team", category: "Design", color: "from-brand-purple to-brand-teal" },
  { title: "How Video Marketing Boosts Conversions", excerpt: "Discover why video content is king and how it improves conversion rates.", date: "March 10, 2026", author: "PixorKraft Team", category: "Video", color: "from-brand-yellow to-brand-pink" },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-20 w-80 h-80 blob-shape bg-accent/10 animate-float" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Blog</p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Insights & <span className="text-gradient-brand">Ideas</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest digital marketing trends, tips, and strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50">
                <div className={`aspect-video bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="bg-background/20 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
