import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Stethoscope, 
  Phone, 
  Mail,
  ArrowRight,
  Shield,
  Users,
  Zap,
  Star,
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for solo practitioners and small practices",
    popular: false,
    features: [
      "Core EHR functionality",
      "Up to 3 users",
      "Basic scheduling",
      "Patient portal",
      "e-Prescribing",
      "Standard support",
      "Basic reporting",
      "HIPAA compliant",
    ],
    cta: "Contact for Pricing",
    highlight: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing practices with advanced needs",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Unlimited users",
      "Advanced scheduling",
      "Telehealth integration",
      "Lab integrations",
      "Revenue cycle basics",
      "Custom templates",
      "Priority support",
      "Advanced analytics",
      "Patient engagement tools",
    ],
    cta: "Contact for Pricing",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For large practices and healthcare organizations",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "Multi-location support",
      "Full RCM services",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "24/7 premium support",
      "On-site training",
      "SLA guarantees",
      "API access",
    ],
    cta: "Contact for Pricing",
    highlight: false,
  },
];

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "Our 30-day free trial includes full access to the Professional plan features. No credit card required to start. You'll have access to all EHR, practice management, and patient engagement tools.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for Starter and Professional plans. Enterprise plans may include implementation services with custom pricing based on your organization's needs.",
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include email support and access to our knowledge base. Professional plans add priority phone support, while Enterprise plans include a dedicated account manager and 24/7 support.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, absolutely. We're ONC 2015 Edition Certified and fully HIPAA compliant. All data is encrypted at rest and in transit, with regular security audits and SOC 2 Type II certification.",
  },
  {
    question: "How do I get pricing information?",
    answer: "Schedule a demo with our team and we'll provide custom pricing based on your practice size and needs. Contact us to discuss your requirements.",
  },
];

const comparisonFeatures = [
  { name: "Electronic Health Records", starter: true, professional: true, enterprise: true },
  { name: "Patient Scheduling", starter: true, professional: true, enterprise: true },
  { name: "e-Prescribing", starter: true, professional: true, enterprise: true },
  { name: "Patient Portal", starter: true, professional: true, enterprise: true },
  { name: "Telehealth", starter: false, professional: true, enterprise: true },
  { name: "Lab Integrations", starter: false, professional: true, enterprise: true },
  { name: "Custom Templates", starter: false, professional: true, enterprise: true },
  { name: "Revenue Cycle Management", starter: false, professional: "Basic", enterprise: "Full" },
  { name: "Multi-location Support", starter: false, professional: false, enterprise: true },
  { name: "Custom Integrations", starter: false, professional: false, enterprise: true },
  { name: "API Access", starter: false, professional: false, enterprise: true },
  { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-8 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 via-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0.9, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Simple, Transparent Pricing</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Choose the Right Plan for <span className="text-primary">Your Practice</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              Contact us for custom pricing tailored to your practice. Schedule a call to discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0.9, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight 
                    ? "bg-gradient-to-br from-primary to-cyan-600 text-white shadow-2xl shadow-primary/30 scale-105 z-10" 
                    : "bg-white border-2 border-slate-200 hover:border-primary/30 transition-colors"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                      <Star className="h-3 w-3 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlight ? "text-white/80" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      Contact Us
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>
                    for custom pricing
                  </p>
                </div>

                <Link href="/book-demo">
                  <Button 
                    className={`w-full mb-8 ${
                      plan.highlight 
                        ? "bg-white text-primary hover:bg-slate-100" 
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlight ? "bg-white/20" : "bg-primary/10"
                      }`}>
                        <Check className={`h-3 w-3 ${plan.highlight ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">HIPAA Compliant</h4>
              <p className="text-sm text-slate-600">Fully certified & secure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">High Uptime</h4>
              <p className="text-sm text-slate-600">Reliable performance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Growing Practices</h4>
              <p className="text-sm text-slate-600">Trust MD Charts daily</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">ONC Certified</h4>
              <p className="text-sm text-slate-600">2015 Edition compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See which plan is right for your practice
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary bg-primary/5 rounded-t-lg">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-slate-700">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-slate-600">{feature.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/5">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-primary">{feature.professional}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className="text-sm font-medium text-slate-600">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.9, y: 3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-600 pl-8">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0.9, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Join healthcare providers who trust MD Charts EHR. Schedule a demo to learn more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100 px-8">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/book-demo">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
