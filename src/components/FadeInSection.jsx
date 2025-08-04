import React from 'react';

const FadeInSection = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div',
}) => {
  const Comp = as;

  return (
    <Comp
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

export default FadeInSection;
