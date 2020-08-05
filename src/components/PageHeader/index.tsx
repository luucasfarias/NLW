import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'
  ;
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/icons/back.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="back to home" />
        </Link>
        <img src={logoImg} alt="logo" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
}

export default PageHeader;