import "./Header.scss";

import React from "react";

import { HeaderUIProps } from "./type";

export const HeaderUI: React.FC<HeaderUIProps> = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <button className="btn-reset" onClick={onMenuToggle}>
          <svg className="logo" aria-hidden="true">
            <use xlinkHref="img/sprite.svg#iconName"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
