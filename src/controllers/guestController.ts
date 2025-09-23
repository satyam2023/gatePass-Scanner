import APIConstants from "core/ApiConstants";
import { 
  IRegisteredGuestResponse, 
  IGuestCheckInResponse,
  IGuestCheckInRequest, 
} from "models/GuestController";
import { IApiResponse } from "models/IApiResponse";
import { sendGetRequest, sendPatchRequest } from "services/network/Network";

export const getRegisteredGuestDetail = async (email: string) => {
  const response: IApiResponse<IRegisteredGuestResponse> =
    await sendGetRequest<IRegisteredGuestResponse>(
      `${APIConstants.RegisteredGuest}${email}`,
    );
  return response;
};

export const guestCheckIn = async (email: string, checkInData: IGuestCheckInRequest) => {
  const response: IApiResponse<IGuestCheckInResponse> =
    await sendPatchRequest<IGuestCheckInResponse>(
      `${APIConstants.GuestCheckIn}${email}`,
      checkInData
    );
  return response;
};
