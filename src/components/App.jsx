import {useEffect} from 'react';
import UserCard from './UserCard/UserCard';
// import {getUsers} from '../services/API';
import {useDispatch} from 'react-redux';
import {getUsersThunk} from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <UserCard />
    </div>
  );
};
