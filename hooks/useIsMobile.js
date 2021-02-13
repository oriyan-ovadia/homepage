import { useState, useEffect } from 'react';

import { screenSize } from 'styles/utils';
import { isBrowser } from 'utils/utils';

let mediaQuery;
let isMobileInitialValue = true;

if (isBrowser) {
  mediaQuery = window.matchMedia(
    `screen and (max-width: ${screenSize.mediumPx})`,
  );
  isMobileInitialValue = mediaQuery.matches;
}

/**
 * WARNING:
 * This should not be used for conditional rendering as it causes an
 * inconsistency with the SSR DOM tree.
 */
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(isMobileInitialValue);

  useEffect(() => {
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    if (mediaQuery) {
      mediaQuery.addListener(updateMatch);
    }

    return () => {
      if (mediaQuery) {
        mediaQuery.removeListener(updateMatch);
      }
    };
  }, []);

  return isMobile;
}
