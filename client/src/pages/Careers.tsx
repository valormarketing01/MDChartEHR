import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Briefcase, Heart, Users, Zap, Mail, Code, TrendingUp, Headphones
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits to keep you and your family healthy."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented colleagues who are passionate about healthcare technology."
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career development opportunities."
  }
];

const teams = [
  {
    icon: Code,
    name: "Engineering",
    description: "Build and maintain our EHR platform using modern technologies."
  },
  {
    icon: TrendingUp,
    name: "Product & Sales",
    description: "Define product strategy and connect practices with solutions that transform their operations."
  },
  {
    icon: Headphones,
    name: "Customer Success",
    description: "Help practices succeed with implementation, training, and ongoing support."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Briefcase className="h-4 w-4" />
              Careers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6" data-testid="text-careers-headline">
              Join Our <span className="text-primary">Team</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed" data-testid="text-careers-intro">
              We're always looking for talented individuals who are passionate about healthcare technology and improving patient care. If you're interested in joining the MDCharts team, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why MDCharts?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a mission-driven career with great benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="text-current-opportunities">Current Opportunities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We welcome applications for various roles across our teams. Whether you're an experienced professional or just starting your career in health tech, we encourage you to reach out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {teams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <team.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{team.name}</h3>
                <p className="text-slate-600 text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 text-center shadow-sm border border-slate-100"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4" data-testid="text-how-to-apply">How to Apply</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Please send your resume and a brief cover letter to:
              </p>
              <a 
                href="mailto:hr@mdchartehr.com" 
                className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:underline mb-6"
                data-testid="link-careers-email"
              >
                <Mail className="h-5 w-5" />
                hr@mdchartehr.com
              </a>
              <p className="text-slate-600 leading-relaxed">
                Tell us about your experience, what excites you about MDCharts, and how you'd like to contribute to our mission of transforming healthcare delivery. We review all applications and will reach out if there's a potential fit for our team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
