import { IMember } from "interfases/IMember";
import { TeamFilterCategory } from "types/TeamFilterCategory";

export interface TeamListProps {
    category: TeamFilterCategory,
    members: IMember[],
}