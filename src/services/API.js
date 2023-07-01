import axios from 'axios';

const API = axios.create({
  baseURL: 'https://648c44998620b8bae7ec9356.mockapi.io/contacts/users/',
});

export const getUsers = async () => {
  const {data} = await API.get('1');
  console.log(data);
  return data;
};
