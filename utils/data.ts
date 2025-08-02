import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
} from "lucide-react";

export interface MenuItemProps {
  label: string;
  icon: React.ElementType;
  href: string;
}
export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

export interface ProductProps {
  id: string;
  category: string;
  name: string;
  quantity: number;
  price: number;
}

export interface PromotionProps {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
  discount: number;
  amount: number;
}

export interface CartProps {
  list: string;
  quantity: number;
  price: number;
}

export interface StockProps {
  date: string;
  name: string;
  amount: number;
}

export const users: UserProps[] = [
  {
    id: "user1",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    role: "manager",
    imageUrl: "https://placehold.co/100x100/FF5733/FFFFFF?text=Alice",
  },
  {
    id: "user2",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "cashier",
    imageUrl: "https://placehold.co/100x100/33FF57/FFFFFF?text=Bob",
  },
];

export const productsHeaders = ["ID", "Category", "Name", "Quantity", "Price"];

export const products: ProductProps[] = [
  {
    id: "book1",
    name: "Attack on Titan Vol. 1",
    quantity: 45,
    price: 12.99,
    category: "Anime",
  },
  {
    id: "book2",
    name: "My Hero Academia Vol. 5",
    quantity: 38,
    price: 10.99,
    category: "Anime",
  },
  {
    id: "book3",
    name: "Demon Slayer Vol. 10",
    quantity: 55,
    price: 11.5,
    category: "Anime",
  },
  {
    id: "book4",
    name: "Jujutsu Kaisen Vol. 3",
    quantity: 40,
    price: 12.0,
    category: "Anime",
  },
  {
    id: "book5",
    name: "Naruto Vol. 72",
    quantity: 30,
    price: 9.99,
    category: "Anime",
  },
  {
    id: "book6",
    name: "Atomic Habits",
    quantity: 70,
    price: 15.99,
    category: "Self",
  },
  {
    id: "book7",
    name: "The 7 Habits of Highly Effective People",
    quantity: 60,
    price: 14.5,
    category: "Self",
  },
  {
    id: "book8",
    name: "Mindset: The New Psychology of Success",
    quantity: 50,
    price: 13.0,
    category: "Self",
  },
  {
    id: "book9",
    name: "Self Development by Jarn Bank",
    quantity: 45,
    price: 16.25,
    category: "Self",
  },
  {
    id: "book010",
    name: "The Power of Habit",
    quantity: 55,
    price: 12.75,
    category: "Self",
  },
  {
    id: "book011",
    name: "Rich Dad Poor Dad",
    quantity: 80,
    price: 18.99,
    category: "Finance",
  },
  {
    id: "book012",
    name: "The Intelligent Investor",
    quantity: 35,
    price: 22.0,
    category: "Finance",
  },
  {
    id: "book013",
    name: "Your Money or Your Life",
    quantity: 40,
    price: 17.5,
    category: "Finance",
  },
  {
    id: "book014",
    name: "Think and Grow Rich",
    quantity: 65,
    price: 11.99,
    category: "Finance",
  },
  {
    id: "book015",
    name: "The Total Money Makeover",
    quantity: 50,
    price: 14.0,
    category: "Finance",
  },
  {
    id: "book016",
    name: "Calculus: Early Transcendentals",
    quantity: 25,
    price: 85.0,
    category: "Education",
  },
  {
    id: "book017",
    name: "Introduction to Algorithms",
    quantity: 20,
    price: 75.0,
    category: "Education",
  },
  {
    id: "book018",
    name: "Organic Chemistry",
    quantity: 18,
    price: 95.0,
    category: "Education",
  },
  {
    id: "book019",
    name: "Linear Algebra Done Right",
    quantity: 30,
    price: 60.0,
    category: "Education",
  },
  {
    id: "book020",
    name: "Economics: Principles, Problems, and Policies",
    quantity: 22,
    price: 70.0,
    category: "Education",
  },
];

export const cashierMenuItems: MenuItemProps[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
];

export const managerMenuItems: MenuItemProps[] = [
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Sales",
    icon: ShoppingCart,
    href: "/sales",
  },
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Stocks",
    icon: Warehouse,
    href: "/stocks",
  },
];

export const promotionHeaders = [
  "Start Date",
  "End Date",
  "Name",
  "Discount",
  "Amount",
];

export const promotions = [
  {
    id: "promo_summer_25",
    startDate: "2025-07-01",
    endDate: "2025-08-31",
    name: "Summer Savings",
    discount: 0.2,
    amount: null,
  },
  {
    id: "promo_new_customer_10",
    startDate: "2025-08-01",
    endDate: "2025-08-30",
    name: "Welcome - 10% Off Your First Order",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_freeship_over_50",
    startDate: "2025-08-01",
    endDate: "2025-09-15",
    name: "Free Shipping on Orders Over $50",
    discount: null,
    amount: null,
  },
  {
    id: "promo_20off_autumn",
    startDate: "2025-09-01",
    endDate: "2025-11-30",
    name: "Autumn Special - $20 Off",
    discount: null,
    amount: 20,
  },
  {
    id: "promo_new_customer_20off",
    startDate: "2025-08-01",
    endDate: "2025-12-31",
    name: "First Order - 20% Off",
    discount: 0.2,
    amount: null,
  },
  {
    id: "promo_freeship_over_75",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Free Shipping on Orders Over $75",
    discount: null,
    amount: null,
  },
  {
    id: "promo_august_flash",
    startDate: "2025-08-03",
    endDate: "2025-08-05",
    name: "Flash Sale - 30% Off Everything",
    discount: 0.3,
    amount: null,
  },
  {
    id: "promo_fall_collection",
    startDate: "2025-09-01",
    endDate: "2025-10-31",
    name: "Fall Collection Launch - 15% Off",
    discount: 0.15,
    amount: null,
  },
  {
    id: "promo_loyalty_member",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    name: "Loyalty Member Exclusive - $10 Off",
    discount: null,
    amount: 10,
  },
  {
    id: "promo_bogo_winter",
    startDate: "2025-11-25",
    endDate: "2025-12-05",
    name: "Winter BOGO - Buy One, Get One Free",
    discount: 1,
    amount: null,
  },
  {
    id: "promo_back_to_school",
    startDate: "2025-08-15",
    endDate: "2025-09-15",
    name: "Back to School - 25% Off Supplies",
    discount: 0.25,
    amount: null,
  },
  {
    id: "promo_cyber_monday",
    startDate: "2025-12-01",
    endDate: "2025-12-01",
    name: "Cyber Monday - 40% Off",
    discount: 0.4,
    amount: null,
  },
  {
    id: "promo_refer_a_friend",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Refer a Friend - $20 Credit",
    discount: null,
    amount: 20,
  },
  {
    id: "promo_clearance_sale",
    startDate: "2025-08-01",
    endDate: "2025-09-01",
    name: "End of Summer Clearance - Up to 50% Off",
    discount: 0.5,
    amount: null,
  },
  {
    id: "promo_happy_hour",
    startDate: "2025-08-03",
    endDate: "2025-08-03",
    name: "Happy Hour - 1PM to 3PM Only - 10% Off",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_bundle_deal",
    startDate: "2025-08-01",
    endDate: "2025-10-31",
    name: "Bundle Deal - Buy 3, Get 1 Free",
    discount: 1,
    amount: null,
  },
  {
    id: "promo_cart_recovery",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Come Back! - 5% Off Your Cart",
    discount: 0.05,
    amount: null,
  },
  {
    id: "promo_new_year_2026",
    startDate: "2026-01-01",
    endDate: "2026-01-15",
    name: "New Year Kickoff - 20% Off",
    discount: 0.2,
    amount: null,
  },
  {
    id: "promo_early_access",
    startDate: "2025-11-20",
    endDate: "2025-11-23",
    name: "Black Friday Early Access",
    discount: 0.35,
    amount: null,
  },
  {
    id: "promo_valentines_day",
    startDate: "2026-02-01",
    endDate: "2026-02-14",
    name: "Valentine's Day Special - 10% Off",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_mothers_day",
    startDate: "2026-05-01",
    endDate: "2026-05-10",
    name: "Mother's Day - Free Gift with Purchase",
    discount: null,
    amount: null,
  },
  {
    id: "promo_fathers_day",
    startDate: "2026-06-01",
    endDate: "2026-06-15",
    name: "Father's Day - 15% Off Select Items",
    discount: 0.15,
    amount: null,
  },
  {
    id: "promo_spring_cleaning",
    startDate: "2026-03-01",
    endDate: "2026-04-30",
    name: "Spring Cleaning Sale - Up to 40% Off",
    discount: 0.4,
    amount: null,
  },
  {
    id: "promo_signup_bonus",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Email Signup - $5 Off Your First Order",
    discount: null,
    amount: 5,
  },
  {
    id: "promo_military_discount",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Military & First Responder Discount",
    discount: 0.15,
    amount: null,
  },
  {
    id: "promo_student_discount",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Student Discount - 10% Off",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_birthday_deal",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "Happy Birthday - 20% Off",
    discount: 0.2,
    amount: null,
  },
  {
    id: "promo_holiday_gift",
    startDate: "2025-12-10",
    endDate: "2025-12-24",
    name: "Holiday Special - Free Gift with Purchase Over $100",
    discount: null,
    amount: null,
  },
  {
    id: "promo_app_exclusive",
    startDate: "2025-08-01",
    endDate: "2026-08-01",
    name: "App Exclusive - 10% Off",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_spend_and_save",
    startDate: "2025-09-01",
    endDate: "2025-10-15",
    name: "Spend $200, Save $50",
    discount: null,
    amount: 50,
  },
  {
    id: "promo_product_launch",
    startDate: "2025-10-20",
    endDate: "2025-11-05",
    name: "New Product Launch - 10% Off",
    discount: 0.1,
    amount: null,
  },
  {
    id: "promo_weekend_sale",
    startDate: "2025-08-09",
    endDate: "2025-08-11",
    name: "Weekend Sale - 25% Off Home Decor",
    discount: 0.25,
    amount: null,
  },
  {
    id: "promo_free_accessory",
    startDate: "2025-08-01",
    endDate: "2025-09-30",
    name: "Free Accessory with Phone Purchase",
    discount: null,
    amount: null,
  },
  {
    id: "promo_mystery_offer",
    startDate: "2025-11-01",
    endDate: "2025-11-30",
    name: "Mystery Offer - Reveal Your Discount",
    discount: null,
    amount: null,
  },
];

export const cartHeaders = ["List", "Quantity", "Price", "Adjust"];

export const carts: CartProps[] = [
  {
    list: "Product A",
    quantity: 100,
    price: 19.99,
  },
  {
    list: "Product B",
    quantity: 50,
    price: 45.5,
  },
  {
    list: "Product C",
    quantity: 250,
    price: 5.0,
  },
  {
    list: "Product D",
    quantity: 20,
    price: 150.0,
  },
  {
    list: "Product E",
    quantity: 120,
    price: 25.75,
  },
  {
    list: "Product F",
    quantity: 80,
    price: 30.0,
  },
  {
    list: "Product G",
    quantity: 400,
    price: 2.5,
  },
  {
    list: "Product H",
    quantity: 150,
    price: 8.99,
  },
  {
    list: "Product I",
    quantity: 30,
    price: 75.25,
  },
  {
    list: "Product J",
    quantity: 200,
    price: 12.0,
  },
  {
    list: "Product K",
    quantity: 40,
    price: 99.99,
  },
  {
    list: "Product L",
    quantity: 300,
    price: 10.5,
  },
  {
    list: "Product M",
    quantity: 75,
    price: 40.0,
  },
  {
    list: "Product N",
    quantity: 180,
    price: 7.75,
  },
  {
    list: "Product O",
    quantity: 15,
    price: 225.0,
  },
  {
    list: "Product P",
    quantity: 60,
    price: 55.0,
  },
  {
    list: "Product Q",
    quantity: 110,
    price: 18.25,
  },
  {
    list: "Product R",
    quantity: 10,
    price: 300.0,
  },
  {
    list: "Product S",
    quantity: 250,
    price: 6.5,
  },
  {
    list: "Product T",
    quantity: 35,
    price: 85.0,
  },
  {
    list: "Product U",
    quantity: 90,
    price: 14.5,
  },
  {
    list: "Product V",
    quantity: 55,
    price: 67.0,
  },
  {
    list: "Product W",
    quantity: 130,
    price: 9.25,
  },
  {
    list: "Product X",
    quantity: 70,
    price: 33.33,
  },
  {
    list: "Product Y",
    quantity: 25,
    price: 110.0,
  },
  {
    list: "Product Z",
    quantity: 180,
    price: 4.75,
  },
  {
    list: "Product AA",
    quantity: 45,
    price: 78.5,
  },
  {
    list: "Product BB",
    quantity: 160,
    price: 11.2,
  },
  {
    list: "Product CC",
    quantity: 85,
    price: 28.99,
  },
  {
    list: "Product DD",
    quantity: 22,
    price: 175.0,
  },
];

export const stockHeaders = ["Date", "Name", "Amount"];

export const stocks: StockProps[] = [
  {
    date: "2025-07-28",
    name: "Product A",
    amount: 150,
  },
  {
    date: "2025-07-28",
    name: "Product B",
    amount: 75,
  },
  {
    date: "2025-07-29",
    name: "Product C",
    amount: 300,
  },
  {
    date: "2025-07-29",
    name: "Product D",
    amount: 45,
  },
  {
    date: "2025-07-30",
    name: "Product E",
    amount: 180,
  },
  {
    date: "2025-07-30",
    name: "Product F",
    amount: 90,
  },
  {
    date: "2025-07-31",
    name: "Product G",
    amount: 500,
  },
  {
    date: "2025-07-31",
    name: "Product H",
    amount: 220,
  },
  {
    date: "2025-08-01",
    name: "Product I",
    amount: 60,
  },
  {
    date: "2025-08-01",
    name: "Product J",
    amount: 250,
  },
  {
    date: "2025-08-02",
    name: "Product K",
    amount: 85,
  },
  {
    date: "2025-08-02",
    name: "Product L",
    amount: 320,
  },
  {
    date: "2025-08-03",
    name: "Product M",
    amount: 110,
  },
  {
    date: "2025-08-03",
    name: "Product N",
    amount: 200,
  },
  {
    date: "2025-08-04",
    name: "Product O",
    amount: 35,
  },
  {
    date: "2025-08-04",
    name: "Product P",
    amount: 130,
  },
  {
    date: "2025-08-05",
    name: "Product Q",
    amount: 160,
  },
  {
    date: "2025-08-05",
    name: "Product R",
    amount: 25,
  },
  {
    date: "2025-08-06",
    name: "Product S",
    amount: 280,
  },
  {
    date: "2025-08-06",
    name: "Product T",
    amount: 50,
  },
  {
    date: "2025-08-07",
    name: "Product U",
    amount: 190,
  },
  {
    date: "2025-08-07",
    name: "Product V",
    amount: 70,
  },
  {
    date: "2025-08-08",
    name: "Product W",
    amount: 240,
  },
  {
    date: "2025-08-08",
    name: "Product X",
    amount: 100,
  },
  {
    date: "2025-08-09",
    name: "Product Y",
    amount: 95,
  },
  {
    date: "2025-08-09",
    name: "Product Z",
    amount: 310,
  },
  {
    date: "2025-08-10",
    name: "Product AA",
    amount: 80,
  },
  {
    date: "2025-08-10",
    name: "Product BB",
    amount: 175,
  },
  {
    date: "2025-08-11",
    name: "Product CC",
    amount: 140,
  },
  {
    date: "2025-08-11",
    name: "Product DD",
    amount: 65,
  },
];
