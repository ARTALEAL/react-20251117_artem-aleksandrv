export const MainLayout = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <header>
        <h1>Рестораны</h1>
      </header>
      <main>{children}</main>
      <footer
        style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}
      >
        <span>{year}</span>
      </footer>
    </>
  );
};
