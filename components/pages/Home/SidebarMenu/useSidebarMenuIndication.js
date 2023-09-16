import { useIsViewed } from 'hooks/useIsViewed';
import { useEffect } from 'react';
import { useSidebarMenu } from './useSidebarMenu';

export function useSidebarMenuIndication(elementRef) {
  const isViewed = useIsViewed(elementRef);

  const { activeHash, onClickNavItem, onSetActiveHash } = useSidebarMenu();

  console.log(elementRef.current, isViewed);

  useEffect(() => {
    onSetActiveHash(elementRef.current.id);
  }, [isViewed]);
}
