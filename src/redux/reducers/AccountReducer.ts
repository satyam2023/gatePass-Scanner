import { UserData } from "models/UserModel";
import { SET_USER_DATA } from "../actionConstants";
import { IBaseReducerInterface } from "./IBaseReducerInterface";

const INITIAL_STATE = {
  userData: [],
};

interface IAccountReducer {
  userData: UserData;
}
const accountReducer = (
  state = INITIAL_STATE,
  action: IBaseReducerInterface<IAccountReducer>,
) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};
export default accountReducer;
