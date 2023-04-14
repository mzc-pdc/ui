import { create } from '@storybook/theming/create';
// @ts-ignore
import logo from '../src/assets/logo.png';

export default create({
  base: 'dark',
  brandTitle: '@mzc-pdc/ui',
  // brandUrl: 'https://example.com',
  brandImage: logo,
  brandTarget: '_self',
});