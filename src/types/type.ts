import './glb';

export interface Hotspot {
    id: number;
    name: string;
    position: string;
    normal: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    company: string;
    price: string;
    size: (string | number)[];
    poster: string;
    model: string;
    description: string;
    material: string;
    placement: string;
    hotspots: Hotspot[];
    image:string;
  }
  