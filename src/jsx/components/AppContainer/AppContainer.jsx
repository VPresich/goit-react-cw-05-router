import styles from './AppContainer.module.css';

export const AppContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
