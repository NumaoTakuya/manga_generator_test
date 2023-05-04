import React from "react";
import { Container, Grid } from "@mui/material";
import NavigationBar from "../components/NavigationBar";


// TODO: 「カラーリングなどをしてから」リファクタリング
const TonesPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Grid container spacing={0} sx={{ height: "200", width: "200" }}>
        <Grid item xs={2}>
          <svg width="200" height="200">
            {/* Gradient */}
            <defs>
              <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#000" />
                <stop offset="100%" stopColor="#FFF" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="200" height="200" fill="url(#Gradient1)" />
          </svg>
        </Grid>
        <Grid item xs={2}>
          <svg width="200" height="200">
            {/* Radial Gradient */}
            <defs>
              <radialGradient id="RadialGradient1" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#000" />
                <stop offset="100%" stopColor="#FFF" />
              </radialGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#RadialGradient1)"
            />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
                <circle cx="25" cy="25" r="10" fill="black" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="200" height="200" fill="url(#PolkaDots)" />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
                <rect x="0" y="0" width="20" height="20" fill="black" />
                <rect x="20" y="20" width="20" height="20" fill="black" />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="200"
              height="200"
              fill="url(#Checkerboard)"
            />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="black"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="200"
              height="200"
              fill="url(#DiagonalLines)"
            />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
                <line
                  x1="0"
                  y1="0"
                  x2="20"
                  y2="20"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="0"
                  y2="20"
                  stroke="black"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="200" height="200" fill="url(#Crosshatch)" />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
        </Grid>
        <Grid item xs={2}>
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
                <rect x="0" y="0" width="10" height="200" fill="black" />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="200"
              height="200"
              fill="url(#VerticalStripes)"
            />
          </svg>
        </Grid>
        <Grid item xs={2}>
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
                  fill="black"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="200" height="200" fill="url(#Stars)" />
          </svg>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TonesPage;