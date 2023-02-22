import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/store/counterSlice.js'
import headerReducer from '@/store/headerSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        header: headerReducer
    },
})