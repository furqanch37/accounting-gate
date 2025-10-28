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
    <div className="onboarding-illustration">
      <div className="content-description">
        <h3 className="title-category fade-anim" data-delay="0s">Onboarding</h3>
        <h2 className="title-block fade-anim" data-delay=".06s">Automate up to 90%<br />of manual onboarding tasks</h2>
        <div className="typical-text fade-anim" data-delay=".12s">
          <p>Smart KYC/AML checks built in via SmartSearch.<br />Reduce onboarding time by 5x with automated reminders and client-friendly forms.</p>
        </div>
        <Link href="#" className="btn fade-anim" data-delay=".18s">Explore Onboarding</Link>
      </div>

      <div className="onboarding-illustration-list">
        <div className="onboarding-item onboarding-item-1 fade-anim" data-delay=".22s">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiUserPlus />
            </div>
            <p className="onboarding-item-name">
              <span>New customer request</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
        </div>

        <div className="onboarding-item onboarding-item-2 fade-anim" data-delay=".5s">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiUploadCloud />
            </div>
            <p className="onboarding-item-name">
              <span>Client uploads docs</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
          <div className="typical-text">
            <p>Read by AI</p>
          </div>
          <div className="anim-scan">
            <div className="scan-container">
              <div className="scan-avatar" />
              <div className="scan-lines">
                <span className="scan-line" />
                <span className="scan-line" />
                <span className="scan-line" />
              </div>
              <div className="scan-accent" />
            </div>
          </div>
        </div>

        <div className="onboarding-item onboarding-item-3 fade-anim" data-delay="1s">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiShield />
            </div>
            <p className="onboarding-item-name">
              <span>Automated checks</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
          <div className="typical-text">
            <p>AML, KYC, SmartSearch & Companies House</p>
          </div>
        </div>

        <div className="onboarding-item onboarding-item-4 fade-anim" data-delay="1.5s">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiList />
            </div>
            <p className="onboarding-item-name">
              <span>Automatic LOE creation</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
        </div>

        <div className="onboarding-item onboarding-item-5 fade-anim" data-delay="2s">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiFileText />
            </div>
            <p className="onboarding-item-name">
              <span>Populating your apps</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxPanel() {
  return (
    <div className="onboarding-illustration">
      <div className="content-description">
        <h3 className="title-category fade-anim" data-delay="0s">Tax Automation</h3>
        <h2 className="title-block fade-anim" data-delay=".06s">Save up to 70% of time<br />spent on tax returns</h2>
        <div className="typical-text fade-anim" data-delay=".12s">
          <p>AI-powered document extraction and auto-entry.<br />Integrates directly with HMRC, CCH, IRIS & more.</p>
        </div>
        <Link href="#" className="btn fade-anim" data-delay=".18s">Explore Tax Automation</Link>
      </div>

      <div className="tax-automation-grid fade-anim" data-delay=".22s">
        <div className="tax-illus-frame">
          <Image src="/assests/solution-1.png" alt="Tax automation UI" fill priority className="tax-illus-img" />
        </div>

        <ul className="tax-features-list">
          <TaxItem icon={<FiTrendingUp />} text="Automatically pulls in prior-year data" />
          <TaxItem icon={<FiCpu />} text="Pre-filled forms and AI document extraction" />
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
    <li className="tax-feature-item">
      <span className="tax-feature-icon">{icon}</span>
      <span className="tax-feature-text">{text}</span>
    </li>
  );
}
