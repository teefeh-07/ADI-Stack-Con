import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';

// Button Component Definition

interface ButtonProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title = 'Button', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Button;
