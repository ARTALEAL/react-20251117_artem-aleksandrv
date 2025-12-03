import ScrollProgress from '../ScrollProgress/ScrollProgress';
import styles from './Header.module.css';
export default function Header({ title }) {
  return (
    <header>
      <ScrollProgress />
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
}
