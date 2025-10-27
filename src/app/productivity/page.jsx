"use client";
import "./styles.css";

export default function Productivity() {
  return (
    <section className="pd-root fade-anim" data-delay="0.14s" aria-labelledby="pd-title">
      <div className="pd-wrap">
        <h2 id="pd-title" className="pd-title">Unlock Hours of Productivity Every Week<br className="pd-br" /> with Practice Gateway</h2>
        <p className="pd-sub">Findings Based on Practice Gateway’s User Insights and Customer Feedback</p>

        <div className="pd-grid">
          {/* Top row - two large cards */}
          <div className="pd-card pd-card-lg pd-card-left">
            <div className="pd-card-deco pd-deco-left" aria-hidden="true" />
            <div className="pd-metric"><strong>90% less</strong></div>
            <div className="pd-desc">onboarding admin</div>
          </div>

          <div className="pd-card pd-card-lg">
            <div className="pd-metric"><strong>70% less</strong></div>
            <div className="pd-desc">effort on tax prep and submission</div>
          </div>

          {/* Bottom row - three small cards */}
          <div className="pd-card pd-card-sm">
            <div className="pd-metric"><strong>60k+ hours</strong></div>
            <div className="pd-desc">saved chasing documents and
              missing client info</div>
          </div>

          <div className="pd-card pd-card-sm">
            <div className="pd-metric"><strong>100k+ hours</strong></div>
            <div className="pd-desc">saved organising and accessing
              documents</div>
          </div>

          <div className="pd-card pd-card-sm pd-card-right">
            <div className="pd-card-deco pd-deco-right" aria-hidden="true" />
            <div className="pd-metric"><strong>200k+ hours</strong></div>
            <div className="pd-desc">saved through AI-powered
              automation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
