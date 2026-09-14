// Central place for types shared across pages/components.
export type View = 'home' | 'experience' | 'projects' | 'blog';

// TODO: expand once navigations need more fields
export interface NavItem {
    id: View;
    label: string;
}