import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyDataState {
  data: {
    [key: string]: any;
  };
}

const initialState: CompanyDataState = {
  data: {},
};

export const companyData = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<any>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    deleteData: (state, action: PayloadAction<any>) => {
      state.data = { ...action.payload, };
    },
    resetState: (state) => {
      state.data = {};
    },
  },
});

export const { addData, deleteData, resetState } = companyData.actions;

export default companyData.reducer;
