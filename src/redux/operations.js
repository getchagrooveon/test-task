import {createAsyncThunk} from '@reduxjs/toolkit';
import {getUsers} from '../services/API';

export const getUsersThunk = createAsyncThunk('users/get', getUsers);
