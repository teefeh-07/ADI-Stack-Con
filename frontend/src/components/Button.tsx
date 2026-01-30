import React, { useState, useEffect } from 'react';
import styles from './Button.module.css';

// Button Component Definition

interface ButtonProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
