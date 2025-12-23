import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './ReviewsList.module.css';
import Review from '../Review/Review';
import {
  useAddReviewMutation,
  useGetReviewsQuery,
  useUpdateReviewMutation,
} from '../../redux/services/api';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restauraunt/restaurauntSlice';

export default function ReviewsList() {
  const { restaurantId } = useParams();
  const [editData, setEditData] = useState(null);
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const {
    data,
    isLoading: isReviewsLoading,
    isError,
  } = useGetReviewsQuery(restaurantId);
  const [sendForm, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const [updateReview, { isLoading: isUpdateReviewLoading }] =
    useUpdateReviewMutation();

  const isLoading =
    isAddReviewLoading || isUpdateReviewLoading || isReviewsLoading;

  const handleEditReview = (reviewId, text, rating) => {
    setEditData({ id: reviewId, text, rating });
  };

  const handleSubmitForm = async (data) => {
    try {
      if (data?.reviewId) {
        await updateReview({
          restaurantId: data.currentRestaurantId,
          reviewId: data.reviewId,
          review: data.review,
        });
        handleReset();
      } else {
        await sendForm({
          restaurantId: restaurantId,
          review: data.review,
        });
        handleReset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setEditData(null);
  };

  if (isReviewsLoading) {
    return (
      <div className={styles.reviewsListContainer}>
        <h3 className={styles.reviewsListTitle}>Отзывы</h3>
        <ul>
          <li>Будьте первым, кто оставит отзыв!</li>
        </ul>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.reviewsListContainer}>
        <h3 className={styles.reviewsListTitle}>Отзывы</h3>
        <ul>
          <li>Упс, какая-то ошибка с сервером...</li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.reviewsListContainer}>
      <h3 className={styles.reviewsListTitle}>Отзывы</h3>
      <ul>
        {data.length > 0 ? (
          data.map(({ id, userId, text, rating }) => (
            <Review
              key={id}
              reviewId={id}
              userId={userId}
              text={text}
              rating={rating}
              handleEdit={handleEditReview}
            />
          ))
        ) : (
          <li>Будьте первым, кто оставит отзыв!</li>
        )}
      </ul>
      <ReviewForm
        key={editData?.id || 'new-review-form'}
        currentRestaurantId={restaurantId}
        editData={editData}
        onSubmit={handleSubmitForm}
        title={name}
        isLoading={isLoading}
        handleReset={handleReset}
      />
    </div>
  );
}
