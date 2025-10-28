"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiUserPlus,
  FiUploadCloud,
  FiShield,
  FiList,
  FiFileText,
  FiTrendingUp,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";
import "./styles.css";   // <-- all CSS is in this file

export default function SolutionsTabs() {
  const [tab, setTab] = useState("onboarding");

  return (
    <section className="sl-root">
      <div className="sl-wrap">
        <h2 className="sl-heading">
          Two Powerful Solutions.<br />One Seamless Experience.
        </h2>

        <div className="sl-tabs" role="tablist" aria-label="Solutions">
          <button
            role="tab"
            aria-selected={tab === "onboarding"}
            className={`sl-tab ${tab === "onboarding" ? "is-active" : ""}`}
            onClick={() => setTab("onboarding")}
          >
            Onboarding
          </button>
          <button
            role="tab"
            aria-selected={tab === "tax"}
            className={`sl-tab ${tab === "tax" ? "is-active" : ""}`}
            onClick={() => setTab("tax")}
          >
            Tax Automation
          </button>
        </div>
        {/* ---------- PANELS ---------- */}
        {tab === "onboarding" ? <OnboardingPanel /> : <TaxPanel />}
      </div>
    </section>
  );
}

/* -------------------------------------------------
   ONBOARDING PANEL
   ------------------------------------------------- */
function OnboardingPanel() {
  return (
    <>
    <div className="onboarding-illustration">
      <div className="content-description">
        <h3 className="title-category">Onboarding</h3>
        <h2 className="title-block">
          Automate up to 90%<br />of manual onboarding tasks
        </h2>
        <div className="typical-text">
          <p>
            Smart KYC/AML checks built in via SmartSearch.<br />
            Reduce onboarding time by 5x with automated reminders and
            client-friendly forms.
          </p>
        </div>
        <Link href="#" className="btn">
          Explore Onboarding
        </Link>
      </div>

      <div className="onboarding-illustration-list">
        {/* 1 */}
        <div className="onboarding-item onboarding-item-1">
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

        {/* 2 */}
        <div className="onboarding-item onboarding-item-2">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiUploadCloud />
            </div>
            <p className="onboarding-item-name">
              <span>Client uploads docs</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
        </div>

        {/* Read by AI - separate card */}
        <div className="onboarding-item onboarding-item-ai">
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

        {/* 3 */}
        <div className="onboarding-item onboarding-item-3">
          <div className="onboarding-item-row">
            <div className="onboarding-item-icon">
              <FiShield />
            </div>
            <p className="onboarding-item-name">
              <span>Automated checks</span>
              <span className="check-icon">✓</span>
            </p>
          </div>
         
        </div>

        {/* 4 */}
        <div className="onboarding-item onboarding-item-4">
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

        {/* 5 */}
        <div className="onboarding-item onboarding-item-5">
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
    <p className="onboarding-footnote">AML, KYC, SmartSearch & Companies House</p>
    </>
  );
}

/* -------------------------------------------------
   TAX AUTOMATION PANEL
   ------------------------------------------------- */
function TaxPanel() {
  return (
    <div className="tax-automation-section">
      <div className="content-description">
        <h3 className="title-category">Tax Automation</h3>
        <h2 className="title-block">
          Save up to 70% of time<br />spent on tax returns
        </h2>
        <div className="typical-text">
          <p>
            AI-powered document extraction and auto-entry.<br />
            Integrates directly with HMRC, CCH, IRIS & more.
          </p>
        </div>
        <Link href="#" className="btn">
          Explore Tax Automation
        </Link>
      </div>

      <div className="tax-automation-grid">
        {/* ---- LEFT: Mock UI ---- */}
        <div className="tax-preview-card">
          <div className="tax-preview-header">
            <h4 className="tax-preview-title">Your Tax Information</h4>
          </div>

          <div className="tax-preview-body">
            {/* Progress */}
            <div className="tax-progress">
              <div className="tax-progress-label">8 out of 14 completed</div>
              <div className="tax-progress-bar">
                <div className="tax-progress-fill" />
              </div>
            </div>

            {/* Checklist */}
            <div className="tax-checklist">
              <div className="tax-checklist-item completed">
                <span>General</span>
                <span className="tax-check">Check</span>
              </div>
              <div className="tax-checklist-item completed">
                <span>UK Interest</span>
                <span className="tax-check">Check</span>
              </div>
              <div className="tax-checklist-item completed">
                <span>Pension Contributions</span>
                <span className="tax-check">Check</span>
              </div>
              <div className="tax-checklist-item">
                <span>Dividends</span>
              </div>
            </div>

            {/* Signature */}
            <div className="tax-signature-box">
              <span className="tax-signature-label">
                Tax Return Signature Required
              </span>
              <span className="tax-signature-status">Sign Document</span>
              <button className="tax-sign-btn">
                <FiShield className="tax-sign-icon" />
                Sign Document
              </button>
            </div>
          </div>
        </div>

        {/* ---- RIGHT: Feature list ---- */}
        <ul className="tax-features-list">
          <TaxItem
            icon={<FiTrendingUp />}
            text="Automatically pulls in prior-year data"
          />
          <TaxItem
            icon={<FiCpu />}
            text="Pre-filled forms and AI document extraction"
          />
          <TaxItem
            icon={<FiCheckCircle />}
            text="Automated validation checks"
          />
          <TaxItem
            icon={<FiUploadCloud />}
            text="Upload, verify, and categorise client tax info in seconds"
          />
          <TaxItem
            icon={<FiShield />}
            text="Digitally signed documents, secure and fast submissions"
          />
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------
   RE-USABLE COMPONENTS
   ------------------------------------------------- */
function TaxItem({ icon, text }) {
  return (
    <li className="tax-feature-item">
      <span className="tax-feature-icon">{icon}</span>
      <span className="tax-feature-text">{text}</span>
    </li>
  );
}