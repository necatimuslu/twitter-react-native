import axios from "axios";
import { setUserToken } from "../../asyncstorage";
import { baseUrl } from "../common/api";

export const getAllUser = async () =>
  await axios.get(`${baseUrl}/user/get-users`);

export const getUserById = async () => await axios.get(`${baseUrl}/user/get`);

export const registerUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/register`, userForm);

export const loginUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/login`, userForm);

export const updateBannerAndImage = async (userForm) =>
  await axios.put(`${baseUrl}/user/update-banner-image`, userForm);
