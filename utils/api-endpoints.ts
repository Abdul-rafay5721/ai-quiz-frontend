import { toast } from "react-toastify";


export type ApiResponse<T> = {
  message: string;
  data: T;
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/user/login/email",
    REGISTER: "/user/register/email",
    GET_PROFILE: "/profile",
  },
  ORDER: {
    PAYMENT: "/order/payment",
  },
  PRODUCT: {
    GETALLPRODUCTS: "/product",
    GETPRODUCTBYSLUG: "/product/slug",
  },
  EVENT: {
    GET_ALL_EVENTS: "/event",
   // GET_ALL_EVENTS_BY_USERID: "/event/user/:userId",
    CREATE_EVENT: "/event",
    DELETE_EVENT: "/event"
  },
  QUIZ: {
    GET_ALL: "/quiz",
    UPDATE_QUIZ: "/attempt/answer",
    GET_USER_ATTEMP_QUIZ: "/attempt/user",
    GET_BOOKS: "/quiz/books",
    GETPRODUCTBYSLUG: "/product/slug",
  },
  PLACE_OF_INTERESTS: {
    GET_ALL: "/place-of-interests",
  },
};

export const handleApiErrors = (error: any): string => {
  if (error.response) {
    // Server responded with a status other than 2xx
    toast.error(
      error.response.data?.message || error.response.data?.desc || `Error: ${error.response.status}`
    );
    return error.response.data?.message || `Error: ${error.response.status}`;
  } else if (error.request) {
    toast.error("No response from server. Please try again later.");
    // Request was made, but no response was received
    return "No response from server. Please try again later.";
  } else {
    toast.error(error.message || "An unexpected error occurred.");
    // Other errors (e.g., setting up the request)
    return error.message || "An unexpected error occurred.";
  }
};
