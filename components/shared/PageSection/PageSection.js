import { css } from '@emotion/react';
import { toRem } from 'utils/utils';
import { Heading } from './Heading';
import { forwardRef } from 'react';

const pageSectionCss = css`
  padding-top: ${toRem(100)};
`;

const PageSectionComponent = forwardRef(
  ({ children, className, ...restProps }, ref) => {
    return (
      <section
        className={className}
        css={pageSectionCss}
        ref={ref}
        {...restProps}
      >
        {children}
      </section>
    );
  },
);

PageSectionComponent.Heading = Heading;

export const PageSection = PageSectionComponent;
