import {createSlice} from '@reduxjs/toolkit';
import {filterThunk, getUpdatedUsersThunk, getUsersThunk, loadMoreThunk} from './operations';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  page: 1,
  limit: 3,
  closeButton: false,
};

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
const handleUsersFulfilled = (state, {payload}) => {
  state.users = [...state.users, ...payload];
  state.isLoading = false;
};

const handleRejected = (state, {error}) => {
  state.error = error;
  state.isLoading = false;
};

const handleUpdateUsersFulfilled = (state, {payload}) => {
  state.users = state.users.map(user => (user.id === payload.id ? payload : user));
  state.isLoading = false;
};

const handleLoadMoreFulfilled = (state, {payload}) => {
  state.users = [...state.users, ...payload];
  state.isLoading = false;
  state.closeButton = payload.length < state.limit ? true : false;
};

const handleFilterFulfilled = (state, {payload}) => {
  state.users = payload;
  state.isLoading = false;
  state.closeButton = true;
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, handleUsersFulfilled)
      .addCase(getUsersThunk.rejected, handleRejected)
      .addCase(getUpdatedUsersThunk.pending, handlePending)
      .addCase(getUpdatedUsersThunk.fulfilled, handleUpdateUsersFulfilled)
      .addCase(getUpdatedUsersThunk.rejected, handleRejected)
      .addCase(loadMoreThunk.pending, handlePending)
      .addCase(loadMoreThunk.fulfilled, handleLoadMoreFulfilled)
      .addCase(loadMoreThunk.rejected, handleRejected)
      .addCase(filterThunk.pending, handlePending)
      .addCase(filterThunk.fulfilled, handleFilterFulfilled)
      .addCase(filterThunk.rejected, handleRejected);
  },
});

export const usersReducer = slice.reducer;
export const {addPage} = slice.actions;
