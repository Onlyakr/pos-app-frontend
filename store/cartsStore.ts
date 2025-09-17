import { ProductProps } from "@/utils/data";
import { create } from "zustand";

export interface CartItem extends Omit<ProductProps, "barcode"> {
  quantity: number;
}

type CartsStore = {
  carts: CartItem[];
  setCarts: (carts: CartItem[]) => void;
  addProduct: (product: ProductProps) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
};

const useCarts = create<CartsStore>()((set, get) => ({
  carts: [],
  setCarts: (carts: CartItem[]) => set({ carts }),

  addProduct: (product: ProductProps) => {
    const { carts } = get();
    const existingItem = carts.find((item) => item.id === product.id);

    if (existingItem) {
      // If product exists, increase quantity by 1
      set({
        carts: carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      // If product doesn't exist, add it with quantity 1 and remove barcode
      const { barcode, ...productWithoutBarcode } = product;
      set({
        carts: [...carts, { ...productWithoutBarcode, quantity: 1 }],
      });
    }
  },

  updateQuantity: (productId: string, quantity: number) => {
    const { carts } = get();
    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      set({
        carts: carts.filter((item) => item.id !== productId),
      });
    } else {
      set({
        carts: carts.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      });
    }
  },

  removeProduct: (productId: string) => {
    const { carts } = get();
    set({
      carts: carts.filter((item) => item.id !== productId),
    });
  },

  clearCart: () => set({ carts: [] }),
}));

export default useCarts;
