import React from 'react';
import { Anchor } from 'components/shared';
import LinkedInIcon from 'components/shared/icons/LinkedInIcon';
import { linkedInIconCss, socialCss } from './Social.css';

export function Social() {
  return (
    <div className={socialCss}>
      <Anchor href="https://www.linkedin.com/in/oriyan/">
        <LinkedInIcon className={linkedInIconCss} />
      </Anchor>
    </div>
  );
}
