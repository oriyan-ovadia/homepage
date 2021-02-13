export default function Anchor({ children, href }) {
  return (
    <a href={href} rel="noopener" target="_blank">
      {children}
    </a>
  );
}
