import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        Todos: [],
        UserData:{}
    },
    reducers: {
        setTodos: (state, action) => {
            state.Todos = action.payload
        }
    },
});

export const { setTodos } = UserSlice.actions


export const UserReducer = UserSlice.reducer;