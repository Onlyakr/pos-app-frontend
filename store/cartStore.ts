import { create } from "zustand";
import { ProductProps } from "@/types";

export interface CartItemProps extends Omit<ProductProps, "barcode"> {
  quantity: number;
}

export type ReceiptProps = {
  cart: CartItemProps[];
  id: string;
};

type CartStore = {
  cart: CartItemProps[];
  receipt: ReceiptProps;
  setCart: (cart: CartItemProps[]) => void;
  setReceipt: (receipt: ReceiptProps) => void;
  addProduct: (product: ProductProps) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
};

const useCart = create<CartStore>()((set, get) => ({
  cart: [],
  receipt: {
    cart: [],
    id: "",
  },
  setCart: (cart: CartItemProps[]) => set({ cart }),

  setReceipt: (receipt: ReceiptProps) => set({ receipt }),

  addProduct: (product: ProductProps) => {
    const { cart } = get();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        cart: cart.map((item: CartItemProps) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      const { barcode, ...productWithoutBarcode } = product;
      set({
        cart: [...cart, { ...productWithoutBarcode, quantity: 1 }],
      });
    }
  },

  updateQuantity: (productId: string, quantity: number) => {
    const { cart } = get();
    if (quantity <= 0) {
      set({
        cart: cart.filter((item: CartItemProps) => item.id !== productId),
      });
    } else {
      set({
        cart: cart.map((item: CartItemProps) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      });
    }
  },

  removeProduct: (productId: string) => {
    const { cart } = get();
    set({
      cart: cart.filter((item: CartItemProps) => item.id !== productId),
    });
  },

  clearCart: () => set({ cart: [] }),
}));

export default useCart;
