import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';
import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';
import SearchBar from '../../SearchBar/SearchBar';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemsList from '../../ItemsList/ItemsList';
import { NO_ELEMENTS } from '../../ErrorMessage/constants';
import { ERR_EMPTY_SEARCH } from '../../../notifications/constants';
import errNotify from '../../../notifications/errorNotify';
import { Toaster } from 'react-hot-toast';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, error, fetchItemData] = useFetchData(async filter => {
    const responce = await ApiService.searchMovies(filter);
    setItems(responce);
  });

  useEffect(() => {
    const strFilter = searchParams.get('search');
    strFilter && fetchItemData(strFilter);
  }, []);

  const handleSearch = strFilter => {
    if (strFilter === '') {
      errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    fetchItemData(strFilter);
    setSearchParams({ search: strFilter });
  };

  return (
    <AppContainer>
      <AppSection>
        <SearchBar
          onSearch={handleSearch}
          initialValue={searchParams.get('search')}
        />
        <Toaster />
        <InfinityLoader isLoading={loading} />
        {error && <ErrorMessage />}
        {items.length ? (
          <ItemsList items={items} />
        ) : (
          <ErrorMessage msg={NO_ELEMENTS} />
        )}
      </AppSection>
    </AppContainer>
  );
};

export default MoviesPage;
