import 'app/styles/index.scss';
import { Story } from '@storybook/api';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Component: () => Story) => <div className={`app ${theme}`}>{Component()}</div>;
