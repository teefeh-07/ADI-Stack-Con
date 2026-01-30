// GovernanceVote Component Framework
import React, { useEffect, useState } from 'react';
import styles from './GovernanceVote.module.css';

interface GovernanceVoteProps {
  id: string;
  debug?: boolean;
}

// Internal State Interface
interface State {
  loading: boolean;
  data: any;
}
