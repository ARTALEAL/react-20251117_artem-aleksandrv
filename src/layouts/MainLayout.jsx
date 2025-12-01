import ScrollProgress from '../components/ScrollProgress/ScrollProgress';

export const MainLayout = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <header>
        <ScrollProgress />
        <h1 style={{ textAlign: 'center' }}>Рестораны</h1>
      </header>
      <main>{children}</main>
      <footer>
        <span>{year}</span>
      </footer>
    </>
  );
};
