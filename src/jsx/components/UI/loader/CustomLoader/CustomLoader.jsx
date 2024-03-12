import styles from './CustomLoader.module.css';

export const CustomLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={[styles.loader]}></div>
    </div>
  );
};
