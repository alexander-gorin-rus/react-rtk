import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IChequeForm, IChequeState } from "./Cheque.type";
import { createChequeApi, getChequesListApi } from "./ChequeService";

const initialState: IChequeState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createChequeFormStatus: ApiStatus.ideal,
    updateChequeFormStatus: ApiStatus.ideal
}

export const getChequesListAction = createAsyncThunk(
    "cheques/getChequesListAction",
    async () => {
        const response = await getChequesListApi();
        return response.data
    }
);

export const createChequeAction = createAsyncThunk(
    "users/createUserAction",
    async (data: IChequeForm) => {
        const response = await createChequeApi(data);
        return response.data;
    }
); 

const chequeSlice = createSlice({
    name: 'cheque',
    initialState,
    reducers: {
        resetCreateListStatus: (state) => {
            state.createChequeFormStatus = ApiStatus.ideal
        }
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
    }
});

export default chequeSlice.reducer;

export const { resetCreateListStatus } = chequeSlice.actions;