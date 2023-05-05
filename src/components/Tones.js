import React from "react"; 

const HorizontalGradient = (colors, size) => (
  <svg width={size.width} height={size.height}>
    {/* HorizontalGradient */}
    <defs>
      <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </linearGradient>
    </defs>
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#Gradient1)"
    />
  </svg>
);

const VerticalGradient = (colors, size) => (
  <svg width={size.width} height={size.height}>
    {/* VerticalGradient */}
    <defs>
      <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </linearGradient>
    </defs>
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#Gradient1)"
      transform="rotate(90, 100, 100)"
    />
  </svg>
);

const RadialGradient = (colors, size) => (
  <svg width={size.width} height={size.height}>
    {/* Radial Gradient */}
    <defs>
      <radialGradient id="RadialGradient1" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="100%" stopColor={colors[1]} />
      </radialGradient>
    </defs>
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#RadialGradient1)"
    />
  </svg>
);

const PolkaDots = (color, size) => (
  <svg width={size.width} height={size.height}>
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
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#PolkaDots)"
    />
  </svg>
);

const Checkerboard = (color, size) => (
  <svg width={size.width} height={size.height}>
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
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#Checkerboard)"
    />
  </svg>
);

const DiagonalLines = (color, size) => (
  <svg width={size.width} height={size.height}>
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
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#DiagonalLines)"
    />
  </svg>
);

const Crosshatch = (color, size) => (
  <svg width={size.width} height={size.height}>
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
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#Crosshatch)"
    />
  </svg>
);

const HorizontalStripes = (color, size) => (
  <svg width={size.width} height={size.height}>
    {/* Horizontal Stripes */}
    <defs>
      <pattern
        id="HorizontalStripes"
        x="0"
        y="0"
        width={size.width}
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width={size.width} height="10" fill={color} />
      </pattern>
    </defs>
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#HorizontalStripes)"
    />
  </svg>
);

const VerticalStripes = (color, size) => (
  <svg width={size.width} height={size.height}>
    {/* Vertical Stripes */}
    <defs>
      <pattern
        id="VerticalStripes"
        x="0"
        y="0"
        width="20"
        height={size.height}
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="10" height={size.height} fill={color} />
      </pattern>
    </defs>
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#VerticalStripes)"
    />
  </svg>
);

const Stars = (color, size) => (
  <svg width={size.width} height={size.height}>
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
    <rect
      x="0"
      y="0"
      width={size.width}
      height={size.height}
      fill="url(#Stars)"
    />
  </svg>
);

export {
  HorizontalGradient,
  VerticalGradient,
  RadialGradient,
  PolkaDots,
  Checkerboard,
  DiagonalLines,
  Crosshatch,
  HorizontalStripes,
  VerticalStripes,
  Stars,
};
