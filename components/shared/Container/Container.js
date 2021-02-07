import { css } from '@emotion/react';
import {
  CONTAINER_PADDING_DESKTOP,
  CONTAINER_PADDING_MOBILE,
  mobileOnly,
  tabletUp,
} from 'styles/utils';

const containerCss = css`
  max-width: 1020px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${mobileOnly} {
    padding-left: ${CONTAINER_PADDING_MOBILE};
    padding-right: ${CONTAINER_PADDING_MOBILE};
  }

  ${tabletUp} {
    padding-left: ${CONTAINER_PADDING_DESKTOP};
    padding-right: ${CONTAINER_PADDING_DESKTOP};
  }
`;

function Container({
  as: Component = 'div',
  children,
  className,
  ...restProps
}) {
  return (
    <Component css={containerCss} className={className} {...restProps}>
      {children}
    </Component>
  );
}

export default Container;
