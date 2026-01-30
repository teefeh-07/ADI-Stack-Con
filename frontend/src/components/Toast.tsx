import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';

// Toast Component Definition

interface ToastProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ title = 'Toast', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Toast;
