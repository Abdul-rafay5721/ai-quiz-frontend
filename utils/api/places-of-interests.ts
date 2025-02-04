import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";

export const getPlacesOfInterests = async () => {
  const { data } = await backend.get<ApiResponse<any>>(
    API_ENDPOINTS.PLACE_OF_INTERESTS.GET_ALL
  );
  return data;
};
