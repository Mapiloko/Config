import axios from "axios";

const Axios = axios.create({
  baseURL:
    process.env.REACT_APP_CARDATA_API ||
    "https://core.devinternal.carscan.ai​​",
  timeout: 60000,
});

export default Axios;
