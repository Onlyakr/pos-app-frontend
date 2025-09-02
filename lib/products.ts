// import { revalidatePath } from "next/cache";

import { apiWrapper } from "./apiWrapper";
import { ProductProps } from "@/utils/data";

export const getProducts = async (category?: ProductProps["category"]) => {
  try {
    const res = await apiWrapper(
      `${process.env.NEXT_PUBLIC_API_URL}/product/getproducts?${category ? `category=${category}` : ""}`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    const e = error as Error;

    return `Error : ${e.message}`;
  }
};

export const getProductByBarcode = async (barcode: string) => {
  try {
    const res = await apiWrapper(
      `${process.env.NEXT_PUBLIC_API_URL}/product/get/${barcode}`,
      {
        method: "GET",
      },
    );

    console.log(res.status);
    if (!res.ok) {
      throw new Error("Failed to fetch product by barcode");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    const e = error as Error;
    return `Error : ${e.message}`;
  }
};

export const createProduct = async (data: ProductProps) => {
  try {
    const res = await apiWrapper(
      `${process.env.NEXT_PUBLIC_API_URL}/product/createproduct`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to create product");
    }

    const responseData = (await res.json()) as ProductProps;
    return responseData;
  } catch (error) {
    const e = error as Error;

    return `Error : ${e.message}`;
  }
};
