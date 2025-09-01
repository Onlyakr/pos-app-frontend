type Product = {
  name: string;
  author: string;
  price: number;
  barcode: string;
  quantity: number;
  category: string;
};

export const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/getproducts?page=1&limit=10`,
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

export const createProduct = async (data: Product) => {
  try {
    const res = (await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/createproduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      },
    )) as Response;

    if (!res.ok) {
      throw new Error("Failed to create product");
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    const e = error as Error;

    return `Error : ${e.message}`;
  }
};
