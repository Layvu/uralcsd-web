import { IContactInfo } from "types/contacts";

export interface HeaderUIProps {
    onMenuToggle: () => void;
    onClose: () => void;
    isMenuOpen: boolean;
    location: string;
    contactsInfo: IContactInfo;
}
