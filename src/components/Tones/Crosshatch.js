const Crosshatch = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="Crosshatch"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="2" />
          <line x1="20" y1="0" x2="0" y2="20" stroke="black" strokeWidth="2" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#Crosshatch)" />
    </svg>
  </div>;
};

export default Crosshatch;
