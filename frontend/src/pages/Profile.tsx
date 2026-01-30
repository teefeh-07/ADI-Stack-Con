import React, { useState, useEffect } from 'react';
import styles from './Profile.module.css';

// Profile Component Definition

interface ProfileProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ title = 'Profile', isActive, onAction }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
    </div>
  );
};
