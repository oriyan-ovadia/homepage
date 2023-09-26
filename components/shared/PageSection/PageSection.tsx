import { css } from '@emotion/react';
import { toRem } from 'utils';
import { Heading } from './Heading';
import { Ref, forwardRef } from 'react';

export interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const pageSectionCss = css`
  padding-top: ${toRem(100)};
`;

const PageSectionComponent = forwardRef(
  (
    { children, className, ...restProps }: PageSectionProps,
    ref: Ref<HTMLDivElement>,
  ) => {
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

export const PageSection = Object.assign(PageSectionComponent, { Heading });
