"use client";
import { useState } from "react";
import Image from "next/image";
import "./styles.css";

const items = [
  "Cut the Complexity, Keep the Performance.",
  "Know What's Happening. Always.",
  "Measure Progress, Spot Issues, Boost Profits.",
  "AI Driven Capabilities that Automate the Admin.",
  "Protect Your Data with Enterprise-Grade Security.",
  "Know Your Customer, At All Times.",
];

export default function Scale() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sc-root" aria-labelledby="sc-title">
      <div className="sc-wrap">
        <h2 id="sc-title" className="sc-title">
          Built for Scale,
          <br className="sc-br" />
          Designed for Ease
        </h2>

        <div className="sc-grid">
          <div className="sc-acc" role="tablist" aria-label="Benefits list">
            {items.map((label, i) => (
              <div className={"sc-item "+(open===i?"is-open":"")} key={i}>
                <button
                  className="sc-trigger"
                  role="tab"
                  aria-selected={open===i}
                  aria-controls={`sc-panel-${i}`}
                  id={`sc-tab-${i}`}
                  onClick={() => setOpen(open===i?-1:i)}
                  type="button"
                >
                  <span>{label}</span>
                  <span className="sc-icon" aria-hidden>▾</span>
                </button>
                <div
                  role="tabpanel"
                  id={`sc-panel-${i}`}
                  aria-labelledby={`sc-tab-${i}`}
                  className="sc-panel"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dui ac neque aliquet ultricies. Vivamus efficitur, purus a aliquet efficitur, dui nunc vulputate justo, a facilisis lorem augue sed erat.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="sc-media">
            <div className="sc-figure">
              <Image
                src="https://practicegateway.com/wp-content/uploads/2025/08/info_content_1.jpg"
                alt="Laptop with approvals overlay"
                fill
                className="sc-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
