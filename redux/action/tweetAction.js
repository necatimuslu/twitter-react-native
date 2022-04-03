import {
  GET_ALL_TWEET,
  CREATE_TWEET,
  UPDATE_TWEET,
  DELETE_TWEET,
} from "../constants/tweetCostants";
import * as api from "../../services/tweetService";

export const fetchAllTweet = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTweet();

    dispatch({
      type: GET_ALL_TWEET,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTweet = (tweetForm) => async (dispatch) => {
  try {
    const { data } = await api.createTweet(tweetForm);

    dispatch({
      type: CREATE_TWEET,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTweet = (id, tweetForm) => async (dispatch) => {
  try {
    const { data } = await api.updateTweet(id, tweetForm);

    dispatch({
      type: UPDATE_TWEET,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = (id) => async (dispatch) => {
  try {
    await api.deleteTweet(id);

    dispatch({
      type: DELETE_TWEET,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
