import {configureStore, createSlice} from '@reduxjs/toolkit'

const Homedata = createSlice({
    name:'Data',
    initialState:{
        search:'',
        data:null,
        searchArray:[],
    },
    reducers:{
        Searching(state,action){
            return{
                ...state,
                search:action.payload
            }
        },
        Setdata(state,action){
            return{
                ...state,
                data:action.payload
            }
        },
        setArray(state,action){
            return{
                ...state,
                searchArray:[...state.searchArray,action.payload]
            }
        },
        emptyArray(state){
            return{
                ...state,
                searchArray:[]
            }
        },
        deleteArray(state,action){
            //state.searchArray.splice(action.payload,1)
            //state.searchArray.splice(action.payload,1)
            return{
                ...state,
                searchArray:[...state.searchArray.slice(0,action.payload),...state.searchArray.slice(action.payload+1)]
            }
        }
    }
})

export  const Search = Homedata.actions
const store = configureStore({
    reducer:{
        Data:Homedata.reducer
    }
})
export default store;