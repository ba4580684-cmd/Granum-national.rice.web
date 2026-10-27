import { useId } from "react";

function WheatGold({ id }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop stopColor="#F0D58D" />
      <stop offset=".3" stopColor="#C89C4B" />
      <stop offset=".65" stopColor="#A16D25" />
      <stop offset="1" stopColor="#704414" />
    </linearGradient>
  );
}

function Wheat({ mirror = false }) {
  const goldId = useId();
  return (
    <svg className="brand-wheat" viewBox="0 0 48 22" aria-hidden="true">
      <defs>
        <WheatGold id={goldId} />
      </defs>
      <g transform={mirror ? "translate(48 0) scale(-1 1)" : undefined} fill={`url(#${goldId})`} stroke="#80531C" strokeWidth=".45" strokeLinejoin="round">
        <path d="M3 11 Q24 10 47 12" fill="none" strokeWidth="1.1" />
        <path d="M1 11 Q6 6 12 10 Q7 15 1 11Z" />
        {[8, 15, 22, 29, 36].map((x, index) => {
          const tip = index === 0 ? 4 : index === 4 ? 3 : 1.5;
          return (
            <g key={x}>
              <path d={`M${x + 8} 10.8 C${x + 1} 12 ${x - 2} 7 ${x} ${tip} C${x + 7} ${tip + 1} ${x + 11} 6 ${x + 8} 10.8Z`} />
              <path d={`M${x + 8} 11.3 C${x + 1} 10 ${x - 2} 15 ${x} ${22 - tip} C${x + 7} ${21 - tip} ${x + 11} 16 ${x + 8} 11.3Z`} />
              <path d={`M${x + 7} 10 L${x + 1} ${tip + 2} M${x + 7} 12 L${x + 1} ${20 - tip}`} fill="none" stroke="#E3BE73" strokeWidth=".65" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export default function BrandLogo() {
  const goldId = useId();
  return (
    <span className="brand-logo" role="img" aria-label="Granum Global">
      <svg className="brand-emblem" viewBox="-12 -12 164 164" aria-hidden="true">
        <defs>
          <WheatGold id={goldId} />
        </defs>
        <g fill={`url(#${goldId})`} stroke="#80531C" strokeWidth=".6">
          {[false, true].map((right) => (
            <g key={String(right)} transform={right ? "translate(140 0) scale(-1 1)" : undefined}>
              <path d="M82 136 C-6 112 -5 55 43 13" fill="none" stroke="#80531C" strokeWidth="1.8" />
              {Array.from({ length: 10 }, (_, i) => {
                const t = i / 9;
                const x = 43 - 126 * t + 134 * t * t;
                const y = 17 + 105 * t;
                return (
                  <g key={i} transform={`translate(${x} ${y}) rotate(${-28 - 68 * t})`}>
                    <path d="M0 7 C-9 1 -11 -6 -9 -12 C-2 -8 1 -1 0 7Z" />
                    <path d="M1 8 C1 -3 7 -10 11 -13 C13 -3 8 4 1 8Z" />
                    <path d="M-1 4 L-8 -9 M3 4 L10 -10" fill="none" stroke="#E3BE73" strokeWidth=".7" />
                  </g>
                );
              })}
            </g>
          ))}
        </g>
        <g transform="translate(8.4 9) scale(.88)">
          <text x="28" y="88" fontFamily="Georgia, 'Times New Roman', serif" fontSize="76" fill="#071A2D">G</text>
          <text x="51" y="103" fontFamily="Georgia, 'Times New Roman', serif" fontSize="76" fill={`url(#${goldId})`} stroke="#754510" strokeWidth=".75">G</text>
        </g>
      </svg>
      <span className="brand-wordmark" aria-hidden="true">
        <span className="brand-name">GRANUM</span>
        <span className="brand-global"><Wheat /><span>GLOBAL</span><Wheat mirror /></span>
      </span>
    </span>
  );
}
