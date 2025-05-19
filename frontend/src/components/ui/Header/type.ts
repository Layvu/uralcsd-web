import { IContactInfo } from "types/contacts";

export interface HeaderUIProps {
    onMenuToggle: () => void;
    isMenuOpen: boolean;
    location: string;
    contactsInfo: IContactInfo;
}
