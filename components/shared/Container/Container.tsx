import clsx from 'clsx';
import { containerCss } from './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, className, ...restProps }: ContainerProps) {
  return (
    <div className={clsx(containerCss, className)} {...restProps}>
      {children}
    </div>
  );
}

export default Container;
