// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { DollarSign } from "lucide-react";
// import { useAppDispatch, useAppSelector } from "@/hook/redux.hook";
// import { addToCart } from "@/redux/slices/cartSlice";

// interface OrderSummaryProps {
//     onClickHandler: (e: any) => void; // Define the type of the handler
//     showCheckoutButton?: boolean
// }

// export function OrderSummary({ onClickHandler, showCheckoutButton = true }: OrderSummaryProps) {

//     const dispatch = useAppDispatch();
//     const { cart, totalQuantity, totalAmount } = useAppSelector((state) => state.cart);



//     return (
//         <div className="w-full lg:w-1/3 bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Summary</h2>
//             {cart.length > 0 ? (
//                 <div className="space-y-4">
//                     {/* List each product in the summary */}
//                     {cart.map((item) => (
//                         <div key={item._id} className="flex justify-between">
//                             <span className="text-sm">
//                                 {item.title} (x{item.quantity})
//                             </span>
//                             <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
//                         </div>
//                     ))}
//                     <hr className="my-4 border-gray-300" />
//                     {/* Total Items */}
//                     <div className="flex justify-between text-lg font-semibold">
//                         <span>Total Items:</span>
//                         <span>{totalQuantity}</span>
//                     </div>
//                     {/* Total Amount */}
//                     <div className="flex justify-between text-lg font-semibold">
//                         <span>Total Amount:</span>
//                         <span>${totalAmount.toFixed(2)}</span>
//                     </div>
//                     {showCheckoutButton &&
//                         <button onClick={onClickHandler} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
//                             Proceed to Checkout
//                         </button>
//                     }
//                 </div>
//             ) : (
//                 <p className="text-gray-500">No items to display in summary.</p>
//             )}
//         </div>

//     );
// }

