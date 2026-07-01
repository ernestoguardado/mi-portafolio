export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '50%', maxWidth: '500px', minWidth: '280px', opacity: 0.13 }}
      >
        {/* Anillo exterior rotante */}
        <circle cx="200" cy="200" r="185" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="8 5">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="22s" repeatCount="indefinite" />
        </circle>

        {/* Anillo medio rotante inverso */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#a855f7" strokeWidth="0.8" strokeDasharray="4 8">
          <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="16s" repeatCount="indefinite" />
        </circle>

        {/* Anillo interior */}
        <circle cx="200" cy="200" r="110" fill="none" stroke="#06b6d4" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.7">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite" />
        </circle>

        {/* Punto orbitante exterior */}
        <circle cx="200" cy="15" r="6" fill="#6366f1">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="22s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="385" r="4" fill="#a855f7" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="180 200 200" to="540 200 200" dur="22s" repeatCount="indefinite" />
        </circle>

        {/* Punto orbitante medio */}
        <circle cx="200" cy="50" r="5" fill="#a855f7">
          <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="16s" repeatCount="indefinite" />
        </circle>

        {/* Punto orbitante interior */}
        <circle cx="200" cy="90" r="4" fill="#06b6d4">
          <animateTransform attributeName="transform" type="rotate" from="90 200 200" to="450 200 200" dur="30s" repeatCount="indefinite" />
        </circle>

        {/* Símbolo </> centrado */}
        <text
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="monospace"
          fontSize="72"
          fontWeight="800"
          fill="#6366f1"
          opacity="0.9"
        >
          &lt;/&gt;
        </text>

        {/* Pulso suave detrás del símbolo */}
        <circle cx="200" cy="200" r="60" fill="#6366f1" opacity="0.06">
          <animate attributeName="r" values="55;70;55" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.06;0.12;0.06" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
