import Text from '../Text/Text';
import { anchorCss } from './Anchor.css';

interface AnchorProps {
  children?: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

export default function Anchor({
  children,
  href,
  isExternal = true,
}: AnchorProps) {
  const rel = isExternal ? 'noreferrer noopener' : undefined;
  const target = isExternal ? '_blank' : undefined;

  return (
    <Text
      as="a"
      className={anchorCss}
      fontWeight={500}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Text>
  );
}
