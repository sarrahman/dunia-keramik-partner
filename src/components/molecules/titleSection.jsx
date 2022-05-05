import { Box, Typography } from "@mui/material";

export default function TitleSection(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: { xs: "1rem", md: "2rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
            alignItems: "center",
        }}
      >
        <Typography sx={{
            mb: { xs: "1rem", md: "2rem" },
            fontWeight: "bold",
        }} variant="h6">{props.title}</Typography>
        <Typography variant="subtitle1">{props.subtitle}</Typography>
      </Box>
    </Box>
  );
}
