import { createSlice } from '@reduxjs/toolkit';

export const urlSlice = createSlice({
    name: 'characterUrl',
    initialState: 'https://rickandmortyapi.com/api/character/1',
    reducers: {
        changeUrl:(state,action)=>{
            return action.payload
        }
    }
})

export const { changeUrl } = urlSlice.actions;

export default urlSlice.reducer;
