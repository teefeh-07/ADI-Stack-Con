import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

// Input Component Definition

interface InputProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
