import { Text as RNText, TextProps } from 'react-native';

export const Text = (props: TextProps) => (
  <RNText {...props}>{props.children}</RNText>
);
