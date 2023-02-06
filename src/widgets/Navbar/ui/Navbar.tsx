import { FC } from 'react';
import { Link } from 'react-router-dom';

import { routesPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.link}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={classes.mainLink}
          to={routesPath.main}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routesPath.about}>
          About
        </AppLink>
      </div>
    </div>
  );
};
