import { createSlice } from '@reduxjs/toolkit';

const firstStepSlice = createSlice({
  name: 'step 1',
  initialState: [
    'Варіант 1',
    'Варіант 2',
    'Варіант 3',
    'Варіант 4',
    'Варіант 5',
    'Варіант 6'
  ],
  reducers: {
    setStepOne(_, action) {
      return action.payload;
    },
  },
});

export const { setStepOne } = firstStepSlice.actions;
export const firstStepReducer = firstStepSlice.reducer;
