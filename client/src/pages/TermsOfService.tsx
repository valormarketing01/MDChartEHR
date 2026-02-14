import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
              <FileText className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
            <p className="text-slate-600">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using MD Charts EHR services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>

            <h2>Use of Services</h2>
            <p>
              Our services are intended for use by licensed healthcare providers and authorized staff members. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the services in compliance with all applicable laws and regulations</li>
              <li>Not use the services for any unlawful purpose</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The MD Charts EHR platform, including all content, features, and functionality, is owned by MD Charts and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul>
              <li>Ensuring authorized use of your account</li>
              <li>Maintaining appropriate security measures</li>
              <li>Complying with HIPAA and other applicable healthcare regulations</li>
              <li>Backing up your data as appropriate</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              MD Charts shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
            </p>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
