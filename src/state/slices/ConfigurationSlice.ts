// redux/yourSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false,
};

const configuration = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    signin: (state) => {
      console.log('signin from redux')
      state.auth=true
    },
    singout:(state)=>{
state.auth=false
    }
  },
});

export const {signin,singout } = configuration.actions;

export default configuration.reducer;