import {createAsyncThunk} from '@reduxjs/toolkit';
import {changeStatus, filterUsers, getUsers} from '../services/API';

export const getUsersThunk = createAsyncThunk('users/get', getUsers);
export const getUpdatedUsersThunk = createAsyncThunk('users/update', changeStatus);
export const loadMoreThunk = createAsyncThunk('users/get-more', getUsers);
export const filterThunk = createAsyncThunk('users/filter', filterUsers);
