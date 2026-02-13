import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Trophy, Users, UserCheck, Flame, Target, Dumbbell } from "lucide-react";

const programs = [
  {
    icon: Trophy,
    title: "HYROX Preparation",
    subtitle: "Competition-Ready Training",
    desc: "Our HYROX preparation program is built for athletes who want to compete — and win. We simulate race conditions, build sport-specific endurance, and develop the mental toughness required to dominate on race day. Structured periodization, progressive overload, and expert coaching included.",
    benefits: ["Race simulation workouts", "Sport-specific endurance", "Mental toughness training", "Periodized programming"],
  },
  {
    icon: Users,
    title: "HYROX Group Batches",
    subtitle: "Train Together, Win Together",
    desc: "Join our high-energy HYROX group batches where you'll train alongside like-minded athletes. These sessions combine running, functional exercises, and team accountability to prepare you for competition while building an unbreakable training community.",
    benefits: ["Community-driven training", "Structured group sessions", "Competition prep", "Accountability partners"],
  },
  {
    icon: UserCheck,
    title: "Personal Training",
    subtitle: "Your Goals. Your Plan. Your Results.",
    desc: "One-on-one coaching designed around YOUR body, YOUR goals, and YOUR schedule. Our certified coaches create fully customized training plans with nutrition guidance, progress tracking, and constant adaptation to keep you moving forward.",
    benefits: ["Custom training plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
  },
  {
    icon: Flame,
    title: "CrossFit",
    subtitle: "Forge Elite Fitness",
    desc: "Constantly varied, high-intensity functional movements. Our CrossFit program builds well-rounded athletes who are strong, fast, and conditioned. Every session is coached, scaled to your level, and designed to push your limits safely.",
    benefits: ["Scalable workouts", "Expert coaching", "Community atmosphere", "All fitness levels"],
  },
  {
    icon: Target,
    title: "Functional Training",
    subtitle: "Train for Real Life",
    desc: "Move better. Feel better. Perform better. Our functional training program focuses on movement patterns that translate to everyday life and athletic performance. Build a body that works as good as it looks.",
    benefits: ["Movement quality focus", "Injury prevention", "Athletic performance", "Everyday strength"],
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    subtitle: "Pure. Raw. Strength.",
    desc: "Built on the fundamentals — squats, deadlifts, presses, and pulls. Our strength training program uses progressive overload and proven methodologies to build maximum strength. No gimmicks, just results.",
    benefits: ["Progressive overload", "Compound lifts", "Proven methodology", "Strength-focused"],
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            Our <span className="text-primary">Programs</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Every program is designed with one goal: results. Choose the path that matches your ambition.
          </p>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((p, i) => (
        <section key={p.title} className={`py-20 px-4 ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto max-w-5xl"
          >
            <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}>
              {/* Icon block */}
              <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-card border border-border flex items-center justify-center">
                <p.icon className="text-primary" size={56} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">{p.subtitle}</p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {p.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {b}
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Not Sure Which Program <span className="text-accent">Fits You?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free consultation and let our coaches guide you to the right path.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold uppercase tracking-wider px-10">
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
