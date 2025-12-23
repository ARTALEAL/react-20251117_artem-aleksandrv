import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Reviews'],
  endpoints: (build) => ({
    getRestraunts: build.query({ query: () => '/restaurants' }),
    getRestaurantById: build.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getDishesByRestaurauntId: build.query({
      query: (id) => `/dishes?restaurantId=${id}`,
    }),
    getDishById: build.query({
      query: (id) => `/dish/${id}`,
    }),
    getReviews: build.query({
      query: (id) => `/reviews?restaurantId=${id}`,
      providesTags: (_, __, restaurantId) => [
        { type: 'Reviews', id: restaurantId },
      ],
    }),
    getUsers: build.query({
      query: () => `/users`,
    }),
    addReview: build.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: (_, __, { restaurantId }) => [
        { type: 'Reviews', id: restaurantId },
      ],
    }),
    updateReview: build.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: (_, __, { restaurantId }) => [
        { type: 'Reviews', id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestrauntsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurauntIdQuery,
  useGetDishByIdQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
} = api;
