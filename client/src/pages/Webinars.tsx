import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Video, Calendar, Clock, ArrowRight, Play
} from "lucide-react";

const upcomingWebinars = [
  {
    title: "Getting Started with MD Charts EHR",
    description: "An introduction to the MD Charts platform and its core features for new users.",
    date: "Regular Sessions Available",
    duration: "Brief session"
  },
  {
    title: "Maximizing Your Revenue Cycle",
    description: "Best practices for billing, claims management, and reducing denials.",
    date: "Regular Sessions",
    duration: "Standard session"
  },
  {
    title: "Specialty-Specific Workflows",
    description: "Deep dive into specialty templates and customization options.",
    date: "Scheduled Sessions",
    duration: "Standard session"
  }
];

const onDemandWebinars = [
  {
    title: "Patient Portal Best Practices",
    description: "Tips for driving patient adoption and engagement with your portal.",
    duration: "Brief session"
  },
  {
    title: "Telehealth Implementation Guide",
    description: "How to set up and optimize your virtual visit workflows.",
    duration: "Brief session"
  },
  {
    title: "Quality Reporting Made Easy",
    description: "Understanding and meeting quality measure requirements.",
    duration: "Standard session"
  },
  {
    title: "e-Prescribing Best Practices",
    description: "Efficient prescribing workflows and medication safety features.",
    duration: "Brief session"
  }
];

export default function Webinars() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Video className="h-4 w-4" />
              Webinars
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Learn with <span className="text-primary">MD Charts</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join our educational webinars to learn best practices and get the most from your EHR investment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{webinar.title}</h3>
                <p className="text-slate-600 mb-4">{webinar.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {webinar.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {webinar.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">On-Demand Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onDemandWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-slate-500">{webinar.duration}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{webinar.title}</h3>
                <p className="text-sm text-slate-600">{webinar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want a Personalized Demo?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a one-on-one demonstration tailored to your practice's needs.
          </p>
          <Link href="/book-demo">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
