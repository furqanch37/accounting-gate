import Link from "next/link";
import "./styles.css";

export default function Hero() {
  return (
    <section className="hero fade-anim" data-delay="0s" style={{position:'relative', overflow:'hidden'}}>
      <div className="lines-overlay" aria-hidden="true">
        <span className="line l1"/>
        <span className="line l2"/>
        <span className="line l3"/>
        <span className="line l4"/>
        <span className="line l5"/>
        <span className="line l6"/>
        <span className="line l7"/>
        <span className="line l8"/>
      </div>
      <div className="hero-wrap">
        <div className="hero-eyebrow fade-anim" data-delay="0s">More than an accountancy portal</div>
        <h1 className="hero-title fade-anim" data-delay=".08s">Designed to Delight Clients. Built to Empower Accountants.</h1>
        <p className="hero-sub fade-anim" data-delay=".16s">Automate onboarding and tax workflows. Reduce client delays, ensure compliance, and win back billable time. Fully integrating into your existing systems.</p>
        <div className="hero-cta fade-anim" data-delay=".24s">
          <Link href="#" className="hero-btn">Get Started</Link>
        </div>
      </div>
    </section>
  );
}
