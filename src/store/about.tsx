import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { RootState } from './store.tsx'

interface Link {
  src: string;
  alt: string;
  name: string;
}

interface Footer {
  copyright: string
}

export interface AboutState {
  title: string,
  mapLink: string,
  arrLink: Link[],
  footer: Footer
}

const initialState: AboutState = {
  title: 'Как найти нас в социальных сетях:', // Начальное состояние 0
  mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A3edec1e6966efbf16dba8b1a4993aa6e978615cce943105fa27d00da3ceeb53c&amp;source=constructor',
  arrLink: [
    {src: './vk.svg', alt: "Логотип вк", name: 'Ссылка на наш паблик VK'},
    {src: './maks.svg', alt: "Логотип макс", name: 'Ссылка на наш Макс'},
    {src: './inst.svg', alt: "Логотип Инстаграмм", name: 'Ссылка на наш Инстаграмм'},
    {src: './YouTube.svg', alt: "Логотип Ютуб", name: 'Ссылка на наш Ютуб'},
    {src: './telega.svg', alt: "Логотип Телеграм", name: 'Ссылка на наш Телеграм'},
    {src: './twitter.svg', alt: "Логотип Твиттер", name: 'Ссылка на наш Твиттер'}
  ],
  footer: {copyright: '© 2026 О нас. Год лошади.'}
}



export const aboutSlice = createSlice({
  name: 'about', // Название слайса
  initialState, // Начальное состояние которое передаем
  reducers: { // Функции которые позволяют изменять состояниее
    setTitle: (state, action: { payload: string}) => {
      state.title = action.payload;
    },
    setFooter: (state, action: { payload: Footer}) => {
      state.footer = action.payload;
    },
  },
})

export const getTitle = (state: RootState) => state.about.title;
export const getMapLink = (state: RootState) => state.about.mapLink;
export const getArrLink = (state: RootState) => state.about.arrLink;
export const getFooter = (state: RootState) => state.about.footer;

// Каррирование функций
// Такая функци позволяется диспатчить функции вместо простых экшен объектов
// Первая функция внешняя - принимает value, которое мы передаем с помощью dispatch
// Вторая функция внутренняя - вызывается редаксом
// export const incrementBy = (value: number) => (dispatch: Dispatch) => {
//   dispatch(increment(value)) // Тело внутренней функции
//   // Отправляет action в редакс хранилище, чтобы reducers его обработал и увеличил состояние
// }

// export const decrementBy = (value: number) => (dispatch: Dispatch) => {
//   dispatch(decrement(value))
// }

export const { setTitle } = aboutSlice.actions;
export const { setFooter } = aboutSlice.actions;

export default aboutSlice.reducer