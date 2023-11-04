import { Text } from 'components/shared';
import { useSidebarMenu } from './useSidebarMenu';
import {
  anchorCss,
  itemCss,
  lineRecipe,
  sidebarMenuRootCss,
  textRecipe,
  ulCss,
} from './Root.css';

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

export function Root() {
  const { activeHash, onClickNavItem } = useSidebarMenu();

  return (
    <nav className={sidebarMenuRootCss}>
      <ul className={ulCss}>
        {items.map(({ href, label }) => {
          const isActive = activeHash === href;

          return (
            <li className={itemCss} key={href}>
              <Text
                className={textRecipe({ isActive })}
                fontWeight={700}
                isUpperCase
                size="xs"
              >
                <a className={anchorCss} href={href} onClick={onClickNavItem}>
                  <span className={lineRecipe({ isActive })}></span>
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
