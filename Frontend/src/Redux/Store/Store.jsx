import {configureStore} from '@reduxjs/toolkit'
import CreateSlice from './CreateSlice'

const Store=configureStore({
    reducer:  {
        counter: CreateSlice
    }
})
export default Store