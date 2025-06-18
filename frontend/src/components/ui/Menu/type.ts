import { IContactInfo } from "types/contacts";

export interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
    contactsInfo?: IContactInfo;
}
