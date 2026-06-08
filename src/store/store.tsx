import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.tsx'
import aboutReducer from './about.tsx'
import taskReducer from './task.tsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    about: aboutReducer,
    task: taskReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch