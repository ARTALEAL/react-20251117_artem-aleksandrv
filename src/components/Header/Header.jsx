import { useContext, useState } from 'react';
import ScrollProgress from '../ScrollProgress/ScrollProgress';
import styles from './Header.module.css';
import { ThemeContext } from '../../contexts/theme-context';
import classNames from 'classnames';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import LoginButton from '../LoginButton/LoginButton';
import { NavLink } from 'react-router';
import { UserContext } from '../../contexts/user-context';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Cart from '../Cart/Cart';
import { selectCartItems } from '../../redux/entities/cart/cartSlice';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);

  return (
    <header
      className={classNames({
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <ScrollProgress />
      <NavLink to="/">🏠</NavLink>
      <div className={styles.buttonContainer}>
        {user && (
          <Button
            text={`🛒 ${cartItems.length ? `(${cartItems.length})` : ''}`}
            onClick={() => setIsCartOpen(true)}
            size={'l'}
          />
        )}
        <ThemeToggleButton />
        <LoginButton />
      </div>
      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart />
      </Modal>
    </header>
  );
}
