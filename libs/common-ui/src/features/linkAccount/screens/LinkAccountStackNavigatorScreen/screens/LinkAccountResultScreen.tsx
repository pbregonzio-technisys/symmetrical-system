import * as React from 'react';

import { ScreenContainer } from '../../../../../components/screen-container';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const LinkAccountResultScreen = () => (
  <ScreenContainer name="Link Account result screen" statusBarScheme="dark" />
);
LinkAccountResultScreen.options = {
  title: 'Link Account result screen',
  ...simpleHeaderProps,
};
