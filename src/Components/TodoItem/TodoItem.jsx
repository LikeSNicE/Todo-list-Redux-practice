import React from 'react';
import styles from './TodoItem.module.scss';

const TodoItem = () => {
  return (
    <div className={styles.inputItem}>
      <label className={styles.inputItemLabel}>
        <input type="checkbox" className={styles.inputItemCheckbox} />
        <h3 className={styles.inputItemTitle}>1</h3>
      </label>
      <button className={styles.inputItemEdit} />
      <button className={styles.inputItemRemove} />
    </div>
  );
};

export default TodoItem;