import React from 'react';
import useInView from './useInView';

export default function FadeInSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div',
}) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  let translateClass = '';
  switch (direction) {
    case 'up':
      translateClass = 'translate-y-8';
      break;
    case 'down':
      translateClass = '-translate-y-8';
      break;
    case 'left':
      translateClass = 'translate-x-8';
      break;
    case 'right':
      translateClass = '-translate-x-8';
      break;
    default:
      translateClass = 'translate-y-8';
  }

  const Comp = as;

  return (
    <Comp
      ref={ref}
      className={
        `transition-all duration-700 ease-out ${className} ` +
        (inView
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${translateClass}`)
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
} 