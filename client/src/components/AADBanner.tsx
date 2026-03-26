import { useState, useEffect } from "react";
import { X, MapPin, Calendar } from "lucide-react";

const CONF_END = new Date("2026-04-01T00:00:00");
const CONF_START = new Date("2026-03-27T00:00:00");

export function AADBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("aad-banner-dismissed") === "true") {
      setDismissed(true);
    }
    const now = new Date();
    setIsLive(now >= CONF_START);
  }, []);

  const now = new Date();
  if (now >= CONF_END) return null;
  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem("aad-banner-dismissed", "true");
    setDismissed(true);
  };

  return (
    <div
      className="w-full z-40 relative"
      style={{
        background: "linear-gradient(90deg, #0a1628 0%, #0f2347 40%, #1a3a6b 70%, #0a1628 100%)",
        borderBottom: "2px solid #c9a227",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">

        {/* Left: badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
            style={{ background: "#c9a227", color: "#0a1628" }}
          >
            AAD 2026
          </span>
          {isLive && (
            <span
              className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded animate-pulse"
              style={{ background: "#22c55e", color: "#fff" }}
            >
              LIVE NOW
            </span>
          )}
        </div>

        {/* Centre: message */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center flex-1 min-w-0">

          <span className="text-white font-semibold text-sm whitespace-nowrap">
            {isLive
              ? "We are live at AAD! Come and visit us at Booth #1741"
              : "Join us at AAD Annual Meeting — Come and visit us at Booth #1741"}
          </span>

          <span className="hidden sm:flex items-center gap-1 text-sm" style={{ color: "#f0d080" }}>
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Denver, CO
          </span>

          <span className="hidden md:flex items-center gap-1 text-sm" style={{ color: "#f0d080" }}>
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            Mar 27 to 31
          </span>

          <a
            href="/book-demo"
            className="text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 whitespace-nowrap"
            style={{ background: "#c9a227", color: "#0a1628" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e0b830")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c9a227")}
          >
            Book a Meeting
          </a>
        </div>

        {/* Right: dismiss */}
        <button
          onClick={handleDismiss}
          className="shrink-0 p-1 rounded-full transition-colors"
          style={{ color: "rgba(255,255,255,0.5)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
