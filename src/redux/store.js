import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { firstStepReducer } from './firstStep/firstStep.reducer';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];



export const store = configureStore({
  reducer: {
    firstStep: firstStepReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

