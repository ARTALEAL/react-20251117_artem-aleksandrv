import Header from '../components/Header/Header';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';

export const MainLayout = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <Header title={'Рестораны'} />
      <main>{children}</main>
      <footer>
        <span>{year}</span>
      </footer>
    </>
  );
};
