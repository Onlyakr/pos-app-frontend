export type MenuItemProps = {
  label: string;
  icon: React.ElementType;
  href: string;
};

export type UserProps = {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
};

export type ProductProps = {
  id?: string;
  name: string;
  author: string;
  price: number;
  barcode?: string;
  quantity?: number;
  category?: "Anime" | "Self-development" | "Finance" | "Education";
  detail?: string;
};

export type PromotionProps = {
  name?: string;
  product: string;
  startDate: string;
  endDate: string;
  discountValue: number;
  discountType: "PERCENT" | "FIXED";
  quota?: number;
  remainingQuota?: number;
};

export type CartProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  barcode: string;
};

export type StockProps = {
  id?: string;
  name: string;
  transactionDate: string;
  product: string;
  quantity: number;
  transactionType: "increase" | "decrease";
};

export type OrderProps = {
  id: number;
  name: string;
  quantity: number;
  price: string;
};
