import { Container } from "@mui/material";
import NavigationBar from "@/components/NavigationBar"; 
import Panel from "@/components/Panel/Panel"; 
import pageData from "@/utils/samples/pageData";

const PagePage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100%",
      }}
    >
      <NavigationBar />
      {pageData.map((panelData, i) => {
        return <Panel key={i} panelData={panelData} />;
      })}
    </Container>
  );
};

export default PagePage;
