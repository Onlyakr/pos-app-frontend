const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const data = await res.json();
  return data;
};

export default getProducts;
