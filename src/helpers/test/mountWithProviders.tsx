import { mount, MountRendererProps } from 'enzyme';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

const withProviders: (node: ReactElement) => ReactElement = (node) => {
  return (
    <Provider store={store}>
      {node}
    </Provider>
  );
};

export const mountWithProviders = (node: ReactElement, options?: MountRendererProps) =>
  mount(withProviders(node), options);
