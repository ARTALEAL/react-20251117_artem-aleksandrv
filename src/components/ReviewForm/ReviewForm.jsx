import { useEffect, useReducer } from 'react';
import { Counter } from '../Counter/Counter';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 0,
  currentRestaurauntId: null,
};

const INPUT_NAME = 'INPUT_NAME';
const INPUT_TEXT = 'INPUT_TEXT';
const INPUT_RATING_INCREMENT = 'INPUT_RATING_INCREMENT';
const INPUT_RATING_DECREMENT = 'INPUT_RATING_DECREMENT';
const INPUT_CLEAR = 'INPUT_CLEAR';
const SUBMIT_FORM = 'SUBMIT_FORM';
const SET_CURRENT_RESTAURAUNT = 'SET_CURRENT_RESTAURAUNT';

function reducer(state, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURAUNT: {
      return { ...state, currentRestaurauntId: action.value };
    }
    case INPUT_NAME: {
      return { ...state, name: action.value };
    }
    case INPUT_TEXT: {
      return { ...state, text: action.value };
    }
    case INPUT_RATING_INCREMENT: {
      return { ...state, rating: state.rating + 1 };
    }
    case INPUT_RATING_DECREMENT: {
      return { ...state, rating: state.rating - 1 };
    }
    case SUBMIT_FORM: {
      console.log(state);
      return INITIAL_STATE;
    }
    case INPUT_CLEAR: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

export default function ReviewForm({ currentRestaurantId, title }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: SET_CURRENT_RESTAURAUNT, value: currentRestaurantId });
  }, [currentRestaurantId]);

  return (
    <form style={{ border: '1px solid black', padding: '10px' }}>
      <h3>Оставьте отзыв {title ? 'о ' + title : ''}</h3>
      <p>
        <label htmlFor="name">Имя: </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={state.name || ''}
          onChange={(e) =>
            dispatch({ type: INPUT_NAME, value: e.target.value })
          }
        />
      </p>
      <p>
        <label htmlFor="text">Текст: </label>
        <textarea
          id="text"
          name="text"
          type="text"
          rows={5}
          cols={33}
          required
          value={state.text || ''}
          onChange={(e) => {
            dispatch({ type: INPUT_TEXT, value: e.target.value });
          }}
        />
      </p>
      <Counter
        minValue={0}
        maxValue={5}
        value={state.rating}
        increment={() => dispatch({ type: INPUT_RATING_INCREMENT })}
        decrement={() => dispatch({ type: INPUT_RATING_DECREMENT })}
        title={'Количество звёзд'}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: SUBMIT_FORM });
        }}
      >
        Submit
      </button>
      <button onClick={() => dispatch({ type: INPUT_CLEAR })}>Clear</button>
    </form>
  );
}
