import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeLight fill={theme === Theme.DARK && 'blue'} />
        </Button>
    );
};
