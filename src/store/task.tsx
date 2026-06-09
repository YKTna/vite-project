import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { RootState } from './store.tsx'

export interface ArrTable {
  id: number,
  name: string,
  isChecked: boolean
}


export interface TaskState {
  title: string,
  arrTable: ArrTable[],
  sortingTypeNumber: boolean,
  sortingTypeName: boolean
}





const initialState: TaskState = {
  title: 'Заголовок', // Начальное состояние 0
  arrTable: [
    {id: 1, name: 'Один', isChecked: false},
    {id: 2, name: 'Два', isChecked: false},
    {id: 3, name: 'Три', isChecked: false},
    {id: 4, name: 'Четыре', isChecked: false},
    {id: 5, name: 'Пять', isChecked: false}
  ],
  sortingTypeNumber: true,
  sortingTypeName: true
}





export const taskSlice = createSlice({
  name: 'task', // Название слайса
  initialState, // Начальное состояние которое передаем
  reducers: { // Функции которые позволяют изменять состояниее
    setTaskTitle: (state, action: { payload: string }) => { // Обращаемся через state
      state.title = action.payload;
    },
    addTask: (state, action: { payload: string }) => { // Обращаемся через state
      if(action.payload != '') {
        const newArr = [...state.arrTable]
        const obj = {id: newArr.length + 1, name: action.payload, isChecked: false}
        newArr.push(obj)
        state.arrTable = newArr
      }
    },
    deleteTask: (state, action: { payload: number }) => { // Обращаемся через state
      const newDeletedArr = state.arrTable.filter((el) => el.id != action.payload)
      state.arrTable = newDeletedArr
    },
    sortingNumber: (state, action: { payload: boolean }) => { // Обращаемся через state
      if(state.sortingTypeNumber == true) {
        const arrCopy = [...state.arrTable]
        const res = arrCopy.sort((a, b) => a.id - b.id)
        state.arrTable = res
        state.sortingTypeNumber = false
      } else {
        const arrCopy = [...state.arrTable]
        const res = arrCopy.sort((a, b) => a.id - b.id).reverse()
        state.arrTable = res
        state.sortingTypeNumber = true
      }
    },
    sortingName: (state, action: { payload: boolean }) => { // Обращаемся через state
      if(state.sortingTypeName == true) {
        const arrCopy = [...state.arrTable]
        const res = arrCopy.sort((a, b) => a.name.localeCompare(b.name))
        state.arrTable = res
        state.sortingTypeName = false
      } else {
        const arrCopy = [...state.arrTable]
        const res = arrCopy.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        state.arrTable = res
        state.sortingTypeName = true
      }
    },
    checked: (state, action: { payload: number }) => { // Обращаемся через state
      const res = state.arrTable.map((e) => {
        if(e.id == action.payload) {
          if(e.isChecked === false) {
            e.isChecked = true
            return e
          } else {
            e.isChecked = false
            return e
          }
        } else {
          return e
        }
      })
      state.arrTable = res
    },
  },
})



export const getTitle = (state: RootState) => state.task.title;
export const getArrTable = (state: RootState) => state.task.arrTable;
export const sortingTypeNumber = (state: RootState) => state.task.sortingTypeNumber;
export const sortingTypeName = (state: RootState) => state.task.sortingTypeName;




export const { setTaskTitle, addTask, deleteTask, sortingNumber, sortingName, checked } = taskSlice.actions;





export default taskSlice.reducer