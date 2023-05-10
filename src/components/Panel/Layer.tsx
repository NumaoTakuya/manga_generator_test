import React, { ReactNode } from "react";

interface LayerProps {
  children: ReactNode;
  zIndex: number;
}

const Layer = ({ children, zIndex }: LayerProps): JSX.Element => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: zIndex,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Layer;