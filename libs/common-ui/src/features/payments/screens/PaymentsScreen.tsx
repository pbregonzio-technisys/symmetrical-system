import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScreenContainer } from '../../../components/screen-container';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { Icon } from '../../../components/icon';
import { SegmentedControl } from '../../../components/segmented-control/segmented-control';
import { SafeContent } from '../../../components/safe-content';

export const PaymentsScreen = () => {
  const [_, setSelectedValue] = React.useState('One');
  const insets = useSafeAreaInsets();
  return (
    <ScreenContainer name="Payments screen" statusBarScheme="light">
      <SafeContent
        style={{
          paddingTop: 16,
          paddingBottom: 24 + insets.bottom,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
        }}
      >
        <SegmentedControl
          labels={['One', 'Two', 'Three']}
          onChange={(value) => setSelectedValue(value)}
        />
      </SafeContent>
    </ScreenContainer>
  );
};
PaymentsScreen.options = {
  ...tabBarProps,
  ...colorfulHeaderProps,
  title: 'Payments screen',
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="dollar" color={focused ? '#E36414' : '#757575'} />
  ),
};
