import React, { useState, useEffect } from 'react';
import styles from './usePrevious.module.css';

// usePrevious Component Definition

interface usePreviousProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
