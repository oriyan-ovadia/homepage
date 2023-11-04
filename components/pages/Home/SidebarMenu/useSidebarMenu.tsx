import { useContext } from 'react';
import { SidebarMenuContext } from './Provider';

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
