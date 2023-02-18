import * as React from 'react';

import { ScreenContainer } from '../../../components/screen-container';
import { simpleHeaderProps } from '../../../constants/navigation/utils';
import { Icon } from '../../../components/icon';

export const PaySomeoneScreen = () => (
  <ScreenContainer name="PaySomeone screen" statusBarScheme="dark" />
);
PaySomeoneScreen.options = {
  title: 'Pay Someone screen',
  drawerLabel: 'Pay Someone',
  drawerIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="coin-pile" color={focused ? '#E36414' : '#757575'} />
  ),
  ...simpleHeaderProps,
};
