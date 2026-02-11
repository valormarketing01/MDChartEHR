import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

function getSessionId() {
  let sessionId = sessionStorage.getItem("mdcharts_session_id");
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem("mdcharts_session_id", sessionId);
  }
  return sessionId;
}

export function usePageTracker() {
  const [location] = useLocation();
  const lastTracked = useRef("");

  useEffect(() => {
    if (location === lastTracked.current) return;
    lastTracked.current = location;

    const data = {
      path: location,
      referrer: document.referrer || null,
      language: navigator.language || null,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      sessionId: getSessionId(),
    };

    fetch("/api/page-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  }, [location]);
}
