import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, Calendar, ArrowRight, Mail
} from "lucide-react";

const pressReleases = [
  {
    title: "MDCharts Announces Enhanced Specialty EHR Solutions",
    date: "Recent",
    summary: "Expanded specialty-specific templates and workflows for improved clinical documentation."
  },
  {
    title: "MDCharts Continues Commitment to Regulatory Compliance",
    date: "Recent",
    summary: "Ongoing focus on meeting federal health IT standards and regulations."
  },
  {
    title: "New Telehealth Features Enhance Virtual Care Delivery",
    date: "Recent",
    summary: "Integrated video visits and virtual care tools help practices expand patient access."
  },
  {
    title: "MDCharts Launches Enhanced Patient Portal",
    date: "Recent",
    summary: "New patient engagement features improve communication and satisfaction."
  }
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Newspaper className="h-4 w-4" />
              Press & News
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              MDCharts <span className="text-primary">Newsroom</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stay up to date with the latest news and announcements from MDCharts EHR.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Announcements</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  {release.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{release.title}</h3>
                <p className="text-slate-600">{release.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Media Inquiries</h2>
                  <p className="text-slate-600">For press and media inquiries</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                Members of the media can contact our communications team for information about MDCharts, interview requests, or other press-related inquiries.
              </p>
              <Link href="/contact">
                <Button className="h-12 px-6">
                  Contact Press Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Learn More About MDCharts
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our EHR and practice management solutions can transform your practice.
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
