import { NavLink } from 'react-router';

export default function NotFoundPage() {
  return (
    <>
      <h1>По такому пути ничего нет</h1>
      <p>
        Давайте вернёмся <NavLink to="/">на главную старницу</NavLink>
      </p>
    </>
  );
}
