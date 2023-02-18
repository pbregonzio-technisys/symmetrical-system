import * as React from 'react';

import { ProvidersSet, CompoundNavigator } from '@symmetrical-system/common-ui';

export const App = () => {
  return (
    <ProvidersSet>
      <CompoundNavigator />
    </ProvidersSet>
  );
};

export default App;
