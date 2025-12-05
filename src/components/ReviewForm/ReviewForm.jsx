import { useContext, useReducer } from 'react';
import { Counter } from '../Counter/Counter';
import styles from './ReviewForm.module.css';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user-context';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 0,
  currentRestaurantId: null,
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
      return { ...state, currentRestaurantId: action.value };
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
      return {
        ...INITIAL_STATE,
        currentRestaurantId: state.currentRestaurantId,
      };
    }
    case INPUT_CLEAR: {
      return {
        ...INITIAL_STATE,
        currentRestaurantId: state.currentRestaurantId,
      };
    }
    default: {
      return state;
    }
  }
}

export default function ReviewForm({ currentRestaurantId, title }) {
  const { user } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    currentRestaurantId: currentRestaurantId,
  });

  if (user) {
    return (
      <form
        key={currentRestaurantId}
        className={styles.reviewFormContainer}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: SUBMIT_FORM });
        }}
      >
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
        <div className={styles.reviewFormButtonContainer}>
          <button
            className={classNames(
              styles.reviewFormButton,
              styles.reviewFormButton_submit
            )}
            type="submit"
          >
            Submit
          </button>
          <button
            className={classNames(
              styles.reviewFormButton,
              styles.reviewFormButton_clear
            )}
            type="button"
            onClick={() => dispatch({ type: INPUT_CLEAR })}
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}
