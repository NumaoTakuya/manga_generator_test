import React from "react";
import { Container } from "@mui/material";
import Panel from "../components/Panel/Panel";
import NavigationBar from "../components/NavigationBar";
import panelData from "../utils/samples/panelData"

const PanelPage: React.FC = () => { 
  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100%",
      }}
    >
      <NavigationBar />
      <Panel panelData={panelData} />
    </Container>
  );
};

export default PanelPage;