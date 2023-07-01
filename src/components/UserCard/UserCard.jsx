import styles from './UserCard.module.css';
import Logo from '../Logo/Logo.jsx';
import DecorativeFrame from '../DecorativeFrame/DecorativeFrame';
import Information from '../Information/Information';
import Button from '../Button/Button';
import {selectLoading, selectUsers} from '../../redux/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUsers} from '../../services/API';

const UserCard = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);

  console.log(users);

  const handleClick = (event, text) => {
    event.target.classList.toggle('active');
  };

  return (
    !isLoading && (
      <ul className='card-container'>
        {users.map(user => (
          <li key={user.id} className={styles.usercard}>
            <Logo />
            <DecorativeFrame avatar={user.avatar} />
            <Information tweets={user.tweets} followers={user.followers} />
            <Button action={handleClick} />
          </li>
        ))}
      </ul>
    )
  );
};

export default UserCard;
