import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

// Input Component Definition

interface InputProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Input: React.FC<InputProps> = ({ title = 'Input', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
