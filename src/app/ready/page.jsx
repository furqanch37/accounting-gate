"use client";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export default function Ready() {
  return (
    <section className="rd-root fade-anim" data-delay="0.18s" aria-labelledby="rd-title">
      <div className="rd-deco rd-deco-left" aria-hidden="true">
        <Image
          src="/assests/ready_elem_1.png"
          alt=""
          fill
          className="rd-deco-img"
          loading="lazy"
        />
      </div>
      <div className="rd-deco rd-deco-right" aria-hidden="true">
        <Image
          src="/assests/ready_elem_2.png"
          alt=""
          fill
          className="rd-deco-img"
          loading="lazy"
        />
      </div>
      <div className="rd-wrap">
        <h2 id="rd-title" className="rd-title">Ready to Increase Efficiency<br className="rd-br" /> and Billable Hours?</h2>
        <p className="rd-sub">Book a short discovery call and together we can explore the best solution for your firm.</p>
        <div className="rd-cta">
          <Link href="#" className="rd-btn">Let's Talk</Link>
        </div>
      </div>
    </section>
  );
}
