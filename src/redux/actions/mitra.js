import api from "../../utils/api";

export const createMitra = (data) => (dispatch) => {
  const {namaLengkap, email, noHp, alamat} = data;
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
        reject(error);
      });
  });
};
