import { Box, TextField, Typography, Divider, Button } from "@mui/material";
import { useState } from "react";
import RadioButtonComp from "../components/molecules/radioButtonComp";
import AppBarComp from "../components/organisms/appBarComp";
import Copyright from "../components/organisms/footer";

const color = [
    ["#0567a8", "#60d3e5", "#f6f0f0"],
    ["#2d471d", "#59964f", "#d1dcc6"],
    ["#092147", "#1a488e", "#97b2de"],
    ["#7a1e55", "#811f4e", "#645653"],
    ["#fd4499", "#fe80b8", "#fec3fa"],
    ["#913728", "#fa6821", "#c9d4d8"],
  ];

function DaftarMitra() {
    const [value, setValue] = useState({

    });


  return (
    <>
      <AppBarComp />
      <Box
        sx={{
          p: { xs: 1, md: 3 },
          m: { xs: 1, md: 3 },
          boxShadow: 4,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5">Data Diri Anda</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField margin="normal" label="Nama Sesuai KTP" required />
          <TextField type="email" margin="normal" label="email (optional)" />
          <TextField
            type="number"
            margin="normal"
            label="nomor HP & (Wajib Ada Wa)"
            required={true}
          />
          <Divider
            sx={{
              mt: 2,
            }}
          />
          <Typography
            sx={{
              mt: 1,
            }}
            variant="h6"
            gutterBottom
          >
            Alamat Anda
          </Typography>
          <TextField margin="normal" label="Jalan" required />
          <TextField margin="normal" label="kecamatan" required />
          <TextField margin="normal" label="kota" required />
          <Divider
            sx={{
              mt: 2,
            }}
          />
          <Typography
            sx={{
              mt: 1,
            }}
            variant="h6"
            gutterBottom
          >
            Buat Website Anda
          </Typography>
          <TextField margin="normal" label="Nama Website" required />
          <RadioButtonComp value={(c) => console.log(c)} color={color} />
          <TextField type="url" margin="normal" label="URL Facebook" required />
          <TextField
            type="url"
            margin="normal"
            label="URL Instagram"
            required
          />
          <Button sx={{ mt: 2 }} variant="contained" color="primary">
            Posting
          </Button>
        </Box>
      </Box>
      <Copyright />
    </>
  );
}

export default DaftarMitra;
