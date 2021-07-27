import { GET_DOCUMENT } from "./actionTypes";

export const docSearch = (document) => {
  return {
    type: GET_DOCUMENT,
    payload: {
      document,
    },
  };
};
