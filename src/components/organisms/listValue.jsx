import { Box, CardMedia, Typography } from "@mui/material";
import ListDescription from "../molecules/listDescription";

export default function ListValue(props) {
  const data = props.data || [];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-around" },
        flexDirection: {
          xs: "column-reverse",
          md: props.position === "left" ? "row" : "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexGrow: 2,
          flexDirection: "column",
          p: { xs: "1rem", md: "2rem" },
        }}
      >
        <Typography
          sx={{
            mb: 1,
            fontWeight: "bold",
          }}
          variant="subtitle1"
        >
          {props.title}
        </Typography>
        {data.map((item, index) => {
          return <ListDescription key={index} {...item} />;
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          alignItems: "center",
          mb: { xs: "1rem", md: "0" },
        }}
      >
        <CardMedia width="100%" component="img" src={props.image} alt="team" />
      </Box>
    </Box>
  );
}
