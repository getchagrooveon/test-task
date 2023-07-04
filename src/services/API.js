import axios from 'axios';

const API = axios.create({
  baseURL: 'https://648c44998620b8bae7ec9356.mockapi.io/contacts/users/',
});

export const getUsers = async page => {
  const limit = 3;
  const {data} = await API.get(`?page=${page}&limit=${limit}`);
  return data;
};

export const changeStatus = async user => {
  const {data} = await API.put(`/${user.id}`, {
    following: user.following,
    followers: user.followers,
  });
  return data;
};

export const filterUsers = async status => {
  const {data} = await API.get(``);
  switch (status) {
    case true:
      const result = data.filter(user => user.following === status);
      return result;
    case false:
      const result2 = data.filter(user => user.following === status);
      return result2;
    default:
      return data;
  }
};
