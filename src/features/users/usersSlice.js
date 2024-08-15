import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Tiago"},
    { id: "1", name: "Diego"},
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                    },
                };
            },
        },
    },
});

export const selectAllUsers = (state) => state.users;
export const { userAdded } = usersSlice.actions;
export default usersSlice.reducer;
