import { GET_DOCUMENT } from "./actionTypes";

export const createDocumentSearch = (document) => {
  return {
    type: GET_DOCUMENT,
    payload: {
      document,
    },
  };
};
