import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

// Card Component Definition

interface CardProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
