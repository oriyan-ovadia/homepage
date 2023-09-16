import { createContext, useState } from 'react';

export const SidebarMenuContext = createContext();

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

export function Provider({ children }) {
  const [activeHash, setActiveHash] = useState('');

  function onSetActiveHash(targetId) {
    setActiveHash(`#${targetId}`);
    navigateTo(targetId);
  }

  function onClickNavItem(event) {
    event?.preventDefault();
    const url = new URL(event.target.href);
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
