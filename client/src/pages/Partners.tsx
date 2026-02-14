import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Handshake, Building2, FlaskConical, CreditCard, Cloud, ArrowRight
} from "lucide-react";

const partnerTypes = [
  {
    icon: FlaskConical,
    title: "Laboratory Partners",
    description: "We integrate with major national and regional laboratory networks to provide seamless electronic ordering and result delivery."
  },
  {
    icon: CreditCard,
    title: "Clearinghouse Partners",
    description: "Our clearinghouse integrations enable efficient claims submission, eligibility verification, and ERA processing."
  },
  {
    icon: Cloud,
    title: "Technology Partners",
    description: "We partner with leading healthcare technology providers to extend the capabilities of our platform."
  },
  {
    icon: Building2,
    title: "Health System Partners",
    description: "We work with health systems and HIEs to enable interoperability and care coordination across organizations."
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Handshake className="h-4 w-4" />
              Partners
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Our Partner <span className="text-primary">Ecosystem</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              MD Charts works with industry-leading partners to provide comprehensive solutions for medical practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <partner.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.title}</h3>
                <p className="text-slate-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Become a Partner</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We're always looking to expand our partner ecosystem to better serve our customers. If your organization provides services that complement our EHR platform, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8">
                Contact Our Partnership Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learn More About MD Charts
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our integrated platform can benefit your practice.
          </p>
          <Link href="/book-demo">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
