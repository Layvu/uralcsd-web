import React from 'react';
import clsx from 'clsx'; // библиотека clsx для конкатенации классов 
import { MainTitleProps } from './type';

import './main-title.scss';


export const MainTitleUI: React.FC<MainTitleProps> = React.memo(({ className, ...props }) => {
    return <h1 className={clsx('main-title', className)} {...props} />;
});
