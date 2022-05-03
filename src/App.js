import { Box } from "@mui/material";
import TitleSection from "./components/molecules/titleSection";
import AppBarComp from "./components/organisms/appBarComp";
import Jumbotron from "./components/organisms/jumbotron";
import ListValue from "./components/organisms/listValue";

function App() {
  return (
    <>
      <AppBarComp />
      <Jumbotron />
      <Box sx={{
        p: { xs: "1rem", md: "2rem" },
      }}>
        <TitleSection title="Kenapa Harus Bergabung dengan dunia keramik partner ?" subtitle="Dunia Keramik Partner adalah layanan yang menyediakan pengalaman menjadi reseller keramik yang berbeda dari yang lain, dan menawarkan kemudahan dengan website yang terkelola" />
        <ListValue title="Manajemen Partner yang terintegrasi" />
      </Box>
    </>
  );
}

export default App;
