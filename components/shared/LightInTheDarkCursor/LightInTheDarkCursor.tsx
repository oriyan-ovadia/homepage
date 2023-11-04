import type { CSSProperties } from 'react';
import { useRef, useEffect } from 'react';
import { lightInTheDarkCursorCss } from './LightInTheDarkCursor.css';

const inlineStyle = {
  '--position-y': '0',
  '--position-x': '0',
} as CSSProperties;

export function LightInTheDarkCursor() {
  const elementRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      elementRef.current.style.setProperty(
        '--position-y',
        event.clientY - 50 + 'px',
      );
      elementRef.current.style.setProperty(
        '--position-x',
        event.clientX - 50 + 'px',
      );
    }

    document.documentElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.documentElement.removeEventListener(
        'mousemove',
        handleMouseMove,
      );
    };
  }, []);

  return (
    <div
      className={lightInTheDarkCursorCss}
      ref={elementRef}
      style={inlineStyle}
    ></div>
  );
}
