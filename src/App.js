import React from 'react';
import styles from './App.module.scss';
import TodoAdd from './Components/TodoAdd/TodoAdd';
// import TodoItem from './Components/TodoItem/TodoItem';
import TodoItemContainer from './Components/TodoItem/TodoItemContainer';

function App() {
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Todo List Redux</h1>
      <section className={styles.articleSection}>
        <TodoAdd />
      </section>
      <section className={styles.articleSection}>
        <TodoItemContainer />
      </section>
    </article>
  );
}

export default App;
