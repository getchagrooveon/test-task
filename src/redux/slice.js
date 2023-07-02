import {createSlice} from '@reduxjs/toolkit';
import {getUsersThunk} from './operations';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
};

const handleUsersPending = state => {
  // state.error = null;
  // state.users.isLoading = true;
};
const handleUsersFulfilled = (state, {payload}) => {
  console.log(payload);
  // state.users.users = payload;
  // state.users.isLoading = false;
};

const handleUsersRejected = (state, {error}) => {
  // state.error = error.message;
  // state.users.isLoading = false;
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, handleUsersPending)
      .addCase(getUsersThunk.fulfilled, handleUsersFulfilled)
      .addCase(getUsersThunk.rejected, handleUsersRejected);
  },
});

export const usersReducer = slice.reducer;
