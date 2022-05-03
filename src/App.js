import { Box } from "@mui/material";
import TitleSection from "./components/molecules/titleSection";
import AppBarComp from "./components/organisms/appBarComp";
import Copyright from "./components/organisms/footer";
import Jumbotron from "./components/organisms/jumbotron";
import ListValue from "./components/organisms/listValue";
import TextForm from "./components/organisms/textForm";
import interaksi from "./assets/interaksi.svg";
import building from "./assets/building-web.svg";

const data1 = [
  {
    title: "Produk Yang Terkelola",
    body: "Waktu Anda sangat berharga, kini menjual keramik lebih mudah kepada pelanggan dengan produk yang terintegrasi tanpa harus kesulitan mengelola produk satu per satu.",
  },
  {
    title: "Free Website",
    body: "Tingkatkan branding bisnis dengan website yang membantu Anda memiliki merk dan brand layanan sendiri. Tersedia khusus dengan domain Anda untuk kemudahan mengembangkan brand bisnis.",
  },
  {
    title: "Whatsapp Otomatis",
    body: "Fitur pengiriman pesan otomatis melalui Whatsapp yang terintegrasi dengan sistem untuk mengirimkan pesanan dari pelanggan Anda.",
  },
];

const data2 = [
  {
    title: "Harga Yang Kompetitif",
    body: "Kami menawarkan harga yang murah bahkan lebih murah dari produk dunia keramik, harga berlaku untuk semua produk keramik yang akan anda jual.",
  },
  {
    title: "White Label",
    body: "Tampilkan identitas bisnis Anda tanpa adanya brand kami di website. Fitur ini membuat Anda seakan-akan memiliki toko keramik sendiri.",
  },
  {
    title: "Tanpa Deposit Dan Biaya Bulanan",
    body: "Dunia Keramik Partner hadir tanpa deposit maupun biaya langganan bulanan. Anda tidak perlu mengeluarkan cost untuk order yang tidak perlukan. Tidak perlu boros lagi, pilih dan bayar order keramik sesuai dengan pembelian pelanggan anda.",
  },
];

function App() {
  return (
    <>
      <AppBarComp />
      <Jumbotron />
      <Box
        sx={{
          p: { xs: "1rem", md: "2rem" },
        }}
      >
        <TitleSection
          title="Kenapa Harus Bergabung dengan dunia keramik partner ?"
          subtitle="Dunia Keramik Partner adalah layanan yang menyediakan pengalaman menjadi reseller keramik yang berbeda dari yang lain, dan menawarkan kemudahan dengan website yang terkelola"
        />
        <ListValue
          image={interaksi}
          data={data1}
          position="right"
          title="Manajemen Partner yang terintegrasi"
        />
      </Box>
      <Box
        sx={{
          p: { xs: "1rem", md: "2rem" },
        }}
      >
        <TitleSection
          title="Reseller Keramik Tanpa deposit pertama di indonesia"
          subtitle="Tanpa biaya administrasi, kini Anda benar-benar dapat memulai bisnis tanpa modal sepeser pun. Mulai bisnis Anda dengan modal Rp0 dan dapatkan kemudahan fitur untuk meraih kesuksesan."
        />
        <ListValue
          image={building}
          data={data2}
          position="left"
          title="Kebebasan Mengenalkan Bisnis Kepada Pelanggan"
        />
      </Box>
      <TextForm />
      <Copyright />
    </>
  );
}

export default App;
