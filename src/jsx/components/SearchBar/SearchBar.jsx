import { useState } from 'react';
import { CustomButton } from '../UI/button/CustomButton';
import { CustomInput } from '../UI/input/CustomInput';
import { GoSearch } from 'react-icons/go';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch, initialValue }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <CustomButton type="submit">
        <GoSearch />
        Search
      </CustomButton>
    </form>
  );
};

export default SearchBar;
