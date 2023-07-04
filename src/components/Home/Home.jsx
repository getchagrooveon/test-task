import styles from './Home.module.css';
import Logo from '../Logo/Logo.jsx';
import DecorativeFrame from '../DecorativeFrame/DecorativeFrame';
import Information from '../Information/Information';
import Button from '../Button/Button';
import {getButtonStatus, getPage, selectLoading, selectUsers} from '../../redux/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {filterThunk, getUpdatedUsersThunk, loadMoreThunk} from '../../redux/operations';
import PaginationButton from '../PaginationButton/PaginationButton';
import {addPage} from '../../redux/slice';
import Navigation from '../Navigation/Navigation';
import Filters from '../Filters/Filters';

const UserCard = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const buttonStatus = useSelector(getButtonStatus);

  const handleClick = (event, user) => {
    let dummyUser = {};

    switch (user.following) {
      case true:
        dummyUser = {
          ...user,
          following: !user.following,
          followers: user.followers - 1,
        };
        event.target.classList.add('active');
        break;
      case false:
        dummyUser = {
          ...user,
          following: !user.following,
          followers: user.followers + 1,
        };
        event.target.classList.remove('active');
        break;
      default:
        return;
    }
    dispatch(getUpdatedUsersThunk(dummyUser));
  };

  const handleLoad = () => {
    dispatch(loadMoreThunk(page));
    dispatch(addPage());
  };
  const handleFilter = value => {
    switch (value) {
      case 'All':
        dispatch(filterThunk());
        break;
      case 'To follow':
        dispatch(filterThunk(false));
        break;
      case 'Following':
        dispatch(filterThunk(true));
        break;
      default:
        return;
    }
  };
  return (
    !isLoading && (
      <>
        <Navigation />
        <Filters action={handleFilter} />
        <ul className={styles.cardContainer}>
          {users.map(user => (
            <li key={user.id} className={styles.usercard}>
              <Logo />
              <DecorativeFrame avatar={user.avatar} />
              <Information tweets={user.tweets} followers={user.followers} />
              <Button action={handleClick} info={user} />
            </li>
          ))}
        </ul>
        {!buttonStatus ? (
          <PaginationButton action={handleLoad} />
        ) : (
          <p className={styles.message}>No more users to load</p>
        )}
      </>
    )
  );
};

export default UserCard;
