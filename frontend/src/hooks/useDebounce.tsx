import React, { useState, useEffect } from 'react';
import styles from './useDebounce.module.css';

// useDebounce Component Definition

interface useDebounceProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const useDebounce: React.FC<useDebounceProps> = ({ title = 'useDebounce', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
