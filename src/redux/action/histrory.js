import axios from "axios";
import { serverAPI } from "../../server";

export const getHistory = () => async (dispatch) => {
  try {
    dispatch({
      type: "getHistoryAllRequest",
    });

    const { data } = await axios.get(
      `${serverAPI}/api/get-view-history`
    );

    dispatch({
      type: "getHistoryAllSuccess",
      payload: data.viewhistory,
    });
  } catch (error) {
    dispatch({
      type: "getHistoryAllFailed",
      payload: error.response.data.message,
    });
  }
};