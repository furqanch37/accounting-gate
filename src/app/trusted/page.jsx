import "./styles.css";
import LogoImage from "./LogoImage";

export default function Trusted() {
  const brands = [
    { src: "https://practicegateway.com/wp-content/uploads/2025/08/trusted_3.png" },
    {src: "https://practicegateway.com/wp-content/uploads/2025/09/Frame.svg" },
    {src: "https://practicegateway.com/wp-content/uploads/2025/09/Frame-1.svg" },
    {src: "https://practicegateway.com/wp-content/uploads/2025/08/trusted_5.png" },
    {src: "https://practicegateway.com/wp-content/uploads/2025/09/image-36.svg" },
    {src: "https://practicegateway.com/wp-content/uploads/2025/08/trusted_4.png" },
  ];

  return (
    <section className="tr-root fade-anim" data-delay="0.06s">
      <div className="tr-wrap">
        <h2 className="tr-title fade-anim" data-delay="0s">Trusted by Leading<br />UK Accountancy Firms</h2>
        <p className="tr-sub fade-anim" data-delay=".08s">Used by top UK accounting firms, from independent practices to large organisations – Practice Gateway helps teams work faster, smarter, and with greater compliance.</p>

        <div className="tr-logos fade-anim" data-delay=".14s">
          {brands.map((b) => (
            <div key={b.name} className="tr-logo">
              {/* If the image isn't present, fallback to brand text */}
              <LogoImage src={b.src} alt={b.name} className="tr-img" />
              <span className="tr-fallback">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
