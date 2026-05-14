import { useMemo } from "react";

const PARTICLES = [
  { tx:  65, ty:   0, size: 4, delay: 0.000 },
  { tx:  54, ty:  22, size: 3, delay: 0.022 },
  { tx:  51, ty:  51, size: 4, delay: 0.044 },
  { tx:  21, ty:  51, size: 3, delay: 0.066 },
  { tx:   0, ty:  68, size: 5, delay: 0.088 },
  { tx: -23, ty:  55, size: 3, delay: 0.110 },
  { tx: -53, ty:  53, size: 4, delay: 0.132 },
  { tx: -48, ty:  20, size: 3, delay: 0.154 },
  { tx: -65, ty:   0, size: 4, delay: 0.176 },
  { tx: -65, ty: -27, size: 3, delay: 0.198 },
  { tx: -40, ty: -40, size: 4, delay: 0.220 },
  { tx: -25, ty: -59, size: 3, delay: 0.242 },
  { tx:   0, ty: -72, size: 5, delay: 0.264 },
  { tx:  22, ty: -54, size: 3, delay: 0.286 },
  { tx:  48, ty: -48, size: 4, delay: 0.308 },
  { tx:  55, ty: -23, size: 3, delay: 0.330 },
];

const DURATION = 7;

// Per-particle keyframes with hardcoded coordinates — avoids CSS custom
// property limitations in @keyframes on iOS Safari.
function buildParticleKeyframes(): string {
  return PARTICLES.map((p, i) => {
    const mx = Math.round(p.tx * 0.12);
    const my = Math.round(p.ty * 0.12);
    return `
      @keyframes mp${i} {
        0%,  26% { opacity: 0;   transform: translate(0px, 0px) scale(0); }
        33%      { opacity: 0.9; transform: translate(${mx}px, ${my}px) scale(1); }
        54%      { opacity: 0;   transform: translate(${p.tx}px, ${p.ty}px) scale(0.15); }
        100%     { opacity: 0;   transform: translate(${p.tx}px, ${p.ty}px) scale(0.15); }
      }
    `;
  }).join("");
}

interface Props {
  playing: boolean;
}

const DissolveAnimation = ({ playing }: Props) => {
  const particleCSS = useMemo(buildParticleKeyframes, []);
  const playState = playing ? "running" : "paused";

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 220, height: 220 }}
      aria-hidden="true"
      role="presentation"
    >
      {/* Inject per-particle keyframes once */}
      <style>{particleCSS}</style>

      {/* Ripple ring */}
      <div
        className="absolute rounded-full border border-[#1CC5DC]/40"
        style={{
          width: 22,
          height: 22,
          animation: `marker-ripple ${DURATION}s ease-out infinite`,
          animationPlayState: playState,
        }}
      />

      {/* Core dot */}
      <div
        className="absolute rounded-full bg-[#1CC5DC]"
        style={{
          width: 18,
          height: 18,
          animation: `marker-core ${DURATION}s ease-in-out infinite`,
          animationPlayState: playState,
        }}
      />

      {/* Particles — each uses its own named keyframe */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#1CC5DC]"
          style={{
            width: p.size,
            height: p.size,
            animation: `mp${i} ${DURATION}s ease-out infinite`,
            animationDelay: `${p.delay}s`,
            animationPlayState: playState,
          }}
        />
      ))}

      {/* "no trace" label */}
      <p
        className="absolute text-[10px] font-semibold uppercase text-[#1CC5DC]/70 tracking-widest whitespace-nowrap"
        style={{
          animation: `marker-label ${DURATION}s ease-in-out infinite`,
          animationPlayState: playState,
        }}
      >
        no trace
      </p>
    </div>
  );
};

export default DissolveAnimation;
