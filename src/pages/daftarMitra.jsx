import { Box, TextField, Typography, Divider, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import RadioButtonComp from "../components/molecules/radioButtonComp";
import AppBarComp from "../components/organisms/appBarComp";
import Copyright from "../components/organisms/footer";
import { buildWeb } from "../redux/actions/buildWeb";
import { createMitra } from "../redux/actions/mitra";
import { useNavigate } from "react-router-dom";

const color = [
  ["#0567a8", "#60d3e5", "#f6f0f0"],
  ["#2d471d", "#59964f", "#d1dcc6"],
  ["#092147", "#1a488e", "#97b2de"],
  ["#7a1e55", "#811f4e", "#645653"],
  ["#fd4499", "#fe80b8", "#fec3fa"],
  ["#913728", "#fa6821", "#c9d4d8"],
];

function DaftarMitra(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [value, setValue] = useState({
    namaLengkap: "",
    email: "",
    noHp: "",
    alamat: {
      jalan: "",
      kecamatan: "",
      kota: "",
    },
  });
  const [dataWeb, setDataWeb] = useState({
    namaBisnis: "",
    colorWeb: color[0],
    facebookUrl: "",
    instagramUrl: "",
  });

  useEffect(() => {
    if (message !== "") {
      alert(message);
    }
  }, [message]);

  const handleColorWeb = (c) => {
    if (c === "color[0]") {
      setDataWeb({ ...dataWeb, colorWeb: color[0] });
    } else if (c === "color[1]") {
      setDataWeb({ ...dataWeb, colorWeb: color[1] });
    } else if (c === "color[2]") {
      setDataWeb({ ...dataWeb, colorWeb: color[2] });
    } else if (c === "color[3]") {
      setDataWeb({ ...dataWeb, colorWeb: color[3] });
    } else if (c === "color[4]") {
      setDataWeb({ ...dataWeb, colorWeb: color[4] });
    } else if (c === "color[5]") {
      setDataWeb({ ...dataWeb, colorWeb: color[5] });
    }
  };

  const handleDaftar = () => {
    if (
      value.namaLengkap === "" ||
      value.noHp === "" ||
      value.alamat.jalan === "" ||
      value.alamat.kecamatan === "" ||
      value.alamat.kota === "" ||
      dataWeb.namaBisnis === ""
    ) {
      setMessage("Semua field harus diisi");
    } else {
      props
        .createMitra(value)
        .then((res) => {
          if (res.status === 201) {
            setMessage(res.data.message);
            props
              .buildWeb(dataWeb)
              .then((res) => {
                setMessage(res.data.message);
                setTimeout(() => {
                  navigate("/success", { state: {url: res.data.data.ssl_url} });
                }, 1000);
              })
              .catch((err) =>
                setMessage(
                  `${err.response.data.message}, kemungkinan terjadi karena nama bisnis anda telah digunakan mitra lain`
                )
              );
          }
        })
        .catch((err) => setMessage(err.message));
    }
  };

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
          <TextField
            onChange={(e) =>
              setValue({ ...value, namaLengkap: e.target.value })
            }
            margin="normal"
            label="Nama Sesuai KTP"
            required
          />
          <TextField
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            type="email"
            margin="normal"
            label="email (optional)"
          />
          <TextField
            onChange={(e) => setValue({ ...value, noHp: e.target.value })}
            type="number"
            margin="normal"
            placeholder="08123456789"
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
          <TextField
            onChange={(e) =>
              setValue({
                ...value,
                alamat: {
                  ...value.alamat,
                  jalan: e.target.value,
                },
              })
            }
            margin="normal"
            label="Jalan"
            required
          />
          <TextField
            onChange={(e) =>
              setValue({
                ...value,
                alamat: {
                  ...value.alamat,
                  kecamatan: e.target.value,
                },
              })
            }
            margin="normal"
            label="kecamatan"
            required
          />
          <TextField
            onChange={(e) =>
              setValue({
                ...value,
                alamat: {
                  ...value.alamat,
                  kota: e.target.value,
                },
              })
            }
            margin="normal"
            label="kota"
            required
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
            Buat Website Anda
          </Typography>
          <TextField
            onChange={(e) =>
              setDataWeb({
                ...dataWeb,
                namaBisnis: e.target.value,
              })
            }
            margin="normal"
            label="Nama Bisnis"
            placeholder="Nama Bisnis Anda harus unik dari mitra lain"
            required
          />
          <RadioButtonComp value={(c) => handleColorWeb(c)} color={color} />
          <TextField
            onChange={(e) =>
              setDataWeb({
                ...dataWeb,
                facebookUrl: e.target.value,
              })
            }
            type="url"
            margin="normal"
            label="URL Facebook"
          />
          <TextField
            onChange={(e) =>
              setDataWeb({
                ...dataWeb,
                instagramUrl: e.target.value,
              })
            }
            type="url"
            margin="normal"
            label="URL Instagram"
          />
          <Button
            onClick={handleDaftar}
            sx={{ mt: 2 }}
            variant="contained"
            color="primary"
          >
            Daftar
          </Button>
        </Box>
      </Box>
      <Copyright />
    </>
  );
}

const reduxState = (state) => ({});

const reduxAction = (dispatch) => ({
  buildWeb: (data) => dispatch(buildWeb(data)),
  createMitra: (data) => dispatch(createMitra(data)),
});

export default connect(reduxState, reduxAction)(DaftarMitra);
