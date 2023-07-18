import axios from "axios";

const baseURL = "http://localhost:6969";

const privateAxios = axios.create({
  baseURL,
});

privateAxios.interceptors.request.use((config: any) => {
  const jwtTokent = localStorage.getItem("jwtToken");
  let jwt: any;
  if (jwtTokent) {
    jwt = JSON.parse(jwtTokent);
  }

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };
});

export default privateAxios;
