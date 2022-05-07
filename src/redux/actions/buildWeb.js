import api from "../../utils/api";

export const buildWeb = (data) => (dispatch) => {
  const {namaBisnis, colorWeb, facebookUrl, instagramUrl} = data;

  return new Promise((resolve, reject) => {
    api
      .post(`/build/site`, {
        name: namaBisnis,
        primaryColor: colorWeb[0],
        secondaryColor: colorWeb[1],
        thirdColor: colorWeb[2],
        facebookUrl,
        instagramUrl,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
