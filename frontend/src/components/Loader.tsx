import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

// Loader Component Definition

interface LoaderProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ title = 'Loader', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
