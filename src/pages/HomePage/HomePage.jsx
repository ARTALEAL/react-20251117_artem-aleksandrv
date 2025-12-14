import { NavLink } from 'react-router';

export default function HomePage() {
  return (
    <>
      <h1>Выберите сервис</h1>
      <NavLink to={'/restaurants'}>Рестораны</NavLink>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quod
        consequatur, placeat ab officiis nisi, laborum animi eum fuga ipsum
        beatae tempora nihil rerum voluptas officia tenetur, recusandae amet
        doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
        quae! Libero nobis deserunt tenetur, eum reiciendis repudiandae unde
        ipsam cupiditate quas fugit, quis rerum omnis dolor quod incidunt
        reprehenderit possimus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quod
        consequatur, placeat ab officiis nisi, laborum animi eum fuga ipsum
        beatae tempora nihil rerum voluptas officia tenetur, recusandae amet
        doloribus.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quod
        consequatur, placeat ab officiis nisi, laborum animi eum fuga ipsum
        beatae tempora nihil rerum voluptas officia tenetur, recusandae amet
        doloribus.
      </p>
    </>
  );
}
