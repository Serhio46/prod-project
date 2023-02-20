import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Spinner } from './Spinner';

export default {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
    <Spinner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
