import { useRef, useEffect, useState } from 'react';

export function useIsViewed(elementRef) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const node = elementRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return Boolean(entry?.isIntersecting);
}
