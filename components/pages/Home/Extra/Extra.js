import { css } from '@emotion/react';
import Anchor from 'components/shared/Anchor/Anchor';
import Text from 'components/shared/Text/Text';
import HeartIcon from 'components/shared/icons/HeartIcon';
import { colors } from 'styles/utils';
import { StarWarsLogo } from './StarWarsLogo';

const footerCss = css`
  max-width: 28rem;

  > :not(a) {
    color: #64748b;
  }
`;

const heartCss = css`
  width: 12px;
  color: ${colors.primaryLight};
  margin-inline: 6px 3px;
  opacity: 0.8;
`;

export function Extra() {
  return (
    <section css={footerCss} id="footer">
      <StarWarsLogo />
    </section>
  );
}
