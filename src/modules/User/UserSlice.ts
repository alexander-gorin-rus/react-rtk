import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IUserForm, IUserState } from "./User.type";
import { createUserApi, getUsersListApi } from "./UserService";

const initialState: IUserState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createUserFormStatus: ApiStatus.ideal
}

export const getUsersListAction = createAsyncThunk(
    "users/getUsersListAction",
    async () => {
        const response = await getUsersListApi();
        return response.data;
    }
);

export const createUserAction = createAsyncThunk(
    "users/createUserAction",
    async (data: IUserForm) => {
        const response = await createUserApi(data);
        return response.data;
    }
); 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetCreateListStatus: (state) => {
            state.createUserFormStatus = ApiStatus.ideal
        }
    },
    extraReducers(builder) {
        builder.addCase(getUsersListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading;
        });
        builder.addCase(getUsersListAction.fulfilled, (state, action) => {
            state.listStatus = ApiStatus.ideal;
            state.list = action.payload;
        });
        builder.addCase(getUsersListAction.rejected, (state) => {
            state.listStatus = ApiStatus.error;
        });
        builder.addCase(createUserAction.pending, (state) => {
            state.createUserFormStatus = ApiStatus.loading;
        });
        builder.addCase(createUserAction.fulfilled, (state) => {
            state.createUserFormStatus = ApiStatus.success;
        });
        builder.addCase(createUserAction.rejected, (state) => {
            state.createUserFormStatus = ApiStatus.error;
        });
    },
});

export default userSlice.reducer;

export const { resetCreateListStatus } = userSlice.actions;