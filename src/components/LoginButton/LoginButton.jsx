import Button from '../Button/Button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';

export default function LoginButton() {
  const { user, setUser } = useContext(UserContext);

  const toggleUser = () => {
    if (user) {
      setUser(null);
    } else {
      setUser('Таррар');
    }
  };

  return (
    <Button
      text={user ? `${user}: выйти` : 'Войти'}
      onClick={toggleUser}
      size="l"
    />
  );
}
