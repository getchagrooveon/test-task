import {useEffect} from 'react';
import UserCard from './UserCard/UserCard';
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
