// components/TurningText.tsx
import React, { useEffect } from 'react';
import Splitting from 'splitting';
import ScrollOut from 'scroll-out';
import 'splitting/dist/splitting.css';
import './turning.css'; 

interface TurningTextProps {
  text: string;
}

const TurningText: React.FC<TurningTextProps> = ({ text }) => {
  useEffect(() => {
    Splitting({ target: '[data-splitting]', by: 'chars' });
    ScrollOut({ targets: ['.text--turning'] });
  }, []);

  return (
    <div className="text--turning text-gray-600 mb-6 leading-relaxed char" data-splitting>
      {text}
    </div>
  );
};

export default TurningText;
