const HorizontalStripes = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="HorizontalStripes"
          x="0"
          y="0"
          width="200"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="200" height="10" fill="black" />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="url(#HorizontalStripes)"
      />
    </svg>
  </div>;
};

export default HorizontalStripes;
