const Stars = () => {
  <div>
    <svg width="200" height="200">
      <defs>
        <pattern
          id="Stars"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="25,5 32,20 50,20 35,30 40,47 25,35 10,47 15,30 0,20 18,20"
            fill="black"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#Stars)" />
    </svg>
  </div>;
};

export default Stars;
