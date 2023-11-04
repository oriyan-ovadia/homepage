import type { MouseEvent } from 'react';
import { createContext, useState } from 'react';

interface SidebarProviderProps {
  children: React.ReactNode;
}

interface SidebarMenu_ContextProps {
  activeHash: string;
  onClickNavItem: (event: MouseEvent) => void;
  onSetActiveHash: (event: MouseEvent) => void;
}

export const SidebarMenuContext = createContext<SidebarMenu_ContextProps>(null);

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

export function Provider({ children }: SidebarProviderProps) {
  const [activeHash, setActiveHash] = useState('');

  function onSetActiveHash(targetId) {
    setActiveHash(`#${targetId}`);
    navigateTo(targetId);
  }

  function onClickNavItem(event: MouseEvent) {
    event?.preventDefault();

    const target = event.target as HTMLAnchorElement;
    const url = new URL(target.href);
    const targetId = url.hash.substring(1);
    const targetEl = document.getElementById(targetId);

    setActiveHash(`#${targetId}`);

    navigateTo(targetId);
    scrollTo(targetEl);
  }

  return (
    <SidebarMenuContext.Provider
      value={{ activeHash, onClickNavItem, onSetActiveHash }}
    >
      {children}
    </SidebarMenuContext.Provider>
  );
}
