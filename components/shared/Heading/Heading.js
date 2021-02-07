import Text from 'components/shared/Text/Text';

const headingSize = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
};

function Heading({ children, variant = 'h3', ...restProps }) {
  return (
    <Text fontWeight={500} size={headingSize[variant]} {...restProps}>
      {children}
    </Text>
  );
}

export default Heading;
