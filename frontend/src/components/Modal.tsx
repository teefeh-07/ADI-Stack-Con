import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

// Modal Component Definition

interface ModalProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
