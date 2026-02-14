import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, ArrowRight
} from "lucide-react";

const leaders = [
  {
    name: "Executive Leadership",
    role: "Guiding Company Vision",
    description: "Our executive team brings together decades of experience in healthcare technology, medical practice management, and software development to drive MDCharts' mission forward."
  },
  {
    name: "Product Development",
    role: "Building the Future",
    description: "Our product team works directly with physicians and practice staff to design and build features that solve real-world clinical and operational challenges."
  },
  {
    name: "Customer Success",
    role: "Partnering with Practices",
    description: "Our customer success team is dedicated to ensuring every practice gets the most from their MDCharts investment through training, support, and ongoing optimization."
  },
  {
    name: "Engineering",
    role: "Technology Excellence",
    description: "Our engineering team builds secure, reliable, and scalable solutions using the latest healthcare technology standards and best practices."
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Leadership
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Our <span className="text-primary">Team</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Meet the teams driving innovation and excellence at MDCharts EHR.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-primary font-semibold mb-4">{leader.role}</p>
                <p className="text-slate-600">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            Every member of the MDCharts team is committed to our mission of helping medical practices deliver exceptional patient care. We believe in building long-term partnerships with our customers and continuously improving our solutions based on their feedback.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for healthcare technology.
          </p>
          <Link href="/careers">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              View Careers <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
