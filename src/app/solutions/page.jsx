"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUserPlus, FiFileText, FiUploadCloud, FiCheckCircle, FiList, FiShield, FiCpu, FiTrendingUp } from "react-icons/fi";
import "./styles.css";

export default function SolutionsTabs() {
  const [tab, setTab] = useState("onboarding");

  return (
    <section className="sl-root fade-anim" data-delay="0.12s">
      <div className="sl-wrap">
        <h2 className="sl-heading fade-anim" data-delay="0s">Two Powerful Solutions.<br />One Seamless Experience.</h2>

        <div className="sl-tabs fade-anim" role="tablist" aria-label="Solutions" data-delay=".08s">
          <button
            role="tab"
            aria-selected={tab === "onboarding"}
            className={`sl-tab ${tab === "onboarding" ? "is-active" : ""}`}
            onClick={() => setTab("onboarding")}
            type="button"
          >
            Onboarding
          </button>
          <button
            role="tab"
            aria-selected={tab === "tax"}
            className={`sl-tab ${tab === "tax" ? "is-active" : ""}`}
            onClick={() => setTab("tax")}
            type="button"
          >
            Tax Automation
          </button>
        </div>

        <div className="fade-anim" data-delay=".12s">{tab === "onboarding" ? <OnboardingPanel /> : <TaxPanel />}</div>
      </div>
    </section>
  );
}

function OnboardingPanel() {
  return (
    <div className="sl-panel">
      <div className="sl-eyebrow fade-anim" data-delay="0s">Onboarding</div>
      <h3 className="sl-title fade-anim" data-delay=".06s">Automate up to 90%<br className="sl-br" /> of manual onboarding tasks</h3>
      <p className="sl-sub fade-anim" data-delay=".12s">Smart KYC/AML checks built in via SmartSearch.<br className="sl-br" />Reduce onboarding time by 5x with automated reminders and client‑friendly forms.</p>
      <div className="sl-cta fade-anim" data-delay=".18s"><Link href="#" className="sl-btn">Explore Onboarding</Link></div>

      <div className="sl-stage fade-anim" data-delay=".22s">
        <div className="sl-stage-top">
          <StageTag icon={<FiUserPlus />} text="New customer request" ok />
          <StageTag icon={<FiFileText />} text="Populating your apps" ok />
        </div>
        
        <div className="sl-stage-middle">
          <div className="sl-stage-left">
            <StageTag icon={<FiUploadCloud />} text="Client uploads docs" ok />
            <div className="sl-ai-card">
              <div className="sl-ai-label">Read by AI</div>
              <div className="sl-ai-illus">
                <div className="sl-ai-avatar" />
                <div className="sl-ai-lines">
                  <span className="sl-ai-line" />
                  <span className="sl-ai-line" />
                  <span className="sl-ai-line" />
                </div>
                <div className="sl-ai-accent" />
              </div>
            </div>
          </div>
          
          <div className="sl-stage-center">
            <div className="sl-card">
              <div className="sl-card-chip">Automated checks</div>
              <div className="sl-card-icon" aria-hidden="true">
                <FiShield />
              </div>
            </div>
            <div className="sl-note">AML, KYC, SmartSearch & Companies House</div>
          </div>
          
          <div className="sl-stage-right">
            <StageTag icon={<FiList />} text="Automatic LOE creation" ok />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxPanel() {
  return (
    <div className="sl-panel sl-panel-alt">
      <div className="sl-eyebrow fade-anim" data-delay="0s">Tax Automation</div>
      <h3 className="sl-title fade-anim" data-delay=".06s">Save up to 70% of time<br className="sl-br" /> spent on tax returns</h3>
      <p className="sl-sub fade-anim" data-delay=".12s">AI‑powered document extraction and auto‑entry. Integrates directly with HMRC, CCH, IRIS & more.</p>
      <div className="sl-cta fade-anim" data-delay=".18s"><Link href="#" className="sl-btn">Explore Tax Automation</Link></div>

      <div className="sl-tax-grid fade-anim" data-delay=".22s">
        <div className="sl-tax-illus">
          <Image src="/assests/solution-1.png" alt="Tax automation illustration" fill priority className="sl-tax-img" />
        </div>
        <ul className="sl-tax-list">
          <TaxItem icon={<FiTrendingUp />} text="Automatically pulls in prior‑year data" />
          <TaxItem icon={<FiCpu />} text="Pre‑filled forms and AI document extraction" />
          <TaxItem icon={<FiCheckCircle />} text="Automated validation checks" />
          <TaxItem icon={<FiUploadCloud />} text="Upload, verify, and categorise client tax info in seconds" />
          <TaxItem icon={<FiShield />} text="Digitally signed documents, secure and fast submissions" />
        </ul>
      </div>
    </div>
  );
}

function StageTag({ icon, text, ok }) {
  return (
    <div className="sl-tag">
      <span className="sl-tag-icon">{icon}</span>
      <span className="sl-tag-text">{text}</span>
      {ok && <span className="sl-tag-ok">✓</span>}
    </div>
  );
}

function TaxItem({ icon, text }) {
  return (
    <li className="sl-li">
      <span className="sl-li-icon">{icon}</span>
      <span className="sl-li-text">{text}</span>
    </li>
  );
}
