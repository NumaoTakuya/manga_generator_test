const VerticalStripes = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="VerticalStripes"
          x="0"
          y="0"
          width="20"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="10" height="200" fill="black" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#VerticalStripes)" />
    </svg>
  </div>;
};

export default VerticalStripes;
