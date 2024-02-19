export type Tag = {
  id: number;
  name: string;
};

export enum Gender {
  Male,
  Female,
}

export type Colors = Tag[];

export type Product = {
  id: number;
  name: string;
  description?: string;
  reference: string;
  color: string;
  brand: string;
  authenticityLevel: string;
  gender: Gender;
  price: number;
  images: string[];
};

export type Products = Product[];

export type Brands = Tag[];

export type WatchAuthenticityRaiting = {
  id: number;
  name: string;
};

export type Filter = {
  id: string | number;
  value: string | number;
  displayValue: string;
};
export type Filters = Filter[];

export type FilterGroup = {
  label: string;
  filters: Filter[];
};
export type FiltersGroup = FilterGroup[];
