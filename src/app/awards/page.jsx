"use client";
import Image from "next/image";
import "./styles.css";

export default function Awards() {
  const logos = [
    { name: "table_logo_6", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_6.png" },
    { name: "table_logo_5", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_5.png" },
    { name: "table_logo_4", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_4.png" },
    { name: "table_logo_3", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_3.png" },
    { name: "table_logo_2", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_2.png" },
    { name: "table_logo_1", src: "https://practicegateway.com/wp-content/uploads/2025/08/table_logo_1.png" },
  ];

  return (
    <section className="aw-root" aria-labelledby="aw-title">
      <div className="aw-wrap">
        <h2 id="aw-title" className="aw-title">Recognised for Innovation,<br className="aw-br" /> Trusted for Results</h2>

        <div className="aw-board">
          <div className="aw-grid">
            {logos.map((l) => (
              <div className="aw-cell" key={l.name}>
                <div className="aw-logo">
                  <Image
                    src={l.src}
                    alt={l.name}
                    fill
                    className="aw-img"
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 560px) 120px, (max-width: 980px) 160px, 220px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
