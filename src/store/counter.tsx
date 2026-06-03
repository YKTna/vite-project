import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { RootState } from './store.tsx'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0, // Начальное состояние 0
}

export const counterSlice = createSlice({
  name: 'counter', // Название слайса
  initialState, // Начальное состояние которое передаем
  reducers: { // Функции которые позволяют изменять состояниее
    increment: (state, action: { payload: number }) => { // Обращаемся через state
      state.value += action.payload;
    },
    decrement: (state, action: { payload: number}) => {
      state.value -= action.payload;
    },
  },
})

export const getCount = (state: RootState) => state.counter.value;

// Каррирование функций
// Такая функци позволяется диспатчить функции вместо простых экшен объектов
// Первая функция внешняя - принимает value, которое мы передаем с помощью dispatch
// Вторая функция внутренняя - вызывается редаксом
export const incrementBy = (value: number) => (dispatch: Dispatch) => {
  dispatch(increment(value)) // Тело внутренней функции
  // Отправляет action в редакс хранилище, чтобы reducers его обработал и увеличил состояние
}

export const decrementBy = (value: number) => (dispatch: Dispatch) => {
  dispatch(decrement(value))
}

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer