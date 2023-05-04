const Checkerboard = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="Checkerboard"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="20" height="20" fill="black" />
          <rect x="20" y="20" width="20" height="20" fill="black" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#Checkerboard)" />
    </svg>
  </div>;
};

export default Checkerboard;
