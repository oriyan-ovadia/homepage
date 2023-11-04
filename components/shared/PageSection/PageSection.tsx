import { Heading } from './Heading';
import type { Ref } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { pageSectionCss } from './PageSection.css';

export interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// eslint-disable-next-line react/display-name
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
