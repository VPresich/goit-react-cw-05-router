import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';
import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';
import AppSecTitle from '../../App/AppSecTitle/AppSecTitle';
import MovieInfo from '../../MovieInfo/MovieInfo';
import CustomLink from '../../UI/link/CustomLink';
import { FaArrowLeftLong } from 'react-icons/fa6';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';
import styles from './MovieDetails.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [itemLoading, itemError, fetchItemData] = useFetchData(async id => {
    const responce = await ApiService.getMovieDetailsById(id);
    setItem(responce);
  });

  useEffect(() => handleById(), []);

  const handleById = () => {
    fetchItemData(id);
  };

  return (
    <AppContainer>
      <AppSection>
        <CustomLink to={backLinkHref}>
          <FaArrowLeftLong />
          Back
        </CustomLink>
        <InfinityLoader isLoading={itemLoading} />
        {itemError ? <p>{itemError}</p> : <MovieInfo item={item} />}
      </AppSection>
      <AppSection>
        <AppSecTitle>Aditional information</AppSecTitle>
        <hr></hr>
        <nav className={styles.navLink}>
          <NavLink className={styles.link} to={`cast`} state={location.state}>
            Cast
          </NavLink>
          <NavLink
            className={styles.link}
            to={`reviews`}
            state={location.state}
          >
            Reviews
          </NavLink>
        </nav>
        <hr></hr>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AppSection>
    </AppContainer>
  );
};

export default MovieDetailsPage;
