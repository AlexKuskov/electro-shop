import { Injectable } from '@angular/core';
import { ProductItem } from '../model/product-item';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  categories: String[] = [
    "Laptops",
    "Tablets",
    "Phones",
    "TVs",
    "E-Books",
    "Video Game Consoles",
    "Smart Watches"
  ];
  filters: any;

  //laptops: ProductItem[];
  tablets: ProductItem[];
  phones: ProductItem[];
  tvs: ProductItem[];
  eBooks: ProductItem[];
  videoGameConsoles: ProductItem[];
  smartWatches: ProductItem[];

  constructor() { }

  get laptops(): ProductItem[] {
    return [
      {
        image: "1",
        title: "one",
        price: 55,
        diagonal: "qweqwe",
        os: "erwer",
        screenSize: "qweq",
        memoryCapacity: "fdbd",
        manufacturer: "sdfsdf"
      },
      {
        image: "2",
        title: "two",
        price: 55,
        diagonal: "qweqwe",
        os: "erwer",
        screenSize: "qweq",
        memoryCapacity: "fdbd",
        manufacturer: "sdfsdf"
      }
    ];
  }

}