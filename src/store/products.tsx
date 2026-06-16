import { createSlice, Dispatch, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store.tsx'

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProductsState {
  items: Product[];
  status: string | null,
  error: string | null
}

const initialState: ProductsState = {
  items: [],  // Здесь будут храниться данные, полученные с сервера
  status: null,
  error: null
}; 

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', // Название события
  async function (_, {rejectWithValue}) { // rejectWithValue - хелпер для перехвата ошибок  и передачи кастомного сообщения или объекта с ошибкой в редьюсер
    try {
      const responce = await fetch('http://localhost:3000/products') // Получаем данные
      if(!responce.ok) { // Если случается ошибка
        throw new Error('ServerError');
      } 
      const data = await responce.json(); // Извлекаем данные
      return data; // возвращаем данные
    }catch (error: unknown) { // Мы ошибку ловим и передаем в rejected
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      // Если ошибка не является Error, можно вернуть что-то по умолчанию
      return rejectWithValue('Unknown error');
    } 
  }
)

export const toggleProducts = createAsyncThunk(
  'products/toggleProducts',
  async function (id: number, {rejectWithValue, dispatch, getState}) {
    const state = getState() as RootState; 
    const product = state.products.items.find(product => product.id === id)

    try {
      const responce = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'lknkn.'
        })
      })
      console.log('fbdfnd')
      if(!responce.ok) { // Если случается ошибка
        throw new Error('ServerError');
      } 

    } catch (error: unknown) { // Мы ошибку ловим и передаем в rejected
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      // Если ошибка не является Error, можно вернуть что-то по умолчанию
      return rejectWithValue('Unknown error');
    } 
  }
)

export const productsSlice = createSlice({
  name: 'products', // Название слайса
  initialState, // Начальное состояние которое передаем
  reducers: { // Функции которые позволяют изменять состояниее
  },
  extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => { // Решает когда идет загрузка
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => { // Успешно получены данные
				state.items = action.payload;
				state.status = 'resolved';
			})
			.addCase(fetchProducts.rejected, (state) => {// Обработка пойманной ошибки
				state.status = 'rejected';
				state.error = 'Error occurred';
			});
	}

})


// export const getTitle = (state: RootState) => state.task.title;
// export const getArrTable = (state: RootState) => state.task.arrTable;
// export const sortingTypeNumber = (state: RootState) => state.task.sortingTypeNumber;
// export const sortingTypeName = (state: RootState) => state.task.sortingTypeName;




export const {  } = productsSlice.actions;





export default productsSlice.reducer