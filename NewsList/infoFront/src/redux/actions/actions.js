import { get, post, put, setHeaders, _delete } from "../../api/server";
import { getToken } from "../../configs/localstorage";
import {
  AUTH,
  CRUD_INFO,
  ERROR,
  LIST_INFO,
  PERSONAL_LIST_INFO,
  REG,
  TOKEN,
} from "./types";

export const authorization = (data) => (dispatch) => {
  post(
    "auth",
    data,
    (res) => {
      dispatch({
        type: AUTH,
        payload: res,
      });
      dispatch(checkToken());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  );
};

export const registration = (data) => (dispatch) => {
  post(
    "reg",
    data,
    (res) => {
      dispatch({
        type: REG,
        payload: res,
      });
      dispatch(checkToken());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  );
};

export const get_list_infos = () => (dispatch) => {
  get("infos", (res) => {
    dispatch({
      type: LIST_INFO,
      payload: res,
    });
  });
};

export const get_personal_list_infos = () => (dispatch) => {
  get("personal_infos", (res) => {
    dispatch({
      type: PERSONAL_LIST_INFO,
      payload: res,
    });
  });
};

export const info_create = (data) => (dispatch) => {
  post(
    "create",
    data,
    (res) => {
      dispatch({
        type: CRUD_INFO,
        payload: "success",
      });
      dispatch(get_list_infos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  );
};

export const edit_info = (id, data) => (dispatch) => {
  put(
    "update",
    id,
    data,
    (res) => {
      dispatch({
        type: CRUD_INFO,
        payload: "success",
      });
      dispatch(get_list_infos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  );
};

export const delete_info = (id) => (dispatch) => {
  _delete(
    "delete",
    id,
    (res) => {
      dispatch(get_list_infos());
    },
    (err) => {
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  );
};

export const checkToken = () => (dispatch) => {
  let token = getToken();
  setHeaders(token || "");
  dispatch({
    type: TOKEN,
    payload: token ? true : false,
  });
};
