/**
 * Renders a wave-shaped transition between two solid section colors.
 * topColor    = background color of the section above
 * bottomColor = background color of the section below
 */
export default function WaveDivider({ topColor = "#ffffff", bottomColor = "#ffffff", height = 56 }) {
  return (
    <div style={{ lineHeight: 0, display: "block", position: "relative", zIndex: 1 }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fill entire SVG with the top section's color */}
        <rect width="1440" height="56" fill={topColor} />
        {/* Wave shape filled with the bottom section's color */}
        <path
          d="M0,30 C240,56 480,0 720,30 C960,56 1200,0 1440,30 L1440,56 L0,56 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
