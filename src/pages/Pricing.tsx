import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹3,999",
    period: "/month",
    features: ["Access to gym floor", "Group training sessions", "Locker access", "Basic fitness assessment"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹6,999",
    period: "/month",
    features: ["Everything in Starter", "CrossFit & HYROX classes", "Nutrition consultation", "Progress tracking", "Priority scheduling"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹11,999",
    period: "/month",
    features: ["Everything in Pro", "Personal training sessions", "Custom meal plans", "Recovery & mobility sessions", "Competition prep", "24/7 coach access"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            Membership <span className="text-primary">Plans</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Invest in yourself. Choose the plan that matches your ambition.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className={`h-full flex flex-col ${plan.highlighted ? "border-accent border-2 relative" : "bg-card border-border"}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                      Best Value
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="font-display text-3xl text-foreground">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="font-display text-5xl text-primary">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1 space-y-3 mb-6">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="text-primary flex-shrink-0" size={16} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className={`w-full font-bold uppercase tracking-wider ${
                        plan.highlighted
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Not Sure? <span className="text-accent">Try Us Free.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free trial session and experience Pulse Fitness firsthand.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold uppercase tracking-wider px-10">
            <Link to="/contact">Book a Free Trial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
