import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleModal: state => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
});

export const { toggleModal } = appSlice.actions;
export default appSlice.reducer;
