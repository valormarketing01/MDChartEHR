import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Star, Quote, ArrowRight, Users, Play, Pause, Volume2, VolumeX
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
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch("/api/settings/testimonials-video")
      .then(r => r.json())
      .then(data => { if (data.url) setVideoUrl(data.url); })
      .catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6">
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

      {/* Video Section — only renders when a video has been uploaded */}
      {videoUrl && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Hear It From Our <span className="text-primary">Customers</span>
                </h2>
                <p className="text-slate-600">Real stories from practices using MD Charts EHR</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full max-h-[520px] object-cover"
                  onEnded={() => setPlaying(false)}
                  playsInline
                />
                {/* Overlay controls */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={togglePlay}
                    className="h-16 w-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  >
                    {playing
                      ? <Pause className="h-7 w-7 text-slate-900" />
                      : <Play className="h-7 w-7 text-slate-900 ml-1" />
                    }
                  </button>
                </div>
                {/* Play button when paused */}
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center" onClick={togglePlay}>
                    <button className="h-20 w-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                      <Play className="h-9 w-9 text-white ml-1" />
                    </button>
                  </div>
                )}
                {/* Mute button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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
