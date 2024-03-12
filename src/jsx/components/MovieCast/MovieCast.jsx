import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';
import InfinityLoader from '../UI/loader/Infinity/Infinity';
import CastList from '../CastList/CastList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const [loading, error, fetchCreditsData] = useFetchData(
    async (id, credits = 'credits') => {
      const responce = await ApiService.getMovieDetailsById(id, credits);
      setItems(responce.cast);
    }
  );

  useEffect(() => handleCredits(), []);

  const handleCredits = () => {
    fetchCreditsData(id);
  };
  return (
    <>
      <InfinityLoader isLoading={loading} />
      {error && <ErrorMessage />}
      {items && <CastList items={items} />}
    </>
  );
};

export default MovieCast;
