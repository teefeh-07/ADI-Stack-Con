// TransactionHistory Component Framework
import React, { useEffect, useState } from 'react';
import styles from './TransactionHistory.module.css';

interface TransactionHistoryProps {
  id: string;
  debug?: boolean;
}

// Internal State Interface
interface State {
  loading: boolean;
  data: any;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ id, debug }) => {
  const [state, setState] = useState<State>({ loading: false, data: null });

  useEffect(() => {
    if(debug) console.log('Component Mounted', id);
  }, [id, debug]);

  return (
    <div className={styles.wrapper}>
      <h2>Module: {id}</h2>
      {state.loading && <p>Loading...</p>}
    </div>
  );
};
