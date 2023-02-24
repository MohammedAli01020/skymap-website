import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalElements: null,
    pageSize: null,
    totalPages: null,
    pageNumber: null,
    loading: true
}

export const realestatesSlice = createSlice({
    name: 'realestates',
    initialState,
    reducers: {
        updateState: (state, action) => {
            return action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateState } = realestatesSlice.actions

export default realestatesSlice.reducer