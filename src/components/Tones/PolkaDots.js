const PolkaDots = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="PolkaDots"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="25" cy="25" r="10" fill="black" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#PolkaDots)" />
    </svg>
  </div>;
};

export default PolkaDots;
