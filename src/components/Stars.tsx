type Star = { cx: number; cy: number; r: number; o: number; fill?: string };

const tiny: Star[] = [
  { cx: 47,   cy: 73,  r: 0.7, o: 0.28 },
  { cx: 112,  cy: 31,  r: 0.6, o: 0.22 },
  { cx: 178,  cy: 58,  r: 0.8, o: 0.18 },
  { cx: 243,  cy: 87,  r: 0.7, o: 0.31 },
  { cx: 315,  cy: 24,  r: 0.6, o: 0.25 },
  { cx: 382,  cy: 68,  r: 0.7, o: 0.19 },
  { cx: 453,  cy: 91,  r: 0.8, o: 0.27 },
  { cx: 574,  cy: 42,  r: 0.6, o: 0.23 },
  { cx: 703,  cy: 83,  r: 0.7, o: 0.21 },
  { cx: 819,  cy: 61,  r: 0.8, o: 0.29 },
  { cx: 941,  cy: 29,  r: 0.6, o: 0.24 },
  { cx: 1063, cy: 72,  r: 0.7, o: 0.18 },
  { cx: 1183, cy: 51,  r: 0.8, o: 0.32 },
  { cx: 1302, cy: 86,  r: 0.6, o: 0.21 },
  { cx: 1412, cy: 43,  r: 0.7, o: 0.26 },
  { cx: 82,   cy: 183, r: 0.7, o: 0.26 },
  { cx: 238,  cy: 152, r: 0.6, o: 0.20 },
  { cx: 419,  cy: 168, r: 0.8, o: 0.28 },
  { cx: 553,  cy: 147, r: 0.7, o: 0.22 },
  { cx: 698,  cy: 189, r: 0.6, o: 0.17 },
  { cx: 843,  cy: 164, r: 0.8, o: 0.31 },
  { cx: 1023, cy: 148, r: 0.7, o: 0.19 },
  { cx: 1213, cy: 177, r: 0.6, o: 0.25 },
  { cx: 1362, cy: 158, r: 0.7, o: 0.23 },
  { cx: 47,   cy: 347, r: 0.6, o: 0.21 },
  { cx: 178,  cy: 323, r: 0.7, o: 0.27 },
  { cx: 315,  cy: 378, r: 0.8, o: 0.18 },
  { cx: 453,  cy: 352, r: 0.6, o: 0.24 },
  { cx: 618,  cy: 334, r: 0.7, o: 0.22 },
  { cx: 751,  cy: 361, r: 0.8, o: 0.29 },
  { cx: 877,  cy: 338, r: 0.6, o: 0.20 },
  { cx: 998,  cy: 372, r: 0.7, o: 0.26 },
  { cx: 1121, cy: 347, r: 0.8, o: 0.18 },
  { cx: 1302, cy: 363, r: 0.6, o: 0.31 },
  { cx: 82,   cy: 543, r: 0.7, o: 0.23 },
  { cx: 238,  cy: 521, r: 0.6, o: 0.19 },
  { cx: 419,  cy: 573, r: 0.8, o: 0.27 },
  { cx: 553,  cy: 548, r: 0.7, o: 0.22 },
  { cx: 698,  cy: 513, r: 0.6, o: 0.18 },
  { cx: 843,  cy: 561, r: 0.8, o: 0.30 },
  { cx: 1023, cy: 527, r: 0.7, o: 0.24 },
  { cx: 1213, cy: 559, r: 0.6, o: 0.21 },
  { cx: 1362, cy: 538, r: 0.7, o: 0.17 },
  { cx: 38,   cy: 743, r: 0.6, o: 0.26 },
  { cx: 198,  cy: 769, r: 0.7, o: 0.20 },
  { cx: 348,  cy: 781, r: 0.8, o: 0.23 },
  { cx: 513,  cy: 743, r: 0.6, o: 0.19 },
  { cx: 663,  cy: 762, r: 0.7, o: 0.28 },
  { cx: 821,  cy: 747, r: 0.8, o: 0.22 },
  { cx: 973,  cy: 779, r: 0.6, o: 0.17 },
  { cx: 1108, cy: 758, r: 0.7, o: 0.25 },
  { cx: 1267, cy: 771, r: 0.8, o: 0.20 },
  { cx: 1412, cy: 742, r: 0.6, o: 0.22 },
];

const small: Star[] = [
  { cx: 163,  cy: 112, r: 1.1, o: 0.42 },
  { cx: 361,  cy: 128, r: 1.2, o: 0.38 },
  { cx: 574,  cy: 111, r: 1.0, o: 0.45, fill: "rgb(255,242,210)" },
  { cx: 759,  cy: 138, r: 1.3, o: 0.40 },
  { cx: 1089, cy: 122, r: 1.1, o: 0.37, fill: "rgb(210,230,255)" },
  { cx: 1362, cy: 109, r: 1.2, o: 0.43 },
  { cx: 163,  cy: 448, r: 1.0, o: 0.39 },
  { cx: 497,  cy: 428, r: 1.3, o: 0.44, fill: "rgb(255,242,210)" },
  { cx: 751,  cy: 461, r: 1.1, o: 0.36 },
  { cx: 1023, cy: 442, r: 1.2, o: 0.41, fill: "rgb(210,230,255)" },
  { cx: 1291, cy: 431, r: 1.0, o: 0.38 },
  { cx: 297,  cy: 648, r: 1.1, o: 0.38 },
  { cx: 627,  cy: 672, r: 1.3, o: 0.42, fill: "rgb(255,242,210)" },
  { cx: 963,  cy: 658, r: 1.0, o: 0.36 },
  { cx: 1183, cy: 641, r: 1.2, o: 0.44, fill: "rgb(210,230,255)" },
  { cx: 129,  cy: 863, r: 1.1, o: 0.35 },
  { cx: 740,  cy: 858, r: 1.0, o: 0.37 },
  { cx: 1341, cy: 871, r: 1.2, o: 0.38, fill: "rgb(255,242,210)" },
];

const medium: Star[] = [
  { cx: 189,  cy: 222, r: 1.8, o: 0.62, fill: "rgb(255,242,210)" },
  { cx: 521,  cy: 278, r: 1.6, o: 0.55 },
  { cx: 843,  cy: 241, r: 2.0, o: 0.70, fill: "rgb(210,230,255)" },
  { cx: 1143, cy: 198, r: 1.7, o: 0.58 },
  { cx: 402,  cy: 481, r: 1.8, o: 0.60, fill: "rgb(255,242,210)" },
  { cx: 1001, cy: 501, r: 1.9, o: 0.65, fill: "rgb(210,230,255)" },
  { cx: 277,  cy: 741, r: 1.6, o: 0.52 },
  { cx: 891,  cy: 763, r: 2.0, o: 0.68, fill: "rgb(255,242,210)" },
];

// Bright stars render with a soft glow halo
const bright: Star[] = [
  { cx: 703,  cy: 176, r: 2.2, o: 0.85 },
  { cx: 1302, cy: 463, r: 2.4, o: 0.78, fill: "rgb(255,248,220)" },
  { cx: 189,  cy: 612, r: 2.0, o: 0.82, fill: "rgb(220,235,255)" },
  { cx: 1050, cy: 312, r: 2.3, o: 0.80 },
];

export default function Stars() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    >
      {/* Nebula gradient hazes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(ellipse 65% 55% at 8% 18%, rgba(20,184,166,0.13) 0%, transparent 60%)",
            "radial-gradient(ellipse 55% 45% at 92% 82%, rgba(249,115,22,0.10) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 35% at 55% 5%, rgba(99,102,241,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 30% 25% at 15% 90%, rgba(249,115,22,0.06) 0%, transparent 45%)",
          ].join(", "),
        }}
      />

      {/* Star field */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {tiny.map((s, i) => (
          <circle key={`t${i}`} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill ?? "white"} fillOpacity={s.o} />
        ))}
        {small.map((s, i) => (
          <circle key={`s${i}`} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill ?? "white"} fillOpacity={s.o} />
        ))}
        {medium.map((s, i) => (
          <circle key={`m${i}`} cx={s.cx} cy={s.cy} r={s.r} fill={s.fill ?? "white"} fillOpacity={s.o} />
        ))}
        {bright.map((s, i) => (
          <g key={`b${i}`}>
            <circle cx={s.cx} cy={s.cy} r={s.r * 4} fill={s.fill ?? "white"} fillOpacity={0.025} />
            <circle cx={s.cx} cy={s.cy} r={s.r * 2} fill={s.fill ?? "white"} fillOpacity={0.07} />
            <circle cx={s.cx} cy={s.cy} r={s.r} fill={s.fill ?? "white"} fillOpacity={s.o} />
          </g>
        ))}
      </svg>

      {/* Subtle scanlines for retro texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.018) 2px, rgba(0,0,0,0.018) 4px)",
        }}
      />
    </div>
  );
}
