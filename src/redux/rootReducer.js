import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import MerchantReducer from "./MerchantReducer";
import productsReducer from "./productsReducer";
import CheckoutSummeryReducer from "./CheckoutSummery";
import { apiSlice } from "./api/ApiSlice";
import filterProductReducer from "./fiterProductReducer";
import NotificationActionReducer from "./Notification";
import wishListReducer from "./wishListReducer";

const rootReducer = combineReducers({
  wishlist:wishListReducer,
  carts: cartReducer,
  products: productsReducer,
  merchant: MerchantReducer,
  checkoutSummary: CheckoutSummeryReducer,
  filterProduct: filterProductReducer,
  allNotification: NotificationActionReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
export default rootReducer;
