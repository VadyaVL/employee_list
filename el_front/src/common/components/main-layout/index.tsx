import * as React from 'react';

import './index.scss';

import { Header } from './header';

interface MainLayoutProps {
  isLoading?: boolean;
}

export const MainLayout: React.StatelessComponent<MainLayoutProps> = (props) => {
  return (
    <div className='main-layout'>
      <Header />
      <div className='main-layout__content'>
        {
          props.isLoading ?
          'Loader' : props.children
        }
      </div>
    </div>
  );
};
