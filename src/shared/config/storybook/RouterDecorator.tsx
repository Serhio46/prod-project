import 'app/styles/index.scss';
import { Story } from '@storybook/api';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => <BrowserRouter>{story()}</BrowserRouter>;
