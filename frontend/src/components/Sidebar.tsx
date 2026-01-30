import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';

// Sidebar Component Definition

interface SidebarProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ title = 'Sidebar', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};

export default Sidebar;
