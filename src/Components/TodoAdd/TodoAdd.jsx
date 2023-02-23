import React from 'react';
import styles from './TodoAdd.module.scss';
import { useState } from 'react';



const TodoAdd = (props) => {

  const [inputValue,setInputValue] = useState('');

  const onAddPost = (value) => {
    props.addPost(value)
  }

  return (
    <div className={styles.inputAdd}>
      <input
      className={styles.inputAddValue}
      onChange={(e) => {
        setInputValue(e.target.value)
      }}
      value={inputValue}
      />
      <button
        className={styles.inputAddButton}
        onClick={() => {
          onAddPost(inputValue)
          setInputValue('');
        }}
      />
    </div>
  );
};

export default TodoAdd;