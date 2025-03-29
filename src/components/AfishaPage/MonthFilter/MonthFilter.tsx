import React from 'react';
import { MonthFilterUI } from '@components/ui/AfishaPage/MonthFilter';
import { MonthFilterProps } from '@components/ui/AfishaPage/MonthFilter/type';

export const MonthFilter: React.FC<MonthFilterProps> = (props) => (
    <MonthFilterUI {...props} />
);