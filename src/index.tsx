import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame/Frame";
import { FrameSpanish } from "./screens/FrameSpanish/FrameSpanish";
import { FramePuertoRico } from "./screens/FramePuertoRico/FramePuertoRico";
import { FramePuertoRicoSpanish } from "./screens/FramePuertoRicoSpanish/FramePuertoRicoSpanish";
import { ThankYou } from "./screens/ThankYou/ThankYou";
import { ThankYouSpanish } from "./screens/ThankYouSpanish/ThankYouSpanish";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/lp-lv-englishimmigration" element={<Frame />} />
        <Route path="/lp-lv-spanishimmigration" element={<FrameSpanish />} />
        <Route path="/lp-pr-englishimmigration" element={<FramePuertoRico />} />
        <Route path="/lp-pr-spanishimmigration" element={<FramePuertoRicoSpanish />} />
        <Route path="/lp-thank-you" element={<ThankYou />} />
        <Route path="/lp-gracias" element={<ThankYouSpanish />} />
      </Routes>
    </Router>
  </StrictMode>,
);
