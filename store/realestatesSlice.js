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
               state.items= action.payload.items
                state.totalElements= action.payload.totalElements
                state.pageSize= action.payload.pageSize
                state.totalPages= action.payload.totalPages
                state.pageNumber= action.payload.pageNumber
                state.loading= action.payload.loading
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateState } = realestatesSlice.actions

export default realestatesSlice.reducer