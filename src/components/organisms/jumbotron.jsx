import { Box, CardMedia } from "@mui/material";
import Team from "../../assets/team.svg";
import TextJumbotron from "../molecules/textJumbotron";

export default function Jumbotron() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-around" },
        flexDirection: { xs: "column-reverse", md: "row" },
        p: { xs: "1rem", md: "2rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: "1rem", md: "3rem" },
        }}
      >
        <TextJumbotron />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        <CardMedia
          width="100%"
          height="100%"
          component="img"
          src={Team}
          alt="team"
        />
      </Box>
    </Box>
  );
}
