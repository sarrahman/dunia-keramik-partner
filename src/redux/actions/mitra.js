import api from "../../utils/api";

export const createMitra = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/mitra`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
