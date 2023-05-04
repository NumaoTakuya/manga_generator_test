const DiagonalLines = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="DiagonalLines"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="10" stroke="black" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#DiagonalLines)" />
    </svg>
  </div>;
};

export default DiagonalLines;
