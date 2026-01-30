import React, { useState, useEffect } from 'react';
import styles from './useOnClickOutside.module.css';

// useOnClickOutside Component Definition

interface useOnClickOutsideProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const useOnClickOutside: React.FC<useOnClickOutsideProps> = ({ title = 'useOnClickOutside', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
