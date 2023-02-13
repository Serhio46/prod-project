import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Loaders/Spinner/Spinner';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(classes.PageLoader, {}, [className])}>
        <Spinner />
    </div>
);
