import Link from "next/link";
import "./styles.css";

export default function Why() {
  return (
    <section className="why-root fade-anim" data-delay="0.08s">
      <div className="why-wrap">
        <div className="why-eyebrow">Why Practice Gateway Exists</div>
        <h2 className="why-title">Free Your Team from Admin.<br />Focus on What Matters.</h2>
        <p className="why-sub">Modern accounting firms are held back by fragmented legacy software, manual admin, causing inconsistent client experiences. Practice Gateway was built to fix that.</p>

        <div className="why-video">
          <div className="why-video-frame">
            <button className="why-play" type="button" aria-label="Play video">
              <span className="why-play-triangle" />
            </button>
          </div>
        </div>

        <div className="why-cards">
          <div className="why-card">
            <div className="why-card-body">
              <p>Practice Gateway is a platform designed with your firm’s branding that offers a seamless experience for clients and accountants alike.</p>
            </div>
            <div className="why-card-illus why-illus-1" />
          </div>
          <div className="why-card">
            <div className="why-card-body">
              <p>Practice Gateway is a platform designed with your firm’s branding that offers a seamless experience for clients and accountants alike.</p>
            </div>
            <div className="why-card-illus why-illus-2" />
          </div>
          <div className="why-card">
            <div className="why-card-body">
              <p>Practice Gateway is a platform designed with your firm’s branding that offers a seamless experience for clients and accountants alike.</p>
            </div>
            <div className="why-card-illus why-illus-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
