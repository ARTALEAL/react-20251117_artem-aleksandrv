import { useContext, useEffect, useReducer } from 'react';
import { Counter } from '../Counter/Counter';
import styles from './ReviewForm.module.css';
import classNames from 'classnames';
import { UserContext } from '../../contexts/user-context';
import {
  useAddReviewMutation,
  useUpdateReviewMutation,
} from '../../redux/services/api';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: 0,
  currentRestaurantId: null,
  isEdit: false,
};

const INPUT_NAME = 'INPUT_NAME';
const INPUT_TEXT = 'INPUT_TEXT';
const INPUT_RATING_INCREMENT = 'INPUT_RATING_INCREMENT';
const INPUT_RATING_DECREMENT = 'INPUT_RATING_DECREMENT';
const INPUT_CLEAR = 'INPUT_CLEAR';
const SUBMIT_FORM = 'SUBMIT_FORM';
const SET_CURRENT_RESTAURAUNT = 'SET_CURRENT_RESTAURAUNT';
const SET_RATING = 'SET_RATING';
const SET_ISEDIT = 'SET_ISEDIT';

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
    case SET_RATING: {
      return { ...state, rating: action.value };
    }
    case SET_ISEDIT: {
      return { ...state, isEdit: action.value };
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
        name: state.name,
      };
    }
    default: {
      return state;
    }
  }
}

export default function ReviewForm({
  currentRestaurantId,
  title,
  editData,
  onEditComplete,
}) {
  const { user } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    currentRestaurantId: currentRestaurantId,
    name: user?.name,
  });

  const [sendForm, { isLoading }] = useAddReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  useEffect(() => {
    dispatch({ type: INPUT_NAME, value: user?.name || '' });
    if (editData) {
      dispatch({ type: INPUT_TEXT, value: editData?.text || '' });
      dispatch({ type: SET_RATING, value: editData?.rating || '' });
      dispatch({ type: SET_ISEDIT, value: true });
    } else {
      dispatch({ type: SET_ISEDIT, value: false });
    }
  }, [user, editData]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (state.isEdit) {
        console.log('edit');
        await updateReview({
          restaurantId: currentRestaurantId,
          reviewId: editData.id,
          review: { ...state, userId: user.id },
        });
        handleReset();
      } else {
        await sendForm({
          restaurantId: currentRestaurantId,
          review: { ...state, userId: user.id },
        });
        handleReset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    dispatch({ type: INPUT_CLEAR });
    onEditComplete();
  };

  if (!user) {
    return null;
  }
  return (
    <form
      key={currentRestaurantId}
      className={styles.reviewFormContainer}
      onSubmit={handleSubmitForm}
    >
      <h3>
        {state.isEdit
          ? `Редактирование отзыва ${title ? 'о ' + title : ''}`
          : `Оставьте отзыв ${title ? 'о ' + title : ''}`}
      </h3>
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
          disabled={!state.name || !state.text || isLoading}
        >
          {isLoading ? 'Sending' : 'Submit'}
        </button>
        <button
          className={classNames(
            styles.reviewFormButton,
            styles.reviewFormButton_clear
          )}
          type="button"
          onClick={handleReset}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
