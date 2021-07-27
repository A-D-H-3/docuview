import { GET_DOCUMENT } from "../actionTypes";

const initialState = "";

export default function (state = initialState, action) {
  if (action.type === GET_DOCUMENT) {
    return action.payload.document;
  }
  return state;
}
