import React from 'react';
import { useSelector } from 'react-redux';
import { ContactsUI } from '@components/ui/ContactsPage';
import { selectContactsError, selectContactsInfo, selectContactsLoading } from '@services/selectors/contactsSelectors';

export const ContactsPage: React.FC = () => {
    const contactsInfo = useSelector(selectContactsInfo);

    const loading = useSelector(selectContactsLoading);
    const error = useSelector(selectContactsError);

    if (loading) {
        return <div className="loading">Загрузка информации...</div>;
    }
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }
    return <ContactsUI contactsInfo={contactsInfo} />;
};
