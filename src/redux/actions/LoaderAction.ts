import { SET_LOADER } from "redux/actionConstants";

export const setLoader = (loaderStatus: boolean) => {
  return {
    type: SET_LOADER,
    payload: loaderStatus,
  };
};
