import { Product } from "@/types/product";
import backend from "..";
import { API_ENDPOINTS, ApiResponse } from "../api-endpoints";


export const getAllProducts = async () => {
  const { data } = await backend.get(API_ENDPOINTS.PRODUCT.GETALLPRODUCTS);
  if (data.data.length) {
    return data.data;
  }
  else {
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  const { data } = await backend.get(API_ENDPOINTS.PRODUCT.GETPRODUCTBYSLUG + "/" + slug);
  console.log(data);
  return data.data;
};


