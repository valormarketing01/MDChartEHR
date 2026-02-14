import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, Lock, FileCheck, Users, Server, AlertTriangle,
  Check, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Access Controls",
    description: "Role-based access ensures users only see information necessary for their job functions."
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Comprehensive audit trails track all access to protected health information."
  },
  {
    icon: Server,
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard protocols."
  },
  {
    icon: Users,
    title: "User Authentication",
    description: "Multi-factor authentication and strong password requirements protect accounts."
  },
  {
    icon: AlertTriangle,
    title: "Breach Notification",
    description: "Procedures in place to identify, respond to, and notify of any security incidents."
  },
  {
    icon: Shield,
    title: "Business Associate Agreements",
    description: "We execute BAAs with all customers and maintain appropriate vendor agreements."
  }
];

const safeguards = [
  "Administrative safeguards including policies and procedures",
  "Physical safeguards for data center security",
  "Technical safeguards including encryption and access controls",
  "Regular security risk assessments",
  "Workforce training on privacy and security",
  "Incident response procedures"
];

export default function HIPAACompliance() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Compliance
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              HIPAA <span className="text-primary">Compliance</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              MD Charts is committed to maintaining the highest standards of privacy and security for protected health information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Compliance Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built-in features to help your practice meet HIPAA requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Safeguards
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our platform implements comprehensive safeguards to protect the confidentiality, integrity, and availability of electronic protected health information.
              </p>
              <ul className="space-y-3">
                {safeguards.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-center">
                <Shield className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Your Data is Protected</h3>
                <p className="text-white/80">
                  We take our responsibility as a business associate seriously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions About Compliance?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our security and compliance practices.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
