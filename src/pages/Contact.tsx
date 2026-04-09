import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/mahenderlokini@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          _subject: "New enquiry from PixorKraft website",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      toast({ title: "Message sent successfully!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Message could not be sent",
        description: "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 blob-shape bg-primary/10 animate-spin-slow" />
          <div className="absolute bottom-0 left-20 w-64 h-64 blob-shape bg-accent/10 animate-float" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Let's <span className="text-gradient-brand">Talk</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 99999 99999" maxLength={20} className="h-12 rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..." maxLength={1000} rows={5} className="rounded-xl" />
                </div>
                <Button type="submit" variant="brand" size="lg" className="w-full text-base rounded-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {[
                  { href: "mailto:mahenderlokini@gmail.com", icon: Mail, label: "Email", value: "mahenderlokini@gmail.com", color: "from-brand-purple to-brand-pink" },
                  { href: "tel:+9182792334", icon: Phone, label: "Phone", value: "+91 9182792334", color: "from-brand-teal to-brand-purple" },
                  { href: undefined, icon: MapPin, label: "Location", value: "Bangalore", color: "from-brand-orange to-brand-yellow" },
                  { href: "https://wa.me/9182792334", icon: MessageCircle, label: "WhatsApp", value: "Chat with us directly", color: "from-brand-pink to-brand-orange" },
                ].map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href ? { href: item.href, ...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {};
                  return (
                    <Wrapper key={item.label} {...wrapperProps} className="flex items-start gap-4 group">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card mt-8 border border-border/50">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770594.759!2d73.7!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93!2sIndia!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
