import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/user/userSlice';

export default function User({ userId }) {
  const userData = useSelector((state) => selectUserById(state, userId));
  return <b>{userData.name}</b>;
}
