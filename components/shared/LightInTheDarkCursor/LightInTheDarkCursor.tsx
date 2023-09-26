import React, { CSSProperties } from 'react';
import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';

const inlineStyle = {
  '--position-y': '0',
  '--position-x': '0',
} as CSSProperties;

const lightInTheDarkCursorCss = css`
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    600px at var(--position-x) var(--position-y),
    rgba(29, 78, 216, 0.15),
    transparent 80%
  );
`;

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
      css={lightInTheDarkCursorCss}
      ref={elementRef}
      style={inlineStyle}
    ></div>
  );
}
