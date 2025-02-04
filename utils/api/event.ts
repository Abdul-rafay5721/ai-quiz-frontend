import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";


export const getAllEventsByUserId = async (userId: string) => {
  const { data } = await backend.get(API_ENDPOINTS.EVENT.GET_ALL_EVENTS + '/' + userId);
  return data
};

export const createEvent = async (payload: any) => {
  const { data } = await backend.post<ApiResponse<any>>(API_ENDPOINTS.EVENT.CREATE_EVENT, payload);
  return data;
};

export const updateEvent = async (id: any, payload: any) => {
  const { data } = await backend.put<ApiResponse<any>>(API_ENDPOINTS.EVENT.CREATE_EVENT + '/' + id, payload);
  return data;
};

export const deleteEvent = async (payload: any) => {
  const { data } = await backend.delete<ApiResponse<any>>(API_ENDPOINTS.EVENT.DELETE_EVENT + '/' + payload);
  return data;
};


