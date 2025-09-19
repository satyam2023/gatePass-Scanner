import { SET_LOADER } from "../actionConstants";

interface ILoaderState {
  loaderStatus: boolean;
}

const INITIAL_STATE: ILoaderState = {
  loaderStatus: false,
};

interface ILoaderReducer {
  type: typeof SET_LOADER;
  payload: boolean;
}

const loaderReducer = (
  state = INITIAL_STATE,
  action: ILoaderReducer,
): ILoaderState => {
  switch (action.type) {
    case SET_LOADER: {
      return {
        ...state,
        loaderStatus: action.payload,
      };
    }
    default:
      return state;
  }
};
export default loaderReducer;
