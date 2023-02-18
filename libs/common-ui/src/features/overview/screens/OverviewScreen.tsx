import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon } from '../../../components/icon';
import { SafeContent } from '../../../components/safe-content';
import { ScreenContainer } from '../../../components/screen-container';
import { PRIVATE_STACK_NAVIGATOR_SCREENS } from '../../../constants/navigation/privateStack';
import {
  colorfulHeaderProps,
  tabBarProps,
} from '../../../constants/navigation/utils';
import { OverviewMenu } from './components/OverviewMenu';
import { AppBarActionButton } from '../../../components/app-bar-action-button';

export const OverviewScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScreenContainer statusBarScheme="light">
      <SafeContent
        style={{
          paddingTop: 16,
          paddingBottom: 24,
          paddingRight: 24 + insets.right,
          paddingLeft: 24 + insets.left,
        }}
      >
        <OverviewMenu />
      </SafeContent>
    </ScreenContainer>
  );
};

OverviewScreen.options = {
  ...colorfulHeaderProps,
  ...tabBarProps,
  title: 'Overview screen',
  tabBarLabel: 'Overview',
  headerRight: () => <NotificationActionIcon />,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon name="bank" color={focused ? '#E36414' : '#757575'} />
  ),
};

const NotificationActionIcon = () => {
  const { navigate } = useNavigation();
  return (
    <AppBarActionButton
      onPress={() =>
        navigate(
          PRIVATE_STACK_NAVIGATOR_SCREENS.NotificationsScreen.name as any
        )
      }
      styles={{ wrapper: styles.actionButton }}
      iconName="bell"
      accessibilityLabel="notifications"
    />
  );
};

const styles = StyleSheet.create({
  actionButton: { marginRight: 16 },
});
