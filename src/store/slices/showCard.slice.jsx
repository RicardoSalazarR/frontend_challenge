import { createSlice } from '@reduxjs/toolkit';

export const showCardSlice = createSlice({
    name: 'showCard',
    initialState: false,
    reducers: {
        changeVisibilitiy: (state, action) => {
            return action.payload
        }
    }
})

export const { changeVisibilitiy } = showCardSlice.actions;

export default showCardSlice.reducer;
