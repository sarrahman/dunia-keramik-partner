import { Box, Button, TextField, Typography } from "@mui/material";

export default function TextForm(props) {
    return(
        <Box
        sx={{
          p: { xs: "1rem", md: "2rem" },
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          bgcolor: "primary.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
                color: "white",
              mb: { xs: "1rem", md: "2rem" },
            }}
            variant="h4"
          >
            Daftar Patrner Dunia Keramik
          </Typography>
          <Typography
            sx={{
                color: "white",
              mb: { xs: "1rem", md: "2rem" },
            }}
            variant="body1"
          >
            Dengan bergabung di Dunia Keramik Partner, Anda akan mendapatkan
            harga khusus, prioritas support Admin dan berbagai kemudahan lain
            untuk mengelola toko keramik Anda.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            p: { xs: "1rem", md: "2rem" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField margin="normal" label="Nama" variant="filled" />
            <TextField margin="normal" label="No WhatsApp" variant="filled" />
            <Button variant="contained" color="inherit">
              Daftar
            </Button>
          </Box>
        </Box>
      </Box>
    )
}