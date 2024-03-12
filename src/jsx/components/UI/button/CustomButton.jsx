import styles from './CustomButton.module.css';

export const CustomButton = ({ children, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};
