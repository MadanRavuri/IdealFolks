export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

export interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}