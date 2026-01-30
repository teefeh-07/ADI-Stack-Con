// WalletSettings Component Framework
import React, { useEffect, useState } from 'react';
import styles from './WalletSettings.module.css';

interface WalletSettingsProps {
  id: string;
  debug?: boolean;
}

// Internal State Interface
interface State {
  loading: boolean;
  data: any;
}

export const WalletSettings: React.FC<WalletSettingsProps> = ({ id, debug }) => {
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
