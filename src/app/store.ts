import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../modules/User/UserSlice'
import chequeReducer from '../modules/Cheques/ChequeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
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
