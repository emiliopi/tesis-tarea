import axios from "axios";

export default axios.create({
  baseURL: "https://tesis-app.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});