import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

// Navbar Component Definition

interface NavbarProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'Navbar', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
