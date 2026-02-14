import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { 
  Building2, Users, Stethoscope, Heart, ArrowRight, FileText
} from "lucide-react";

const caseStudies = [
  {
    icon: Building2,
    title: "Multi-Specialty Practice",
    category: "Practice Management",
    summary: "A multi-location practice streamlined operations and improved care coordination across specialties using MDCharts integrated platform.",
    results: ["Improved workflow efficiency", "Enhanced care coordination", "Streamlined operations"]
  },
  {
    icon: Stethoscope,
    title: "Dermatology Practice",
    category: "Specialty EHR",
    summary: "A busy dermatology practice implemented DermCharts to optimize documentation and cosmetic billing workflows.",
    results: ["Faster documentation", "Streamlined billing", "Better patient tracking"]
  },
  {
    icon: Users,
    title: "Family Medicine Group",
    category: "Primary Care",
    summary: "A family medicine practice improved patient engagement and reduced administrative burden with our comprehensive solution.",
    results: ["Increased patient engagement", "Reduced admin time", "Improved satisfaction"]
  },
  {
    icon: Heart,
    title: "Pediatric Practice",
    category: "Pediatrics",
    summary: "A pediatric practice enhanced well-child visit documentation and immunization tracking with PediCharts.",
    results: ["Better immunization tracking", "Streamlined well-child visits", "Parent portal adoption"]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <FileText className="h-4 w-4" />
              Case Studies
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Real Results from <span className="text-primary">Real Practices</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover how medical practices across specialties have transformed their operations with MDCharts EHR.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <study.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-semibold">{study.category}</span>
                    <h3 className="text-xl font-bold text-slate-900">{study.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{study.summary}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Key Outcomes:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join practices across the country that have transformed their operations with MDCharts.
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
