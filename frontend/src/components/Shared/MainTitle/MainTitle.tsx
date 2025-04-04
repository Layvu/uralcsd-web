import { MainTitleUI } from '@components/ui/Shared/MainTitle/MainTitleUI';
import { MainTitleProps } from '@components/ui/Shared/MainTitle/type';
import React from 'react';


export const MainTitle: React.FC<MainTitleProps> = (props) => {
    return <MainTitleUI {...props} />;
};
