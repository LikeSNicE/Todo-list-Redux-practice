import React from 'react';
import styles from './TodoAdd.module.scss';

const TodoAdd = () => {
  return (
    <div className={styles.inputAdd}>
      <input
      className={styles.inputAddValue}
      />
      <button
        className={styles.inputAddButton}
      />
    </div>
  );
};

export default TodoAdd;