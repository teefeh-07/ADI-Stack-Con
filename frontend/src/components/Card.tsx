import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

// Card Component Definition

interface CardProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Card: React.FC<CardProps> = ({ title = 'Card', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
