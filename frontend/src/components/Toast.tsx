import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';

// Toast Component Definition

interface ToastProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
