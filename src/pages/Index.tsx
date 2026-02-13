import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Dumbbell, Users, UserCheck, Flame, Target, Trophy } from "lucide-react";

const programs = [
  { icon: Trophy, title: "HYROX Preparation", desc: "Competition-ready training for HYROX races. Build endurance, strength, and mental grit.", link: "/programs" },
  { icon: Users, title: "Group Training", desc: "High-energy group sessions that push your limits. Train together, grow together.", link: "/programs" },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one coaching tailored to your goals. Maximum results, zero guesswork.", link: "/programs" },
  { icon: Flame, title: "CrossFit", desc: "Functional movements at high intensity. Build power, speed, and conditioning.", link: "/programs" },
  { icon: Target, title: "Functional Training", desc: "Train your body the way it's meant to move. Real strength for real life.", link: "/programs" },
  { icon: Dumbbell, title: "Strength Training", desc: "Progressive overload. Compound lifts. Pure strength development.", link: "/programs" },
];

const testimonials = [
  { name: "Arjun M.", quote: "Pulse Fitness transformed my approach to training. The coaches here are world-class.", role: "HYROX Athlete" },
  { name: "Priya S.", quote: "I've never felt stronger or more confident. The community here is unmatched.", role: "Member since 2023" },
  { name: "Rahul K.", quote: "From beginner to competing in CrossFit events — Pulse made it possible.", role: "CrossFit Competitor" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(24_100%_50%_/_0.1)_0%,_transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-6">
            Train Hard.<br />
            <span className="text-primary">Train Smart.</span><br />
            Train at <span className="text-accent">Pulse.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Where discipline meets performance. Join Mumbai's most results-driven fitness community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold uppercase tracking-wider px-8">
              <Link to="/contact">Join Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg font-bold uppercase tracking-wider px-8">
              <Link to="/contact">Book a Trial</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            More Than a Gym. A <span className="text-primary">System.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Pulse Fitness, we don't believe in shortcuts. We believe in structured training, expert coaching, and relentless consistency. Whether you're preparing for HYROX, building raw strength, or transforming your body — we have the programs, the coaches, and the environment to get you there.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">
            Our <span className="text-primary">Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <p.icon className="text-primary mb-4" size={40} />
                    <h3 className="font-display text-2xl text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">{p.desc}</p>
                    <Link to={p.link} className="text-primary text-sm font-semibold uppercase tracking-wider hover:text-primary/80 transition-colors">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">
            What Our <span className="text-primary">Athletes</span> Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <p className="text-foreground text-lg italic mb-4">"{t.quote}"</p>
                    <p className="text-primary font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Placeholder */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Follow Us on <span className="text-primary">Instagram</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">@pulsefitness</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Ready to <span className="text-accent">Transform?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Stop waiting. Start training. Your strongest self is one decision away.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold uppercase tracking-wider px-10">
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
