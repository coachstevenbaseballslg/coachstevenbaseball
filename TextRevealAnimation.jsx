
import React, { useEffect, useState } from 'react';
import '@/styles/textReveal.css';

const TextRevealAnimation = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount to ensure smooth entry
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper to handle simple string splitting if newlines are present
  // or just handle React children structure
  const getChildren = () => {
    let kids = React.Children.toArray(children);
    
    // If it's a single string child containing newlines, split it
    if (kids.length === 1 && typeof kids[0] === 'string' && kids[0].includes('\n')) {
      return kids[0].split('\n').map((str, i) => (
        <React.Fragment key={i}>
          {str}
          {i < kids[0].split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    
    return kids;
  };

  const childrenArray = React.Children.toArray(getChildren());

  return (
    <span className={`text-reveal-container inline-block leading-tight ${className}`}>
      {childrenArray.map((child, index) => (
        <span 
          key={index} 
          className={`reveal-line ${isVisible ? 'is-visible' : ''}`}
          style={{ 
            animationDelay: `${index * 0.15}s`, // Slightly faster for mobile responsiveness
            display: 'inline-block'
          }}
        >
          {child}
        </span>
      ))}
    </span>
  );
};

export default TextRevealAnimation;
