import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from "../../components/ToastifyConfig";
import {
  ApiStatus,
  IChequeForm,
  IChequeState,
  IUpdateChequeActionProps,
} from "./Cheque.type";
import {
  createChequeApi,
  deleteChequeApi,
  getChequesListApi,
  updateChequeApi,
} from "./ChequeService";

const initialState: IChequeState = {
  list: [],
  listStatus: ApiStatus.ideal,
  createChequeFormStatus: ApiStatus.ideal,
  updateChequeFormStatus: ApiStatus.ideal,
};

export const getChequesListAction = createAsyncThunk(
  "cheques/getChequesListAction",
  async () => {
    const response = await getChequesListApi();
    return response.data;
  }
);

export const createChequeAction = createAsyncThunk(
  "cheques/createChequesAction",
  async (data: IChequeForm) => {
    const { pays, ...rest } = data;
    const cheque = { ...rest, pays };
    const response = await createChequeApi(cheque);
    return response.data;
  }
);

export const updateChequeAction = createAsyncThunk(
  "cheques/updateChequeAction",
  async ({ id, chequeData }: IUpdateChequeActionProps) => {
    if (!id) {
      throw new Error("Неверный параметр.");
    }
    const response = await updateChequeApi(id, chequeData);
    return response.data;
  }
);

export const deleteChequeAction = createAsyncThunk(
  "cheques/deleteChequeAction",
  async (id: string) => {
    await deleteChequeApi(id);
    return id;
  }
);

const chequeSlice = createSlice({
  name: "cheque",
  initialState,
  reducers: {
    resetCreateListStatus: (state) => {
      state.createChequeFormStatus = ApiStatus.ideal;
    },
  },
  extraReducers(builder) {
    builder.addCase(getChequesListAction.pending, (state) => {
      state.listStatus = ApiStatus.loading;
    });
    builder.addCase(getChequesListAction.fulfilled, (state, action) => {
      state.listStatus = ApiStatus.ideal;
      state.list = action.payload;
    });
    builder.addCase(getChequesListAction.rejected, (state) => {
      state.listStatus = ApiStatus.error;
    });
    builder.addCase(createChequeAction.pending, (state) => {
      state.createChequeFormStatus = ApiStatus.loading;
    });
    builder.addCase(createChequeAction.fulfilled, (state) => {
      state.createChequeFormStatus = ApiStatus.success;
      toastSuccess("Чек успешно создан");
    });
    builder.addCase(createChequeAction.rejected, (state) => {
      state.createChequeFormStatus = ApiStatus.error;
      toastError("Не удалось создать чек");
    });
    builder.addCase(deleteChequeAction.fulfilled, (state, action) => {
      const newList = state.list.filter((x) => x.id !== action.payload);
      state.list = newList;
      toastSuccess("Чек успешно удален");
    });
    builder.addCase(deleteChequeAction.rejected, (state) => {
      state.createChequeFormStatus = ApiStatus.error;
      toastError("Не удалось удалить чек");
    });
    builder.addCase(updateChequeAction.pending, (state) => {
      state.updateChequeFormStatus = ApiStatus.loading;
    });
    builder.addCase(updateChequeAction.fulfilled, (state) => {
      state.updateChequeFormStatus = ApiStatus.ideal;
      toastSuccess("Чек успешно изменен");
    });
    builder.addCase(updateChequeAction.rejected, (state) => {
      state.updateChequeFormStatus = ApiStatus.error;
      toastError("Не удалось изменить чек");
    });
  },
});

export default chequeSlice.reducer;

export const { resetCreateListStatus } = chequeSlice.actions;
