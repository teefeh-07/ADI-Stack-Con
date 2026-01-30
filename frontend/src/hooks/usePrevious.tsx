import React, { useState, useEffect } from 'react';
import styles from './usePrevious.module.css';

// usePrevious Component Definition

interface usePreviousProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const usePrevious: React.FC<usePreviousProps> = ({ title = 'usePrevious', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default usePrevious;
