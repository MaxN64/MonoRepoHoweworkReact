import React, { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
 
 
  const prevRef = useRef(value);
  
  const prevValue = prevRef.current;

  useEffect(() => {
    
    prevRef.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue}</p>
    </div>
  );
}

export default ValueDisplay;
