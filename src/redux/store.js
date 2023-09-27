import { configureStore } from '@reduxjs/toolkit'
import { getHistory } from './reduce/histrory'

const Store = configureStore({
   reducer: {
       history:getHistory
   }
})

export default Store