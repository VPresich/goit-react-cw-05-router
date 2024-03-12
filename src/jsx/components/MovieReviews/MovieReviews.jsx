import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';

import InfinityLoader from '../UI/loader/Infinity/Infinity';
import ReviewList from '../ReviewList/ReviewList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { NO_ELEMENTS } from '../ErrorMessage/constants';

const MovieReviews = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const [loading, error, fetchReviewsData] = useFetchData(
    async (id, reviews = 'reviews') => {
      const responce = await ApiService.getMovieDetailsById(id, reviews);
      setItems(responce.results);
    }
  );

  useEffect(() => handleReviews(), []);

  const handleReviews = () => {
    fetchReviewsData(id);
  };

  return (
    <>
      <InfinityLoader isLoading={loading} />
      {error && <ErrorMessage />}

      {items.length ? (
        <ReviewList items={items} />
      ) : (
        <ErrorMessage msg={NO_ELEMENTS} />
      )}
    </>
  );
};

export default MovieReviews;
