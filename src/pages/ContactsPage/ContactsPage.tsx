import React from 'react';
import { useSelector } from 'react-redux';
import { ContactsUI } from '@components/ui/ContactsPage';
import { selectContactsInfo } from '@services/selectors/contactsSelectors';

export const ContactsPage: React.FC = () => {
    const contactsInfo = useSelector(selectContactsInfo);

    return <ContactsUI contactsInfo={contactsInfo} />;
};
