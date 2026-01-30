import React, { useState, useEffect } from 'react';
import styles from './useLocalStorage.module.css';

// useLocalStorage Component Definition

interface useLocalStorageProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const useLocalStorage: React.FC<useLocalStorageProps> = ({ title = 'useLocalStorage', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default useLocalStorage;
