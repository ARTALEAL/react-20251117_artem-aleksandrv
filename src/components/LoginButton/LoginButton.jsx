import Button from '../Button/Button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { useGetUsersQuery } from '../../redux/services/api';

export default function LoginButton() {
  const { user, setUser } = useContext(UserContext);
  const { data } = useGetUsersQuery();

  const toggleUser = () => {
    if (user) {
      setUser(null);
    } else {
      const random = Math.floor(Math.random() * data.length);
      setUser(data[random]);
    }
  };

  return (
    <Button
      text={user ? `${user.name}: выйти` : 'Войти'}
      onClick={toggleUser}
      size="l"
    />
  );
}
