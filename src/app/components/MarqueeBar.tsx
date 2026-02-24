export function MarqueeBar() {
  return (
    <div 
      style={{ 
        backgroundColor: "#FF7A00",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid rgba(11,60,93,0.1)"
      }} 
      className="w-full py-2.5"
    >
      <div className="marquee-container">
        <div className="marquee-content">
          <span 
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "0 3rem",
              whiteSpace: "nowrap"
            }}
          >
            ✦ A Journey Towards Skill Development ✦
          </span>
          <span 
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "0 3rem",
              whiteSpace: "nowrap"
            }}
          >
            ✦ A Journey Towards Skill Development ✦
          </span>
          <span 
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "0 3rem",
              whiteSpace: "nowrap"
            }}
          >
            ✦ A Journey Towards Skill Development ✦
          </span>
          <span 
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              padding: "0 3rem",
              whiteSpace: "nowrap"
            }}
          >
            ✦ A Journey Towards Skill Development ✦
          </span>
        </div>
      </div>

      <style>
        {`
          .marquee-container {
            display: flex;
            width: 100%;
          }

          .marquee-content {
            display: flex;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-content:hover {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .marquee-content span {
              font-size: 0.85rem !important;
              padding: 0 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .marquee-content span {
              font-size: 0.75rem !important;
              padding: 0 1.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}
