import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        UserData: null,
        IsAuth: false,
        Token: null,
    },
    reducers: {

    },
});

// export const { } = UserSlice.actions


export const UserReducer = UserSlice.reducer;