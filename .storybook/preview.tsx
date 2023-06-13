import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/system';
import { theme } from '../src';
import {CssBaseline} from "@mui/material";

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
          <CssBaseline/>
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    ),
  ],
};

export default preview;
