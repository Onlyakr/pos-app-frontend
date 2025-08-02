export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
}

export const users: User[] = [
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

export const products: Product[] = [
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

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
} from "lucide-react";

interface menuItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

export const cashierMenuItems: menuItem[] = [
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

export const managerMenuItems: menuItem[] = [
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
