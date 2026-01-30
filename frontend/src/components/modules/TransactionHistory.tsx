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
