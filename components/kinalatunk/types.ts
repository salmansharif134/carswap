export type SpecItem = { label: string; value: string; red?: boolean };

export type KinalatunkCar = {
  id: number;
  name: string;
  year: string;
  price: string;
  image: string;
  featured?: boolean;
  row1: SpecItem[];
  row2: SpecItem[];
};

export type FilterSection = { key: string; label: string };
