import React from 'react';
import { css } from '@emotion/react';
import Anchor from '@/components/shared/Anchor/Anchor';
import LinkedInIcon from '@/components/shared/icons/LinkedInIcon';

const socialCss = css`
  margin-top: 2rem;

  svg {
    width: 26px;
    height: 26px;
  }
`;

export function Social() {
  return (
    <div css={socialCss}>
      <Anchor href="https://www.linkedin.com/in/oriyan/">
        <LinkedInIcon />
      </Anchor>
    </div>
  );
}
