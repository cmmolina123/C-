import axios from "axios";

const postProduct = (payload) => {
   const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/entities/Products",
      withCredentials: true,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
   };

   return axios(config);
};

const productService = { postProduct };
export default productService; // export all your calls here
