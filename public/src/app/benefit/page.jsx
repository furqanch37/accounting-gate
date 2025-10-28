"use client";
import Image from "next/image";
import "./styles.css";

export default function Benefit() {
  return (
    <section className="benefit-root fade-anim" data-delay="0.05s">
      <div className="benefit-wrap">
        <h2 className="benefit-title">
          Your Clients Benefit, and
          <br />
          So Does Your Entire Team
        </h2>

        <div className="benefit-card">
          <div className="benefit-quote-mark">“</div>
          <p className="benefit-quote">
            We've removed the need for transcribing client data into our tax software, freeing up valuable time for our advisors. The automated filing process also eliminates time-consuming tasks, especially during the busy January period.
          </p>
          <div className="benefit-author">
            <div className="benefit-author-name">David Rogers</div>
            <div className="benefit-author-role">Head of Tax Compliance, S&W</div>
          </div>

          <div className="benefit-deco benefit-deco-left" aria-hidden="true" />
          <div className="benefit-deco benefit-deco-right" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
