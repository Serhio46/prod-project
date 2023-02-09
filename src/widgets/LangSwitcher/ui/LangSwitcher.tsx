import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(classes.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t('Translate')}
    </Button>
  );
};
