import api from "../../utils/api";

export const buildWeb = (data) => (dispatch) => {
  dispatch({
    type: "LOADING",
    value: true
  });
  const { namaBisnis, colorWeb, facebookUrl, instagramUrl, noHP } = data;
  return new Promise((resolve, reject) => {
    api
      .post(`/build/site`, {
        name: namaBisnis,
        primaryColor: colorWeb[0],
        secondaryColor: colorWeb[1],
        thirdColor: colorWeb[2],
        facebookUrl,
        instagramUrl,
        noHP
      })
      .then((response) => {
        dispatch({
          type: "LOADING",
          value: false
        });
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
