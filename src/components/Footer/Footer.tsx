import React from 'react';
import { useSelector } from 'react-redux';
import { FooterUI } from '@components/ui/Footer';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

export const Footer: React.FC = () => {
    const contactsInfo = useSelector(selectContactsInfo);

    return <FooterUI contactsInfo={contactsInfo} />;
};
