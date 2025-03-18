import axios from "axios";
import { makeUrl } from "./url";

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      makeUrl(
        process.env.BACKEND_API_BASE || "http://127.0.0.1:8000/api",
        "auth",
        "token",
        "refresh"
      ),
      {
        refresh: refreshToken,
      }
    );

    const { access, refresh } = response.data;
    return [access, refresh];
  } catch (error) {
    console.log("Token refresh failed", error);
    return [null, null];
  }
};
