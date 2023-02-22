import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: "ahmed"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,updateName } = counterSlice.actions

export default counterSlice.reducer