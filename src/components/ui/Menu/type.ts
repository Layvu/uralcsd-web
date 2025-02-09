interface Category {
  id: number;
  name: string;
  subcategories: string[];
}

export interface MenuUIProps {
  categories: Category[];
}
