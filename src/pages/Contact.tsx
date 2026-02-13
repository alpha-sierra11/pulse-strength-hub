import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Invalid phone number"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be under 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  const whatsappLink = `https://wa.me/911234567890?text=${encodeURIComponent("Hi, I'm interested in joining Pulse Fitness!")}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to start? Reach out and let's build your training plan.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="font-display text-3xl text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+91 XXXXX XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your fitness goals..."
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-display text-3xl text-foreground mb-4">
                    Contact Info
                  </h2>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="text-primary" size={20} /> +91 99281 00555
                  </a>
                  <a
                    href="mailto:info@pulsefitness.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="text-primary" size={20} />{" "}
                    info@pulsefitness.com
                  </a>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="text-primary" size={20} /> 117/4 yes bank
                    basement bhairav circle, Ratanada, Jodhpur, Rajasthan
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[hsl(142,70%,45%)] text-primary-foreground hover:bg-[hsl(142,70%,40%)] font-bold uppercase tracking-wider"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
                </a>
              </Button>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9!2d72.83!3d19.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzQ4LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pulse Fitness Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
