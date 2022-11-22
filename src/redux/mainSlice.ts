import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WetherType } from '../types/types';

type WetherState = {
  wetherOb: WetherType;
  isLoading: boolean;
};

const initialState:WetherState = {
  wetherOb: {
    name: '',
    feels_like: 0,
    temp: 0,
    icon: '',
    main: ''
  },
  isLoading: true
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addWether(state, action: PayloadAction<WetherType>) {
      state.wetherOb = action.payload;
    },
    setIsLoading(state){
      state.isLoading = false
    }
  },
});

export const { addWether, setIsLoading } = mainSlice.actions;

export default mainSlice.reducer;
