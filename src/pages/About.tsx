import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Shield, Award, Zap, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Discipline First", desc: "We build habits that last. Every session, every rep, every day — consistency is the foundation of everything we do." },
  { icon: Award, title: "Expert Coaching", desc: "Our coaches are certified professionals with competition experience. They don't just instruct — they lead by example." },
  { icon: Zap, title: "Structured Programming", desc: "No random workouts. Every program follows proven periodization principles designed to deliver measurable results." },
  { icon: Heart, title: "Community Driven", desc: "You're not just joining a gym. You're joining a tribe of athletes who push each other to be better every single day." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            About <span className="text-primary">Pulse Fitness</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Built by athletes, for athletes. We exist to create the strongest, most resilient version of you.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 text-center">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Pulse Fitness was founded on one principle: <span className="text-foreground font-semibold">training should be intentional.</span> We reject the idea of aimless workouts and "just showing up." Every session at Pulse is structured, coached, and designed to move you closer to your goals. We combine sports science, proven methodologies, and a relentless coaching standard to deliver results — not hype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 text-center">
            Why Choose <span className="text-accent">Pulse?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center">
                  <v.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Our Coaching <span className="text-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every coach at Pulse has been through the fire themselves. They compete, they train, they live the lifestyle. That's why they understand what it takes — and they know how to get you there. From beginners to elite athletes, our coaching adapts to YOU, not the other way around.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider">
              <Link to="/contact">Meet Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Your Transformation <span className="text-accent">Starts Now</span>
          </h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold uppercase tracking-wider px-10">
            <Link to="/contact">Join Pulse Fitness</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
