import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, Lock, Server, Eye, RefreshCcw, Users,
  Check, ArrowRight
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted using industry-standard protocols both in transit and at rest."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our platform is hosted in SOC 2 compliant data centers with enterprise-grade security."
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Real-time monitoring and alerting for security events and potential threats."
  },
  {
    icon: RefreshCcw,
    title: "Regular Updates",
    description: "Continuous security updates and patches to protect against emerging threats."
  },
  {
    icon: Users,
    title: "Access Management",
    description: "Granular role-based access controls ensure users only access what they need."
  },
  {
    icon: Shield,
    title: "Security Assessments",
    description: "Regular vulnerability assessments and penetration testing by third parties."
  }
];

const practices = [
  "Multi-factor authentication for all users",
  "Automated session timeout and lockout",
  "Secure password requirements",
  "IP-based access restrictions available",
  "Complete audit logging",
  "Automated backup and disaster recovery"
];

export default function Security() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
              <Shield className="h-4 w-4" />
              Security
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Security & <span className="text-primary">Data Protection</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Your data security is our top priority. Learn about the measures we take to protect your practice and patient information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built from the ground up with security as a core principle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
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
                Security Best Practices
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We implement industry best practices to ensure your data remains secure and protected at all times.
              </p>
              <ul className="space-y-3">
                {practices.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-center">
                <Lock className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Always Secure</h3>
                <p className="text-white/80">
                  Security is built into everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Questions About Security?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our security practices.
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
