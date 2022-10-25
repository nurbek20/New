import { LIST_INFO } from "../../actions/types";

const initialState = []
export const info_list = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_INFO:
      return payload;
    default:
      return state;
  }
};
