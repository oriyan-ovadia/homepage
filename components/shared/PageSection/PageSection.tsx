import { css } from '@emotion/react';
import { toRem } from 'utils';
import { Heading } from './Heading';
import { Ref, forwardRef } from 'react';
import clsx from 'clsx';
import { pageSectionCss } from './PageSection.css';

export interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PageSectionComponent = forwardRef(
  (
    { children, className, ...restProps }: PageSectionProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <section
        className={clsx(pageSectionCss, className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </section>
    );
  },
);

export const PageSection = Object.assign(PageSectionComponent, { Heading });
