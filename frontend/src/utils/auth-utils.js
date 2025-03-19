import axios from "axios";
import { makeUrl } from "./url";


  export const refreshToken = async function (refreshToken) {
    try {
      const response = await axios.post(
        // "http://localhost:8000/api/auth/token/refresh/",
        UrlUtils.makeUrl(
          process.env.BACKEND_API_BASE,
          "auth",
          "token",
          "refresh",
        ),
        {
          refresh: refreshToken,
        },
      );

      const { access, refresh } = response.data;
      // still within this block, return true
      return [access, refresh];
    } catch {
      return [null, null];
    }
  };
