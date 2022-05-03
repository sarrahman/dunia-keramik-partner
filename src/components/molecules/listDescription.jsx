import { Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ListDescription(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 4,
      }}
    >
      <Typography
        sx={{
          mb: 1,
          fontWeight: "bold",
        }}
        variant="subtitle1"
      >
        <CheckCircleIcon fontSize="small" sx={{
          mr: 1,
        }} color="primary" />{props.title}
      </Typography>
      <Typography color="#999" variant="body1">
        {props.body}
      </Typography>
    </Box>
  );
}
