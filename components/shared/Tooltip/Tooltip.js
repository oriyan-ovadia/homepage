import { css } from '@emotion/react';
import * as RdxTooltip from '@radix-ui/react-tooltip';

const tooltipCss = css``;

export function Tooltip({ children, content, ...props }) {
  return (
    <RdxTooltip.Provider>
      <RdxTooltip.Root>
        <RdxTooltip.Trigger asChild>{children}</RdxTooltip.Trigger>
        <RdxTooltip.Content>{content}</RdxTooltip.Content>
      </RdxTooltip.Root>
    </RdxTooltip.Provider>
  );
}
