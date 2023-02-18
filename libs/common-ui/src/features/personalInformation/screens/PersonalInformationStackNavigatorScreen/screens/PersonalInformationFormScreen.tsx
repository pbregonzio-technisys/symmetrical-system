import * as React from 'react';

import { ScreenContainer } from '../../../../../components/screen-container';
import { simpleHeaderProps } from '../../../../../constants/navigation/utils';

export const PersonalInformationFormScreen = () => (
  <ScreenContainer statusBarScheme="dark" />
);
PersonalInformationFormScreen.options = {
  title: 'Personal Information form screen',
  ...simpleHeaderProps,
};
