import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";

interface AuthResponse {
  user: {
    _id: string;
    userName: string;
    email: string;
  }
  token: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

type RegisterPayload = {
  userName: string;
  email: string;
  password: string;
};

export const registerApi = async (payload: RegisterPayload) => {
  const { data } = await backend.post<ApiResponse<AuthResponse>>(API_ENDPOINTS.AUTH.REGISTER, payload);
  return data;
};

export const loginApi = async (
  payload: LoginPayload
): Promise<ApiResponse<AuthResponse>> => {
  const { data } = await backend.post<ApiResponse<AuthResponse>>(
    API_ENDPOINTS.AUTH.LOGIN,
    payload
  );
  return data;
};

export const getProfileApi = async (): Promise<any> => {
  const { data } = await backend.get(API_ENDPOINTS.AUTH.GET_PROFILE);
  return data;
};
