import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/system';
import { theme } from '../src/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    ),
  ],
};

export default preview;
