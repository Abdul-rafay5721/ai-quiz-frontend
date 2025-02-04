import { PurchaseBook } from "@/types/purchase-book";

export const purchassBooks: PurchaseBook[] = [
  {
    id: 1,
    title: "Book 1",
    imageUrl:
      "https://images.unsplash.com/photo-1535269414141-739bf0054cde?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toLocaleString(),
    price: String(300),
    currency: "DOLLAR",
  },
  {
    id: 2,
    title: "Book 2",
    imageUrl:
      "https://images.unsplash.com/photo-1521123845560-14093637aa7d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toLocaleString(),
    price: String(300),
    currency: "DOLLAR",
  },
];
