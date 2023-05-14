import { Container } from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import Page from "@/components/Page/Page";
import episodeData from "@/utils/samples/episodeData";

const EpisodePage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100%",
      }}
    >
      <NavigationBar />
      {episodeData.map((pageData, i) => {
        return <Page key={i} pageData={pageData} />;
      })}
    </Container>
  );
};

export default EpisodePage;
