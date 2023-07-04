import {useEffect} from 'react';
import Home from './Home/Home';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersThunk} from '../redux/operations';
import {getPage, selectLoading} from '../redux/selectors';
import Loader from './Loader/Loader';
import {addPage} from '../redux/slice';
import {Navigate, Route, Routes} from 'react-router-dom';
import Tweets from './Tweets/Tweets';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(getUsersThunk(page));
    dispatch(addPage());
    // eslint-disable-next-line
  }, []);

  return !isLoading ? (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/tweets' element={<Tweets />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
      ;
    </>
  ) : (
    <Loader />
  );
};
