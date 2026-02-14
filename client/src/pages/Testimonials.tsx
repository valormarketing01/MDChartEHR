import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, Quote, ArrowRight, Users
} from "lucide-react";

const testimonials = [
  {
    quote: "The specialty-specific templates have transformed how we document patient visits. Our providers are happier and more efficient.",
    name: "Practice Administrator",
    specialty: "Multi-Specialty Practice"
  },
  {
    quote: "Switching to MD Charts was one of the best decisions we made for our practice. The support team has been exceptional.",
    name: "Office Manager",
    specialty: "Family Medicine"
  },
  {
    quote: "The integrated billing features have helped us reduce claim denials and improve our revenue cycle significantly.",
    name: "Billing Manager",
    specialty: "Dermatology Practice"
  },
  {
    quote: "Our patients love the patient portal. It has reduced phone calls and improved communication with our practice.",
    name: "Front Desk Coordinator",
    specialty: "Pediatric Practice"
  },
  {
    quote: "The telehealth integration was seamless. We were able to continue seeing patients without interruption.",
    name: "Clinical Director",
    specialty: "Internal Medicine"
  },
  {
    quote: "Implementation was smooth and the training was comprehensive. Our staff was productive from day one.",
    name: "Practice Owner",
    specialty: "OB/GYN Practice"
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Testimonials
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              What Our <span className="text-primary">Customers Say</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Hear from practices across the country about their experience with MD Charts EHR.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            See why practices trust MD Charts for their EHR and practice management needs.
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
