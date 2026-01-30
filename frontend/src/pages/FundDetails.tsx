import React, { useState, useEffect } from 'react';
import styles from './FundDetails.module.css';

// FundDetails Component Definition

interface FundDetailsProps {
  title?: string;
  isActive?: boolean;
  onAction?: () => void;
}
