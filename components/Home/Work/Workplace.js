import { css } from '@emotion/react';
import Heading from 'components/shared/Heading/Heading';
import Text from 'components/shared/Text/Text';
import {
  colors,
  CONTAINER_PADDING_MOBILE,
  mediaDown,
  screenSize,
} from 'styles/utils';

const workplaceCss = css`
  position: relative;
  padding-top: 4rem;

  ::before {
    content: '.';
    font-size: 5rem;
    position: absolute;
    top: -4.1rem;
  }

  ${mediaDown(screenSize.medium)} {
    padding-left: ${CONTAINER_PADDING_MOBILE};
    padding-right: ${CONTAINER_PADDING_MOBILE};
    border-top: 1px solid ${colors.veryLightGray};
  }
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
    <article css={workplaceCss}>
      <Text fontType="serif">{year}</Text>
      <Heading css={companyNameCss} variant="h3">
        {companyName}
      </Heading>
      <Text css={descriptionCss} color={colors.gray} size="xs">
        {children}
      </Text>
    </article>
  );
}
