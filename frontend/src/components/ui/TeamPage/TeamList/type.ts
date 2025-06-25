import { IMember } from 'types/member';

export interface TeamListProps {
    filteredMembers: IMember[];
    lastElementRef?: (node: HTMLElement | null) => void;
    hasMore: boolean;
}
