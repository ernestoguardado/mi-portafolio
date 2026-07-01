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
      {/* Anillo exterior */}
      <circle cx="200" cy="200" r="185" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="8 5" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>

      {/* Anillo medio */}
      <circle cx="200" cy="200" r="148" fill="none" stroke="#a855f7" strokeWidth="2.2" strokeDasharray="4 8" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>

      {/* Anillo interior */}
      <circle cx="200" cy="200" r="108" fill="none" stroke="#06b6d4" strokeWidth="1.8" strokeDasharray="2 6" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.inner} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo exterior */}
      <circle cx="200" cy="15" r="8" fill="#6366f1" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="385" r="6" fill="#6366f1" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="180 200 200" to="540 200 200" dur={dur.outer} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo medio */}
      <circle cx="200" cy="52" r="7" fill="#a855f7" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="348" r="5" fill="#a855f7" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="100 200 200" to="-260 200 200" dur={dur.mid} repeatCount="indefinite" />
      </circle>

      {/* Puntos — anillo interior */}
      <circle cx="200" cy="92" r="6" fill="#06b6d4" opacity="1">
        <animateTransform attributeName="transform" type="rotate" from="90 200 200" to="450 200 200" dur={dur.inner} repeatCount="indefinite" />
      </circle>

      {/* Pulso central */}
      <circle cx="200" cy="200" r="58" fill="#6366f1" opacity="0.07">
        <animate attributeName="r" values="52;66;52" dur={fast ? '1s' : '4s'} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.07;0.14;0.07" dur={fast ? '1s' : '4s'} repeatCount="indefinite" />
      </circle>

      {/* Símbolo </> */}
      <text
        x="200" y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="monospace"
        fontSize="72"
        fontWeight="800"
        fill="#6366f1"
        opacity="1"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}
