import { useState } from 'react';
import { Restourant } from '../Restourant/Restourant';

export const RestaurantsList = ({ restaurants = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <nav>
        {restaurants.length > 0 ? (
          <ul style={{ display: 'flex', gap: '5px' }}>
            {restaurants.map(({ id, name }, index) => {
              return (
                <li
                  key={id}
                  data-restourant-number={index}
                  style={{ listStyle: 'none' }}
                >
                  <button
                    onClick={() => setActiveTab(index)}
                    disabled={activeTab === index}
                  >
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Мы скоро обновим список ресторанов</h2>
        )}
      </nav>
      <Restourant currentRestraunt={restaurants[activeTab]} />
    </>
  );
};
