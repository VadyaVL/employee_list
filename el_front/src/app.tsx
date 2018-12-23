import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { EmployeeListPage } from './units/employee/pages';
import { store } from './store';

export class AppComponent extends React.Component {
  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <EmployeeListPage />
      </Provider>
    );
  }
}

export const App = hot(module)(AppComponent);