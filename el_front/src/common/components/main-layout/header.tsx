import * as React from 'react';

import './header.scss';

interface HeaderProps {

}

export const Header: React.StatelessComponent<HeaderProps> = (props) => {
  return (
    <header className='main-header'>
      <div className='main-header__content'>
        <div className='main-header__logo'>Employee DB</div>
      </div>
    </header>
  );
};
