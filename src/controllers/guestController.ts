import APIConstants from "core/ApiConstants";
import { IRegisteredGuestResponse } from "models/GuestController";
import { IApiResponse } from "models/IApiResponse";
import { sendGetRequest } from "services/network/Network";

export const getRegisteredGuestDetail = async (email: string) => {
  const response: IApiResponse<IRegisteredGuestResponse> =
    await sendGetRequest<IRegisteredGuestResponse>(
      `${APIConstants.RegisteredGuest}${email}`,
    );
  return response;
};
