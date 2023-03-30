import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import chequeReducer from "../modules/Cheques/ChequeSlice";

export const store = configureStore({
  reducer: {
    cheque: chequeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
