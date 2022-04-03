import axios from "axios";
import { baseUrl } from "./common/api";

export const createTweet = async (tweetForm) =>
  await axios.post(`${baseUrl}/tweet/create`, tweetForm);

export const getAllTweet = async () => await axios.get(`${baseUrl}/tweet/all`);

export const updateTweet = async (id, tweetForm) =>
  await axios.put(`${baseUrl}/tweet/update/${id}`, tweetForm);

export const deleteTweet = async (id) =>
  await axios.delete(`${baseUrl}/tweet/delete/${id}`);

export const getTweetByUserId = async (userId) =>
  await axios.post(`${baseUrl}/tweet/byUserId`, userId);

export const likesTweet = async (userId) =>
  await axios.put(`${baseUrl}/tweet/likes`, userId);
