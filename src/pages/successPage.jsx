import { useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/organisms/footer";
import happy from "../assets/happy.json";
import AppBarComp from "../components/organisms/appBarComp";

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <AppBarComp />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Box sx={{ p: { xs: 1, md: 2 }, m: { xs: 1, md: 2 } }}>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            Kamu Sekarang Adalah Mitra Kami
          </Typography>
          <Lottie
            loop
            animationData={happy}
            play
            style={{ width: "100%", height: "300px" }}
          />
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold" }}
            variant="subtitle1"
          >
            url website anda adalah : <a target="blank" href={location.state.url}>{location.state.url}</a>
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 2, mb: 2 }} variant="body1">
            Jika Website anda belum muncul dengan sempurna, silahkan tunggu
            hingga 3 menit
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{ width: "100%" }}
            variant="contained"
          >
            Kembali!
          </Button>
        </Box>
      </Box>
      <Copyright />
    </>
  );
}
