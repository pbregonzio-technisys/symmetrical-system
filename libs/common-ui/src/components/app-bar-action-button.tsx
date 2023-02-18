import * as React from 'react';

import { Icon } from './icon';
import type { IconGlyphsType } from './icon';
import { Button } from './button/button';

export const AppBarActionButton = ({
  iconName,
  onPress,
  accessibilityLabel,
  styles,
  colorScheme = 'light',
}: {
  iconName: IconGlyphsType;
  onPress?: any;
  accessibilityLabel: string;
  styles?: any;
  colorScheme?: 'light' | 'dark';
}) => {
  return (
    <Button
      styles={styles}
      size="small"
      onPress={onPress}
      theme={{
        BackgroundColor: colorScheme === 'light' ? '#ffffff00' : '#3b3b3b00',
        BackgroundColorPressed:
          colorScheme === 'light' ? '#ffffff22' : '#3b3b3b22',
        TextBackgroundColor: colorScheme === 'light' ? '#ffffff' : '#3b3b3b',
        TextBackgroundColorPressed:
          colorScheme === 'light' ? '#ffffff' : '#3b3b3b',
      }}
      accessibilityLabel={accessibilityLabel}
    >
      <Icon
        name={iconName}
        color={colorScheme === 'light' ? '#ffffff' : '#3b3b3b'}
      />
    </Button>
  );
};
