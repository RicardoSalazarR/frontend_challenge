import { createSlice } from '@reduxjs/toolkit';

export const urlSlice = createSlice({
    name: 'characterUrl',
    initialState: '',
    reducers: {
        changeUrl:(state,action)=>{
            return action.payload
        }
    }
})

export const { changeUrl } = urlSlice.actions;

export default urlSlice.reducer;
