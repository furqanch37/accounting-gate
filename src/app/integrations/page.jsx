"use client";
import Image from "next/image";
import "./styles.css";

export default function Integrations() {
  const logos = [
    { name: "smartsearch", src: "https://practicegateway.com/wp-content/uploads/2025/08/SMARTSEARCH-RGB-R-e1758629894380.png" },
    { name: "integration_3", src: "https://practicegateway.com/wp-content/uploads/2025/08/integration_logo_3.png" },
    { name: "integration_1", src: "https://practicegateway.com/wp-content/uploads/2025/08/integration_logo_1.svg" },
    { name: "integration_4", src: "https://practicegateway.com/wp-content/uploads/2025/08/integration_logo_4.png" },
    { name: "integration_2", src: "https://practicegateway.com/wp-content/uploads/2025/08/integration_logo_2.png" },
    { name: "integration_1_dup", src: "https://practicegateway.com/wp-content/uploads/2025/08/integration_logo_1.svg" },
  ];

  return (
    <section className="int-root fade-anim" data-delay="0.1s" aria-labelledby="int-title">
      <div className="int-wrap">
        <div className="int-badge" aria-label="Integrations count">
          <span className="int-badge-icon">✳</span>
          <span>56+ Integrations</span>
        </div>
        <h2 id="int-title" className="int-title">
          Connects With Your Tech Stack to Eliminate
          <br className="int-br" />
          Re-Keying and Keep Workflows Flowing
        </h2>

        <div className="int-scroll-container">
          <div className="int-scroll-track">
            {/* First set of logos */}
            {logos.map((l, idx) => (
              <div className="int-logo" key={`${l.name}-1-${idx}`}>
                <Image src={l.src} alt={l.name} fill className="int-img" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((l, idx) => (
              <div className="int-logo" key={`${l.name}-2-${idx}`}>
                <Image src={l.src} alt={l.name} fill className="int-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
