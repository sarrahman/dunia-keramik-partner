import axios from "axios";

const baseURL = "https://dunia-keramik.herokuapp.com/api";

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? "https://dunia-keramik.herokuapp.com/api"
//     : "http://localhost:5000/api";

export default axios.create({
  baseURL
});
