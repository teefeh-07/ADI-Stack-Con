import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

// Modal Component Definition

interface ModalProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title = 'Modal', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Modal;
