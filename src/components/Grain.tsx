export default function Grain() {
  return (
    <>
      {/* low-frequency cloud layer — textures the gradient */}
      <div
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.12, mixBlendMode: "overlay" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="clouds">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="5" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#clouds)" />
        </svg>
      </div>
      {/* fine film grain on top of everything */}
      <div
        aria-hidden="true"
        style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: "55%", pointerEvents: "none", zIndex: 9999, opacity: 0.13, maskImage: "linear-gradient(to top, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </>
  );
}
