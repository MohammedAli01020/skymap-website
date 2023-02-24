import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    realEstateId: null,
    notEqualId: null,
    mainCat: null,
    subCat: null,
    objective: null,
    greaterThanCreationDateTime: null,
    lessThanCreationDateTime: null,
    greaterThanBuildingArea: null,
    lessThanBuildingArea: null,
    likes: null,
    search: null,
    sortDirection: "DESC",
    sortBy: "creationDateTime",
    lessThanRequiredPrice: null,
    greaterThanRequiredPrice: null,
    uIds: [],
    governorate: null,
    city: null,
    phases: [],
    groupNumber: null,
    building: null,
    units: [],
    models: [],
    finishingTypes: [],
    furnished: null,
    pure: null,
    bedrooms: [],
    bathrooms: [],
    uId: null,
    unit: null,
    deleted: null,
    active: null,
    pageNumber: 0,
    pageSize:  25
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            return action.payload
        },

        resetFilters: (state) => {
            return initialState
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateFilters, resetFilters } = filtersSlice.actions

export default filtersSlice.reducer