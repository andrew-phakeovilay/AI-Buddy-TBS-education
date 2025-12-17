import axios from "axios";

export const fetch = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});
