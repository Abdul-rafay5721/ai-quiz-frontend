import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";


export const paymentApi = async (payload: any) => {
  const { data } = await backend.post<ApiResponse<any>>(API_ENDPOINTS.ORDER.PAYMENT, payload);
  return data;
};


