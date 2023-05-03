import React from "react";
import { Container } from "@mui/material";
import NavigationBar from "../components/NavigationBar";

const PanelPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <NavigationBar />
    </Container>
  );
};

export default PanelPage;
