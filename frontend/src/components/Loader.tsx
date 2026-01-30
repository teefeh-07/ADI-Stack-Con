import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

// Loader Component Definition

interface LoaderProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
