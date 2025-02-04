// import { Product } from "@/types/product";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface CartState {
//   cart: Product[];
//   totalQuantity: number;
//   totalAmount: number;
// }

// const initialState: CartState = {
//   cart: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action: PayloadAction<Product>) {
//       const { _id, ...rest } = action.payload;
//       const existingItem = state.cart.find(item => item._id === _id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cart.push({ ...rest, _id, quantity: 1 });
//       }
//       state.totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
//       state.totalAmount = state.cart.reduce(
//         (sum, item) => sum + item.quantity * item.price,
//         0
//       );
//     },
//     removeFromCart(state, action: PayloadAction<Product>) {
//       const { _id, ...rest } = action.payload;
//       state.cart = state.cart.filter(item => item._id !== _id);
//       state.totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
//       state.totalAmount = state.cart.reduce(
//         (sum, item) => sum + item.quantity * item.price,
//         0
//       );
//     },
//     clearCart(state) {
//       state.cart = [];
//       state.totalQuantity = 0;
//       state.totalAmount = 0;
//     },
//     decreaseQuantity(state, action: PayloadAction<Product>) {
//       const { _id } = action.payload;
//       const item = state.cart.find(item => item._id === _id);
//       if (item) {
//         if (item.quantity > 1) {
//           item.quantity -= 1;
//         }
//       }
//       state.totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
//       state.totalAmount = state.cart.reduce(
//         (sum, item) => sum + item.quantity * item.price,
//         0
//       );
//     },

//   },
// });

// export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
