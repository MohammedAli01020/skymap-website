import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selected: "/",
    active: false
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload
        },

        setSelected: (state, action) => {
            state.selected = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setActive, setSelected } = headerSlice.actions

export default headerSlice.reducer