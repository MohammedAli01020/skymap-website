import {combineReducers, configureStore} from '@reduxjs/toolkit'

import counter from '@/store/counterSlice.js'
import header from '@/store/headerSlice.js'
import realestates from '@/store/realestatesSlice.js'
import filters from '@/store/filtersSlice.js'

import {createWrapper, HYDRATE} from 'next-redux-wrapper'

const combineReducer = combineReducers({
    counter,
    header,
    realestates,
    filters
})


const masterReducer = (state, action) => {

    console.log("payloadnew: "  +  JSON.stringify(action.payload))

    if (action.type === HYDRATE) {
        return {
            ...state,
            realestates: action.payload.realestates
        }
    } else {
        return combineReducer(state, action)
    }

}

const makeStore = () => configureStore({
        reducer: masterReducer
    })


export const wrapper = createWrapper(makeStore,{debug: true})