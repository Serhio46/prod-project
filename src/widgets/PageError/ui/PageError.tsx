import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { routesPath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
    onRemoveError: () => void;
}

export const PageError: FC<PageErrorProps> = ({ className, onRemoveError }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={onRemoveError}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={routesPath.main}>
                    {t('Take me home')}
                </AppLink>
            </Button>
        </div>
    );
};
