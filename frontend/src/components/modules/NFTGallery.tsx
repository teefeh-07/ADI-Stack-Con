// NFTGallery Component Framework
import React, { useEffect, useState } from 'react';
import styles from './NFTGallery.module.css';

interface NFTGalleryProps {
  id: string;
  debug?: boolean;
}

// Internal State Interface
interface State {
  loading: boolean;
  data: any;
}
