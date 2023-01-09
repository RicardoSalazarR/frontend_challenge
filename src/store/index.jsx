import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from './slices/username.slice'
import showCardSlice from './slices/showCard.slice'
import characterUrlSlice from './slices/characterUrl.slice'

export default configureStore({
    reducer: {
        username: usernameSlice,
        showCard:showCardSlice,
        url:characterUrlSlice
    }
})