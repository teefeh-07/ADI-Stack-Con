import React, { useState, useEffect } from 'react';
import styles from './Avatar.module.css';

// Avatar Component Definition

interface AvatarProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
