const Gradient = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#000" />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient1)" />
    </svg>
  </div>;
};

export default Gradient;
