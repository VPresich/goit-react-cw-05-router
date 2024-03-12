import styles from './Pagination.module.css';
import clsx from 'clsx';
import { getPagesArray } from '../../../utils/pages';

export const Pagination = ({ totalPages, page, onChangePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={styles.pagesWrapper}>
      {pagesArray.map(p => (
        <span
          className={clsx(styles.page, {
            [styles.pageActive]: p === page,
          })}
          onClick={() => onChangePage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
