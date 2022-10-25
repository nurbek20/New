import { PERSONAL_LIST_INFO } from "../../actions/types";

const initialState = []
export const personal_info_list = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PERSONAL_LIST_INFO:
      return payload;
    default:
      return state;
  }
};
