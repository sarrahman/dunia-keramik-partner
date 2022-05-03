import { Box, Button, Typography } from "@mui/material";

export default function TextJumbotron() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          mb: { xs: "1rem", md: "2rem" },
        }}
        variant="h4"
      >
        Patrner Dunia Keramik
      </Typography>
      <Typography
        sx={{
          mb: { xs: "1rem", md: "2rem" },
        }}
        variant="body1"
      >
        Gabung sekarang untuk bisnis keramik anda lebih profesional dan dapatkan
        website anda secara gratis dan markup harga dengan harga yang lebih
        murah
      </Typography>
      <Button
        onClick={() => {
          window.location.href = "/#daftar";
        }}
        sx={{
          width: { xs: "100%", md: "80%" },
        }}
        variant="contained"
        color="primary"
      >
        daftar partner
      </Button>
    </Box>
  );
}
