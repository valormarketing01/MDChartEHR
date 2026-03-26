import { useState, useEffect } from "react";
import { X, MapPin, Calendar } from "lucide-react";

// Conference window: March 27–31, 2026
const CONF_START = new Date("2026-03-27T00:00:00");
const CONF_END   = new Date("2026-04-01T00:00:00"); // hide after March 31

export function AADBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, started: false });

  useEffect(() => {
    // Restore dismissal from session storage (clears when tab closes)
    if (sessionStorage.getItem("aad-banner-dismissed") === "true") {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    function calc() {
      const now = new Date();
      const target = now < CONF_START ? CONF_START : null; // once started, show "LIVE"
      if (target) {
        const diff = target.getTime() - now.getTime();
        setCountdown({
          days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins:    Math.floor((diff / (1000 * 60)) % 60),
          started: false,
        });
      } else {
        setCountdown({ days: 0, hours: 0, mins: 0, started: true });
      }
    }
    calc();
    const id = setInterval(calc, 60_000);
    return () => clearInterval(id);
  }, []);

  const now = new Date();
  // Don't render outside the show window
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

        {/* Left: conference label */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
            style={{ background: "#c9a227", color: "#0a1628" }}
          >
            AAD 2026
          </span>
          {countdown.started && (
            <span
              className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded animate-pulse"
              style={{ background: "#22c55e", color: "#fff" }}
            >
              LIVE NOW
            </span>
          )}
        </div>

        {/* Centre: main message */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center flex-1 min-w-0">
          <span className="text-white font-semibold text-sm whitespace-nowrap">
            {countdown.started
              ? "We're Live at AAD! Zero Paperwork, All Derm."
              : countdown.days === 0
                ? "Tomorrow! 1 Booth. Zero Paperwork."
                : `${countdown.days} Day${countdown.days > 1 ? "s" : ""}. 1 Booth. Zero Paperwork.`}
          </span>

          <span className="hidden sm:flex items-center gap-1 text-sm" style={{ color: "#f0d080" }}>
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            Denver, CO · Booth&nbsp;<strong>#1741</strong>
          </span>

          <span className="hidden md:flex items-center gap-1 text-sm" style={{ color: "#f0d080" }}>
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            Mar 27 to 31
          </span>

          {/* Countdown chips */}
          {!countdown.started && (
            <div className="flex items-center gap-1">
              {[
                { val: countdown.days,  label: "d" },
                { val: countdown.hours, label: "h" },
                { val: countdown.mins,  label: "m" },
              ].map(({ val, label }) => (
                <span
                  key={label}
                  className="inline-flex items-baseline gap-0.5 px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "rgba(201,162,39,0.2)", color: "#f0d080", border: "1px solid rgba(201,162,39,0.4)" }}
                >
                  <span className="text-sm font-extrabold" style={{ color: "#c9a227" }}>{String(val).padStart(2,"0")}</span>
                  {label}
                </span>
              ))}
            </div>
          )}

          <a
            href="/book-demo"
            className="text-xs font-bold px-3 py-1 rounded-full transition-all duration-200 whitespace-nowrap"
            style={{
              background: "#c9a227",
              color: "#0a1628",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e0b830")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c9a227")}
          >
            Book a Meeting →
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
