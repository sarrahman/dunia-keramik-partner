import { Box, CardMedia, Typography } from "@mui/material";
import Team from "../../assets/team.svg";
import ListDescription from "../molecules/listDescription";

export default function ListValue(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-around" },
        flexDirection: { xs: "column-reverse", md: "row-reverse" },
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
        <ListDescription
          title="Produk Yang Terkelola"
          body="Waktu Anda sangat berharga, kini menjual keramik lebih mudah kepada pelanggan dengan produk yang terintegrasi tanpa harus kesulitan mengelola produk satu per satu."
        />
        <ListDescription
          title="Free Website"
          body="Tingkatkan branding bisnis dengan website yang membantu Anda memiliki merk dan brand layanan sendiri. Tersedia khusus dengan domain Anda untuk kemudahan mengembangkan brand bisnis."
        />
        <ListDescription
          title="Whatsapp Otomatis"
          body="Fitur pengiriman pesan otomatis melalui Whatsapp yang terintegrasi dengan sistem untuk mengirimkan pesanan dari pelanggan Anda."
        />
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
        <CardMedia
          width="100%"
          component="img"
          src={Team}
          alt="team"
        />
      </Box>
    </Box>
  );
}
