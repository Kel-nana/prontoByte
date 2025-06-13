import React, { useEffect } from 'react';
import Splitting from 'splitting';
import ScrollOut from 'scroll-out';
import 'splitting/dist/splitting.css';
import './bulge.css';

interface BulgeTextProps {
  text: string;
  className?: string;
}

const BulgeText: React.FC<BulgeTextProps> = ({ text, className = '' }) => {
  useEffect(() => {
    Splitting({ target: '[data-splitting]', by: 'chars' });
    ScrollOut({ targets: '.text--bulge' });
  }, []);

  return (
    <div className={`text--bulge ${className}`} data-splitting>
      {text}
    </div>
  );
};

export default BulgeText;
