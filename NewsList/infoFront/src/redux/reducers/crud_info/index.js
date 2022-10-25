import { CRUD_INFO } from "../../actions/types";

const initialState = {
    message:''
};

export const crud_info = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CRUD_INFO:
      return {...state, message:payload};
    default:
      return state;
  }
};
