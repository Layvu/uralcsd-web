import { IProject } from 'types/project';

export interface ProjectListUI {
    projects: IProject[];
    lastElementRef?: (node: HTMLElement | null) => void;
    hasMore: boolean;
}
