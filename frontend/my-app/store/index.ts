import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
