import { useEffect, useRef, useState } from 'react';

export default function useInView({ threshold = 0.15, root = null, rootMargin = '0px', triggerOnce = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    let observer;
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && observer) observer.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, root, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer && observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, inView];
} 