import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-slate-600">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Introduction</h2>
            <p>
              MD Charts EHR ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide.</li>
              <li><strong>Practice Information:</strong> Information about your medical practice, specialty, and organizational details.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect the security and integrity of our services</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in operating our business</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is completely secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
