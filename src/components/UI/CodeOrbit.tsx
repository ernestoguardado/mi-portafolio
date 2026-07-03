import { useState } from 'react';

export default function CodeOrbit({ size = 160 }: { size?: number }) {
  const [fast, setFast] = useState(false);

  const dur = {
    outer: fast ? '3s' : '22s',
    mid:   fast ? '2s' : '16s',
    inner: fast ? '4s' : '30s',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0, cursor: 'pointer' }}
      onMouseEnter={() => setFast(true)}
      onMouseLeave={() => setFast(false)}
      onTouchStart={() => setFast(true)}
      onTouchEnd={() => setFast(false)}
    >
      <defs>
        {/* Glow filter */}
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-strong" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Gradientes para los anillos */}
        <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="grad-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="grad-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
      </defs>

      {/* Halo de fondo central */}
      <circle cx="200" cy="200" r="90" fill="#6366f1" opacity="0.08">
        <animate attributeName="r" values="80;100;80" dur={fast ? '1s' : '4s'} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.08;0.16;0.08" dur={fast ? '1s' : '4s'} repeatCount="indefinite" />
      </circle>

      {/* Anillo exterior */}
      <circle
        cx="200" cy="200" r="185"
        fill="none" stroke="url(#grad-outer)" strokeWidth="3" strokeDasharray="12 6"
        opacity="1" filter="url(#glow)"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>

      {/* Anillo medio */}
      <circle
        cx="200" cy="200" r="148"
        fill="none" stroke="url(#grad-mid)" strokeWidth="2.5" strokeDasharray="6 10"
        opacity="1" filter="url(#glow)"
      >
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>

      {/* Anillo interior */}
      <circle
        cx="200" cy="200" r="108"
        fill="none" stroke="url(#grad-inner)" strokeWidth="2" strokeDasharray="3 8"
        opacity="1" filter="url(#glow)"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.inner} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo exterior */}
      <circle cx="200" cy="15" r="10" fill="#818cf8" filter="url(#glow-strong)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="385" r="7" fill="#6366f1" filter="url(#glow)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="180 200 200" to="540 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo medio */}
      <circle cx="200" cy="52" r="9" fill="#c084fc" filter="url(#glow-strong)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="348" r="6" fill="#a855f7" filter="url(#glow)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="100 200 200" to="-260 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo interior */}
      <circle cx="200" cy="92" r="8" fill="#67e8f9" filter="url(#glow-strong)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="90 200 200" to="450 200 200" dur={dur.inner} repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="308" r="5" fill="#06b6d4" filter="url(#glow)" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="270 200 200" to="630 200 200" dur={dur.inner} repeatCount="indefinite" />
      </circle>

      {/* Símbolo </> con glow */}
      <text
        x="200" y="206"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="monospace"
        fontSize="76"
        fontWeight="900"
        fill="#818cf8"
        filter="url(#glow-strong)"
        opacity="1"
      >
        &lt;/&gt;
      </text>
      {/* Capa base del texto para mayor solidez */}
      <text
        x="200" y="206"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="monospace"
        fontSize="76"
        fontWeight="900"
        fill="#6366f1"
        opacity="1"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}
