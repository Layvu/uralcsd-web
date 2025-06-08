import React from 'react';
import { useSelector } from 'react-redux';
import { FooterUI } from '@components/ui/Footer';
import { selectContactsError, selectContactsInfo, selectContactsLoading } from '@services/selectors/contactsSelectors';

export const Footer: React.FC = () => {
    const contactsInfo = useSelector(selectContactsInfo);
    // const loading = useSelector(selectContactsLoading);
    // const error = useSelector(selectContactsError);

    // if (loading) {
    //     return (
    //         <footer className="footer">
    //             <div className="loading">Загрузка информации о контактах...</div>
    //         </footer>
    //     );
    // }
    // if (error) {
    //     return (
    //         <footer className="footer">
    //             <div className="error">Ошибка: {error}</div>
    //         </footer>);
    // }
    return <FooterUI contactsInfo={contactsInfo} />;
};
