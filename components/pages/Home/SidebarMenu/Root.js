import { css } from '@emotion/react';
import Text from 'components/shared/Text/Text';
import { useEffect, useState } from 'react';
import { colors, viewport } from 'styles/utils';
import { useSidebarMenu } from './useSidebarMenu';

const items = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Peer Feedback',
    href: '#peer-feedback',
  },
];

function navigateTo(targetId) {
  const url = `${window.location.pathname}#${targetId}`;

  window.history.replaceState({}, '', url);
}

function scrollTo(targetEl) {
  if (!targetEl) {
    return;
  }

  targetEl.scrollIntoView({
    behavior: 'smooth',
  });
}

const sidebarMenuRootCss = css`
  ${viewport.small} {
    display: none;
  }
`;

const ulCss = css`
  max-width: max-content;
  margin-top: 4rem;
`;

const itemCss = props => css`
  display: flex;
  align-items: center;
  column-gap: 18px;

  &:hover {
    .line {
      width: 4rem;
    }
  }
`;

const textCss = props => css`
  letter-spacing: 0.1em;
  font-weight: 700;
  color: ${props.isActive ? colors.white : '#64748b'};

  a {
    display: flex;
    align-items: center;
    column-gap: 18px;
    padding-block: 0.65rem;
  }
`;

const lineCss = props => css`
  height: 1px;
  width: ${props.isActive ? '4rem' : '2rem'};
  background-color: ${props.isActive ? colors.white : '#64748b'};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`;

export function Root() {
  const { activeHash, onClickNavItem } = useSidebarMenu();

  return (
    <nav css={sidebarMenuRootCss}>
      <ul css={ulCss}>
        {items.map(({ href, label }) => {
          const isActive = activeHash === href;

          return (
            <li css={itemCss({ isActive })} key={href}>
              <Text
                css={textCss({ isActive })}
                isUpperCase
                size="xs"
                fontWeight={700}
              >
                <a href={href} onClick={onClickNavItem}>
                  <span className="line" css={lineCss({ isActive })}></span>
                  {label}
                </a>
              </Text>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
