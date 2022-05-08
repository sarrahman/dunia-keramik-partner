import api from "../../utils/api";

export const createMitra = (data) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true
  });
  const { namaLengkap, email, noHp, alamat } = data;
  return new Promise((resolve, reject) => {
    api
      .post(`/mitra`, {
        name: namaLengkap,
        email,
        phone: noHp,
        address: alamat
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          type: "LOADING",
          value: false
        });
        reject(error);
      });
  });
};
