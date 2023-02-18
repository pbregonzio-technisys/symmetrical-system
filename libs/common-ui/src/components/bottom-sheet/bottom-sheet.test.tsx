import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { View } from 'react-native';
import { BottomSheet } from './bottom-sheet';

describe('BottomSheet component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { getByTestId } = render(
      <BottomSheet visible={true} onClose={jest.fn()}>
        <View testID="child" />
      </BottomSheet>
    );

    expect(getByTestId('child')).toBeDefined();
  });
});
