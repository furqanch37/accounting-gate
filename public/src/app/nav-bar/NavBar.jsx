"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiUsers, FiFileText } from "react-icons/fi";
import "./styles.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState({
    product: false,
    solutions: false,
    resources: false,
    about: false,
  });
  const [desktopOpen, setDesktopOpen] = useState(null); // 'product' | 'solutions' | 'resources' | 'about' | null
  const headerRef = useRef(null);

  // Close desktop dropdowns on outside click or Esc
  useEffect(() => {
    function handleDown(e){
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setDesktopOpen(null);
    }
    function handleKey(e){ if (e.key === 'Escape') setDesktopOpen(null); }
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('mousedown', handleDown); document.removeEventListener('keydown', handleKey); };
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  function toggleMobile(section) {
    setMobileSections((s) => {
      const next = { product: false, solutions: false, resources: false, about: false };
      // toggle off if same section is already open
      if (!s[section]) next[section] = true;
      return next;
    });
  }

  function onMobileLinkClick() {
    setOpen(false);
    setMobileSections({ product: false, solutions: false, resources: false, about: false });
  }

  return (
    <>
      <div className="nb-bg-image">
        <img src="/assests/bg-temp.png" alt="" />
      </div>
      <header className="nb-shell" role="banner" ref={headerRef}>
        <div className="nb-inner">
          <Link href="#" className="nb-brand" aria-label="Practice Gateway home">
            <LogoMark />
            <div className="nb-wordmark">
              <span className="nb-wordmark-sub">PRACTICE</span>
              <span className="nb-wordmark-main">GATEWAY</span>
            </div>
          </Link>

          <nav className="nb-nav" aria-label="Primary">
            <div className={"nb-item "+(desktopOpen==='product'?'is-open':'')}>
              <button className="nb-nav-item nb-trigger" type="button" aria-haspopup="menu" aria-expanded={desktopOpen==='product'} onClick={() => setDesktopOpen(desktopOpen==='product'?null:'product')}>
                <span>Product</span>
                <FiChevronDown className="nb-chev" />
              </button>
              <div className="nb-panel" role="menu" aria-label="Product">
                <div className="nb-panel-grid">
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">PRODUCTS</div>
                    <a href="#" className="nb-panel-link">
                      <span className="nb-icon"><FiUsers /></span>
                      <div className="nb-panel-text">
                        <div className="nb-panel-link-title">Onboarding</div>
                        <div className="nb-panel-desc">Replace email chains and siloed tools with one secure platform</div>
                      </div>
                    </a>
                    <a href="#" className="nb-panel-link">
                      <span className="nb-icon"><FiFileText /></span>
                      <div className="nb-panel-text">
                        <div className="nb-panel-link-title">Tax</div>
                        <div className="nb-panel-desc">Automation software built specifically for accountancy firms</div>
                      </div>
                    </a>
                  </div>
                  <div className="nb-panel-divider" />
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">PLATFORM</div>
                    <a href="#" className="nb-panel-bullet">Reporting & Analytics</a>
                    <a href="#" className="nb-panel-bullet">Integrations</a>
                    <a href="#" className="nb-panel-bullet">AI</a>
                    <a href="#" className="nb-panel-bullet">Security</a>
                    <a href="#" className="nb-panel-bullet">Document Collab & Compliance</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"nb-item "+(desktopOpen==='solutions'?'is-open':'')}>
              <button className="nb-nav-item nb-trigger" type="button" aria-haspopup="menu" aria-expanded={desktopOpen==='solutions'} onClick={() => setDesktopOpen(desktopOpen==='solutions'?null:'solutions')}>
                <span>Solutions</span>
                <FiChevronDown className="nb-chev" />
              </button>
              <div className="nb-panel" role="menu" aria-label="Solutions">
                <div className="nb-panel-grid">
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">BY FIRM SIZE</div>
                    <a href="#" className="nb-panel-bullet">Small Firms</a>
                    <a href="#" className="nb-panel-bullet">Mid-Market</a>
                    <a href="#" className="nb-panel-bullet">Enterprise</a>
                  </div>
                  <div className="nb-panel-divider" />
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">BY ROLE</div>
                    <a href="#" className="nb-panel-bullet">Partners</a>
                    <a href="#" className="nb-panel-bullet">Operations</a>
                    <a href="#" className="nb-panel-bullet">IT & Security</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={"nb-item "+(desktopOpen==='resources'?'is-open':'')}>
              <button className="nb-nav-item nb-trigger" type="button" aria-haspopup="menu" aria-expanded={desktopOpen==='resources'} onClick={() => setDesktopOpen(desktopOpen==='resources'?null:'resources')}>
                <span>Resources</span>
                <FiChevronDown className="nb-chev" />
              </button>
              <div className="nb-panel" role="menu" aria-label="Resources">
                <div className="nb-panel-grid">
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">LEARN</div>
                    <a href="#" className="nb-panel-bullet">Blog</a>
                    <a href="#" className="nb-panel-bullet">Guides</a>
                    <a href="#" className="nb-panel-bullet">Webinars</a>
                  </div>
                  <div className="nb-panel-divider" />
                  <div className="nb-panel-col">
                    <div className="nb-panel-title">CUSTOMERS</div>
                    <a href="#" className="nb-panel-bullet">Case Studies</a>
                    <a href="#" className="nb-panel-bullet">Community</a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="nb-link">Case Studies</Link>

            <div className={"nb-item "+(desktopOpen==='about'?'is-open':'')}>
              <button className="nb-nav-item nb-trigger" type="button" aria-haspopup="menu" aria-expanded={desktopOpen==='about'} onClick={() => setDesktopOpen(desktopOpen==='about'?null:'about')}>
                <span>About</span>
                <FiChevronDown className="nb-chev" />
              </button>
              <div className="nb-panel" role="menu" aria-label="About">
                <div className="nb-panel-grid nb-panel-grid-simple">
                  <a href="#" className="nb-panel-bullet">Company</a>
                  <a href="#" className="nb-panel-bullet">Careers</a>
                  <a href="#" className="nb-panel-bullet">Newsroom</a>
                  <a href="#" className="nb-panel-bullet">Contact</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="nb-cta-wrap">
            <Link href="#" className="nb-cta">Let’s Talk</Link>
          </div>

          <button
            aria-expanded={open}
            aria-controls="nb-mobile"
            className="nb-burger"
            onClick={() => setOpen(v => !v)}
            type="button"
          >
            <span className="nb-burger-bar" />
            <span className="nb-burger-bar" />
            <span className="nb-burger-bar" />
          </button>
        </div>
      </header>

      <div className={"nb-drawer " + (open ? "is-open" : "") } id="nb-mobile">
        <div className="nb-drawer-head">
          <Link href="#" className="nb-brand" aria-label="Practice Gateway home">
            <LogoMark />
            <div className="nb-wordmark">
              <span className="nb-wordmark-sub">PRACTICE</span>
              <span className="nb-wordmark-main">GATEWAY</span>
            </div>
          </Link>
          <button className="nb-close" onClick={() => setOpen(false)} type="button" aria-label="Close menu">×</button>
        </div>
        <div className="nb-drawer-nav">
          <div className={"nb-acc-item " + (mobileSections.product ? "is-open" : "") }>
            <button
              className="nb-acc-trigger"
              type="button"
              aria-expanded={mobileSections.product}
              onClick={() => toggleMobile('product')}
            >
              <span>Product</span>
              <FiChevronDown className="nb-acc-chev" />
            </button>
            <div className="nb-acc-panel">
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Onboarding</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Tax</a>
            </div>
          </div>

          <div className={"nb-acc-item " + (mobileSections.solutions ? "is-open" : "") }>
            <button
              className="nb-acc-trigger"
              type="button"
              aria-expanded={mobileSections.solutions}
              onClick={() => toggleMobile('solutions')}
            >
              <span>Solutions</span>
              <FiChevronDown className="nb-acc-chev" />
            </button>
            <div className="nb-acc-panel">
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Small Firms</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Mid-Market</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Enterprise</a>
            </div>
          </div>

          <div className={"nb-acc-item " + (mobileSections.resources ? "is-open" : "") }>
            <button
              className="nb-acc-trigger"
              type="button"
              aria-expanded={mobileSections.resources}
              onClick={() => toggleMobile('resources')}
            >
              <span>Resources</span>
              <FiChevronDown className="nb-acc-chev" />
            </button>
            <div className="nb-acc-panel">
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Blog</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Guides</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Webinars</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Case Studies</a>
            </div>
          </div>

          <Link href="#" className="nb-drawer-link">Case Studies</Link>

          <div className={"nb-acc-item " + (mobileSections.about ? "is-open" : "") }>
            <button
              className="nb-acc-trigger"
              type="button"
              aria-expanded={mobileSections.about}
              onClick={() => toggleMobile('about')}
            >
              <span>About</span>
              <FiChevronDown className="nb-acc-chev" />
            </button>
            <div className="nb-acc-panel">
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Company</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Careers</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Newsroom</a>
              <a href="#" className="nb-acc-link" onClick={onMobileLinkClick}>Contact</a>
            </div>
          </div>
        </div>
        <div className="nb-drawer-cta">
          <Link href="#" className="nb-cta nb-cta-block">Let’s Talk</Link>
        </div>
      </div>
      {open && <div className="nb-scrim" onClick={() => setOpen(false)} />}
    </>
  );
}

function LogoMark() {
  return (
    <svg className="nb-logo" viewBox="0 0 64 28" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB300" />
          <stop offset="50%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#E5003A" />
        </linearGradient>
      </defs>
      <path d="M8 22c-3 0-6-3-6-6s3-6 6-6c3 0 5 2 7 4l1 1 1-1c2-2 4-4 7-4s6 3 6 6-3 6-6 6c-3 0-5-2-7-4l-1-1-1 1c-2 2-4 4-7 4z" fill="url(#g1)" />
      <rect x="41" y="6" width="5" height="16" rx="2.5" fill="#FF6A00" />
      <rect x="49" y="6" width="5" height="16" rx="2.5" fill="#E5003A" />
    </svg>
  );
}
