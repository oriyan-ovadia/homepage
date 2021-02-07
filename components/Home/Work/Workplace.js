import { css } from '@emotion/react';
import Heading from 'components/shared/Heading/Heading';
import Text from 'components/shared/Text/Text';
import { colors } from 'styles/utils';

const workplaceCss = css``;

const dotCss = css`
  font-size: 5rem;
`;

const companyNameCss = css`
  margin-bottom: 40px;
`;

const descriptionCss = css`
  opacity: 0.6;
  margin-top: 50px;
`;

export default function Workplace({ children, companyName, year }) {
  return (
    <div css={workplaceCss}>
      <div css={dotCss}>.</div>
      <Text fontType="serif">{year}</Text>
      <Heading css={companyNameCss} variant="h3">
        {companyName}
      </Heading>
      <Text css={descriptionCss} color={colors.gray} size="xs">
        {children}
      </Text>
    </div>
  );
}
