import styles from './CustomInput.module.css';

export const CustomInput = props => {
  return <input className={styles.input} {...props} />;
};
