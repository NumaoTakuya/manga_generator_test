const RadialGradient = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <radialGradient id="RadialGradient1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000" />
          <stop offset="100%" stopColor="#FFF" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#RadialGradient1)" />
    </svg>
  </div>;
};

export default RadialGradient;
