import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { RootState } from './store.tsx'

export interface TaskState {
  title: string,

}





const initialState: TaskState = {
  title: 'Заголовок', // Начальное состояние 0

}





export const taskSlice = createSlice({
  name: 'task', // Название слайса
  initialState, // Начальное состояние которое передаем
  reducers: { // Функции которые позволяют изменять состояниее
    setTaskTitle: (state, action: { payload: string }) => { // Обращаемся через state
      state.title = action.payload;
    }
  },
})



export const getTitle = (state: RootState) => state.task.title;






export const { setTaskTitle } = taskSlice.actions;





export default taskSlice.reducer