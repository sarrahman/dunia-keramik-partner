import { Box, Button, Typography } from "@mui/material";

export default function TextForm(props) {
  return (
    <Box
      sx={{
        display: "flex",
        p: { xs: "1rem", md: "2rem" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        bgcolor: "secondary.main",
      }}
    >
      <Typography
        sx={{
          color: "white",
          mb: { xs: "1rem", md: "2rem" },
        }}
        variant="h6"
      >
        Jika ide ini terdengar menarik, silahkan menjadi mitra kami sekarang
        <Typography sx={{fontWeight: 'bold'}} variant="h5">Gratis</Typography>
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "80%",
          mb: { xs: "1rem", md: "2rem" }, 
          fontSize: "1.5rem",
          fontWeight: "bold",
          textTransform: "none",
          letterSpacing: "0.5px",
          border: "1px solid white",
          "&:hover": {
            backgroundColor: "white",
            color: "secondary.main",
          },
        }}
      >
        Daftar Sekarang
      </Button>
    </Box>
  );
}
