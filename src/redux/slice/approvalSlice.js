import { createSlice } from '@reduxjs/toolkit';

const approverSlice = createSlice({
  name: 'approver',
  initialState: {
    selectedApprover: '',
  },
  reducers: {
    setApprover: (state, action) => {
      state.selectedApprover = action.payload;
    },
  },
});

export const { setApprover } = approverSlice.actions;
export default approverSlice.reducer;
