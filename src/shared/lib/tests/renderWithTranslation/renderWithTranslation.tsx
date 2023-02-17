import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTEst from 'shared/config/i18n/i18nForTest';

const renderWithTranslation = (component: ReactNode) => render(
    <I18nextProvider i18n={i18nForTEst}>{component}</I18nextProvider>
);

export default renderWithTranslation;
