import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import dayjs from 'dayjs'

interface ClassInstance {
  id: {
    name: string,
    description?: string,
    date: any,
    duration: number,
    instructor?: string,
  }
}

// function updateObject(oldObject, newValues) {
//   // Encapsulate the idea of passing a new object as the first parameter
//   // to Object.assign to ensure we correctly copy data instead of mutating
//   return Object.assign({}, oldObject, newValues)
// }



const initialState = {
  "byID": {
    "1": {
      name: "Intro to Pole",
      date: dayjs("2023-12-01 1900"),
      duration: 60,
    },
    "2": {
      name: "Intro to Pole",
      date: dayjs("2023-12-03 1700"),
      duration: 60,      
    },
    "3": {
      name: "Spin Pole",
      date: dayjs("2023-12-02 1900"),
      duration: 90
    }
  },
  "allIDs": ["1", "2", "3"]
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {}
})