import axios from "axios";
import endpoint from "./Endpoint";
import User from "../model/User";

const auth_endpoint = endpoint() + `/api/auth`;

export async function register(user: User) {
  return await axios.post(auth_endpoint + "/register", user);
}

export async function login(email: string, password: string) {
  return await axios.post(auth_endpoint + "login", {
    email: email,
    password: password,
  });
}
