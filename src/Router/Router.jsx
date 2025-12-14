import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage/HomePage';
import App from '../App';
import RestaurantsPage from '../pages/RestaurantsPage/RestaurantsPage';
import { Restaurant } from '../components/Restaurant/Restaurant';
import MenuList from '../components/MenuList/MenuList';
import ReviewsList from '../components/ReviewsList/ReviewsList';
import DishPage from '../pages/DishPage/DishPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'dish/:dishId', element: <DishPage /> },
      {
        path: 'restaurants',
        element: <RestaurantsPage />,
        children: [
          {
            path: ':restaurantId',
            element: <Restaurant />,
            children: [
              { path: 'menu', element: <MenuList /> },
              { path: 'reviews', element: <ReviewsList /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
