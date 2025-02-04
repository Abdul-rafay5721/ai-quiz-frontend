import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";

export const getQuizBooks = async () => {
  const { data } = await backend.get<ApiResponse<any>>(
    API_ENDPOINTS.QUIZ.GET_BOOKS
  );
  return data;
};

export const getAllQuizes = async (): Promise<any> => {
  const { data } = await backend.get(API_ENDPOINTS.QUIZ.GET_ALL);
  return data;
};

export const saveQuizAnswer = async (payload: any): Promise<any> => {
  const { data } = await backend.put(API_ENDPOINTS.QUIZ.UPDATE_QUIZ, payload);
  return data;
};

export const getUserAttempQuiz = async (userId: string): Promise<any> => {
  const { data } = await backend.get(
    `${API_ENDPOINTS.QUIZ.GET_USER_ATTEMP_QUIZ}/${userId}`
  );
  return data;
};
