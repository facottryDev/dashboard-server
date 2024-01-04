import axios from "axios";

export const checkAuth = async (req, res, next) => {
  try {
    const { method, url, headers, body } = req;

    if (url.startsWith("/auth")) {
      const authResponse = await axios({
        method,
        url: process.env.AUTH_SERVER_URL + url.slice("/auth".length),
        headers,
        data: body,
        withCredentials: true,
      });

      if (authResponse.headers["set-cookie"]) {
        res.set("Set-Cookie", authResponse.headers["set-cookie"]);
      }
      res.status(authResponse.status).json(authResponse.data);
    } else {
      await axios({
        method: "GET",
        url: process.env.AUTH_SERVER_URL,
        headers,
        withCredentials: true,
      });

      next();
    }
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};
