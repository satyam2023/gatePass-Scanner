import { DESTROY_SESSION } from "redux/actionConstants";

export const logoutUser = () => {
  return { type: DESTROY_SESSION };
};
