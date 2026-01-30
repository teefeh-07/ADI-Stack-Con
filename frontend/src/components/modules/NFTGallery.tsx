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

export const NFTGallery: React.FC<NFTGalleryProps> = ({ id, debug }) => {
  const [state, setState] = useState<State>({ loading: false, data: null });

  useEffect(() => {
    if(debug) console.log('Component Mounted', id);
  }, [id, debug]);
