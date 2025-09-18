import { apiWrapper } from "./apiWrapper";
import { ProductProps } from "@/types";

export const getProducts = async (
  category?: ProductProps["category"],
  search?: string,
) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/product/getproducts?${category ? `category=${category}` : ""}&${search ? `search=${search}` : ""}`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return await res.json();
};

export const getProductsInfo = async (id: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/product/information/${id}`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products info: ${res.status}`);
  }

  return await res.json();
};

export const getProductByBarcode = async (barcode: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/product/get/${barcode}`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch product by barcode: ${res.status}`);
  }

  return await res.json();
};

export const createProduct = async (data: ProductProps) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/product/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to create product: ${res.status}`);
  }

  return await res.json();
};

export const deleteProduct = async (id: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/product/delete/${id}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to delete product: ${res.status}`);
  }

  return await res.json();
};
