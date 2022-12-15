import axios from "axios";

//instancia do axios, criar condições fixas para nao precisar ficar repetindo em todo lugar
export const api = axios.create({
  baseURL: "http://localhost:8001",
});
