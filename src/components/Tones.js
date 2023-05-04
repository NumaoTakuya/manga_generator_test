const Gradient = (colors) => (
  <svg width="200" height="200">
    {/* Gradient */}
    <defs>
      <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#Gradient1)" />
  </svg>
);

const RadialGradient = (colors) => (
  <svg width="200" height="200">
    {/* Radial Gradient */}
    <defs>
      <radialGradient id="RadialGradient1" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#RadialGradient1)" />
  </svg>
);

const PolkaDots = (color) => (
  <svg width="200" height="200">
    {/* Polka Dots */}
    <defs>
      <pattern
        id="PolkaDots"
        x="0"
        y="0"
        width="50"
        height="50"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="25" cy="25" r="10" fill={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#PolkaDots)" />
  </svg>
);

const Checkerboard = (color) => (
  <svg width="200" height="200">
    {/* Checkerboard */}
    <defs>
      <pattern
        id="Checkerboard"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="20" height="20" fill={color} />
        <rect x="20" y="20" width="20" height="20" fill={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#Checkerboard)" />
  </svg>
);

const DiagonalLines = (color) => (
  <svg width="200" height="200">
    {/* Diagonal Lines */}
    <defs>
      <pattern
        id="DiagonalLines"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth="1" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#DiagonalLines)" />
  </svg>
);

const Crosshatch = (color) => (
  <svg width="200" height="200">
    {/* Crosshatch */}
    <defs>
      <pattern
        id="Crosshatch"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <line x1="0" y1="0" x2="20" y2="20" stroke={color} strokeWidth="2" />
        <line x1="20" y1="0" x2="0" y2="20" stroke={color} strokeWidth="2" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#Crosshatch)" />
  </svg>
);

const HorizontalStripes = (color) => (
  <svg width="200" height="200">
    {/* Horizontal Stripes */}
    <defs>
      <pattern
        id="HorizontalStripes"
        x="0"
        y="0"
        width="200"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="200" height="10" fill={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#HorizontalStripes)" />
  </svg>
);

const VerticalStripes = (color) => (
  <svg width="200" height="200">
    {/* Vertical Stripes */}
    <defs>
      <pattern
        id="VerticalStripes"
        x="0"
        y="0"
        width="20"
        height="200"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="10" height="200" fill={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#VerticalStripes)" />
  </svg>
);

const Stars = (color) => (
  <svg width="200" height="200">
    {/* Stars */}
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
          fill={color}
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="200" fill="url(#Stars)" />
  </svg>
);

export {
  Gradient,
  RadialGradient,
  PolkaDots,
  Checkerboard,
  DiagonalLines,
  Crosshatch,
  HorizontalStripes,
  VerticalStripes,
  Stars,
};
