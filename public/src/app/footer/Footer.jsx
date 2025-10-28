"use client";
import Link from "next/link";
import { FiYoutube, FiLinkedin } from "react-icons/fi";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="ft-root" role="contentinfo">
      <div className="ft-wrap">
        <div className="ft-brand">
          <Link href="#" className="ft-logo" aria-label="Practice Gateway home">
            <LogoMark />
            <div className="ft-wordmark">
              <span className="ft-sub">PRACTICE</span>
              <span className="ft-main">GATEWAY</span>
            </div>
          </Link>

          <div className="ft-social">
            <a href="#" aria-label="YouTube" className="ft-social-btn"><FiYoutube /></a>
            <a href="#" aria-label="LinkedIn" className="ft-social-btn"><FiLinkedin /></a>
          </div>

          <div className="ft-badges">
            <a href="#" className="ft-badge" aria-label="Download on the App Store">
              <img src="https://practicegateway.com/wp-content/themes/practicegateway/images/app_store.svg" alt="App Store" onError={(e)=>{e.currentTarget.style.display='none'}} />
             
            </a>
            <a href="#" className="ft-badge" aria-label="Get it on Google Play">
              <img src="https://practicegateway.com/wp-content/themes/practicegateway/images/google_play.svg" alt="Google Play" onError={(e)=>{e.currentTarget.style.display='none'}} />
                    </a>
          </div>
        </div>

        <div className="ft-grid">
          <div className="ft-col">
            <div className="ft-title">PRODUCTS</div>
            <Link href="#" className="ft-link">Onboarding</Link>
            <Link href="#" className="ft-link">Tax</Link>
            <Link href="#" className="ft-link">Reporting & Analytics</Link>
            <Link href="#" className="ft-link">Integrations</Link>
            <Link href="#" className="ft-link">AI</Link>
            <Link href="#" className="ft-link">Security</Link>
            <Link href="#" className="ft-link">Document Collab & Compliance</Link>
          </div>

          <div className="ft-col">
            <div className="ft-title">SOLUTIONS</div>
            <Link href="#" className="ft-link">Leadership Team</Link>
            <Link href="#" className="ft-link">Tax Team</Link>
            <Link href="#" className="ft-link">Onboarding Team</Link>
            <Link href="#" className="ft-link">Compliance Team</Link>
            <Link href="#" className="ft-link">IT Team</Link>
          </div>

          <div className="ft-col">
            <div className="ft-title">RESOURCES</div>
            <Link href="#" className="ft-link">Events</Link>
            <Link href="#" className="ft-link">Ebooks & Guides</Link>
            <Link href="#" className="ft-link">Blogs</Link>
            <Link href="#" className="ft-link">Whitepapers</Link>
            <Link href="#" className="ft-link">Webinars</Link>
            <Link href="#" className="ft-link">Case Studies</Link>
          </div>

          <div className="ft-col">
            <div className="ft-title">ABOUT</div>
            <Link href="#" className="ft-link">Our Mission & Story</Link>
            <Link href="#" className="ft-link">Why Us</Link>
            <Link href="#" className="ft-link">Careers</Link>
            <Link href="#" className="ft-link">Contact</Link>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        <div className="ft-bottom-wrap">
          <div className="ft-copy">Copyright ©2025 Practice Gateway</div>
          <div className="ft-legal">
            <Link href="#" className="ft-legal-link">Terms of Use</Link>
            <Link href="#" className="ft-legal-link">Privacy Policy</Link>
            <Link href="#" className="ft-legal-link">Cookies Policy</Link>
          </div>
          <div className="ft-credit">Site by <span className="ft-credit-mark">rudo</span></div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg className="ft-mark" viewBox="0 0 64 28" aria-hidden="true">
      <defs>
        <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB300" />
          <stop offset="50%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#E5003A" />
        </linearGradient>
      </defs>
      <path d="M8 22c-3 0-6-3-6-6s3-6 6-6c3 0 5 2 7 4l1 1 1-1c2-2 4-4 7-4s6 3 6 6-3 6-6 6c-3 0-5-2-7-4l-1-1-1 1c-2 2-4 4-7 4z" fill="url(#fg1)" />
      <rect x="41" y="6" width="5" height="16" rx="2.5" fill="#FF6A00" />
      <rect x="49" y="6" width="5" height="16" rx="2.5" fill="#E5003A" />
    </svg>
  );
}
