import React from 'react';
import Text from '../Text/Text';
import { anchorCss } from './Anchor.css';

export default function Anchor({ children, href, isExternal = true }) {
  const rel = isExternal ? 'noreferrer noopener' : undefined;
  const target = isExternal ? '_blank' : undefined;

  return (
    <Text
      as="a"
      className={anchorCss}
      fontWeight={400}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Text>
  );
}
