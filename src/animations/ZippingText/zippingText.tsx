// components/ZippingText.tsx
import React, { useEffect } from 'react';
import Splitting from 'splitting';
import ScrollOut from 'scroll-out';
import 'splitting/dist/splitting.css';
import './zipping.css'; // We'll create this next

interface ZippingTextProps {
  text: string;
}

const ZippingText: React.FC<ZippingTextProps> = ({ text }) => { 
  // useEffect(() => {
  //   Splitting({ target: '[data-splitting]', by: 'chars' });
  //   ScrollOut({ targets: '.text--zipping' }); // targets the whole text block
  // }, []);
  useEffect(() => {
  Splitting({ target: '[data-splitting]', by: 'chars' });
  ScrollOut({ targets: ['.text--zipping', '.icon--zipping'] });
}, []);

  return (
    <div className="text text--zipping" data-splitting>
      {text}
    </div>
  );
};

export default ZippingText;

