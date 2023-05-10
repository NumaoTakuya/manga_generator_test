import Box from "@mui/material/Box";

interface IntervalBoxProps {
  interval: number;
}

const IntervalBox: React.FC<IntervalBoxProps> = ({ interval }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: interval * 30,
        backgroundColor: "transparent",
      }}
    >
      {interval}
    </Box>
  );
};

export default IntervalBox;
