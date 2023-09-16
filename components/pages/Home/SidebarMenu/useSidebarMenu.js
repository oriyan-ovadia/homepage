import { useContext, useEffect } from 'react';
import { useIsViewed } from '../../../../hooks/useIsViewed';
import { SidebarMenuContext } from './Provider';

function navigateTo(targetId) {
  const url = `${window.location.pathname}#${targetId}`;

  window.history.replaceState({}, '', url);
}

export function useSidebarMenu() {
  const context = useContext(SidebarMenuContext);

  if (context == null) {
    throw new Error(
      '`useSidebarMenu` must be used within a `SidebarMenuContext.Provider`',
    );
  }

  return {
    activeHash: context.activeHash,
    onClickNavItem: context.onClickNavItem,
    onSetActiveHash: context.onSetActiveHash,
  };
}
