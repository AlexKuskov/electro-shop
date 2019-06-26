import { Injectable } from '@angular/core';
import { ProductItem } from '../model/product-item';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  filters: any;

  tablets: ProductItem[];
  phones: ProductItem[];
  tvs: ProductItem[];
  eBooks: ProductItem[];
  videoGameConsoles: ProductItem[];
  smartWatches: ProductItem[];

  constructor() { }

  get categories(): String[] {
    return [
      "Laptops",
      "Tablets",
      "Phones",
      "TVs",
      "E-Books",
      "Video Game Consoles",
      "Smart Watches"
    ];
  }

  get laptops(): ProductItem[] {
    return [
      {
        image: "assets/images/products/laptops/laptop-1.jpg",
        title: "Dell Inspiron 3576",
        price: "13 799",
        diagonal: "15.6''",
        os: "Linux",
        screenSize: "1920x1080",
        memoryCapacity: "256 GB",
        manufacturer: "Dell"
      },
      {
        image: "assets/images/products/laptops/laptop-2.jpg",
        title: "MacBook Air 9",
        price: "23 089",
        diagonal: "14''",
        os: "Mac OS",
        screenSize: "1440x900",
        memoryCapacity: "128 GB",
        manufacturer: "Apple"
      },
      {
        image: "assets/images/products/laptops/laptop-3.jpg",
        title: "ASUS VivoBook EA89S",
        price: "23 333",
        diagonal: "15''",
        os: "Linux",
        screenSize: "1600x900",
        memoryCapacity: "1 TB",
        manufacturer: "ASUS"
      },
      {
        image: "assets/images/products/laptops/laptop-4.jpg",
        title: "Acer Aspiron H6",
        price: "15 999",
        diagonal: "13''",
        os: "Windows 10",
        screenSize: "1366x768",
        memoryCapacity: "512 GB",
        manufacturer: "Acer"
      },
      {
        image: "assets/images/products/laptops/laptop-5.jpg",
        title: "HP Notebook 87",
        price: "34 799",
        diagonal: "15.6''",
        os: "Windows",
        screenSize: "1440x900",
        memoryCapacity: "128 GB",
        manufacturer: "HP"
      },
      {
        image: "assets/images/products/laptops/laptop-6.jpg",
        title: "MacBook Pro 13",
        price: "67 640",
        diagonal: "14''",
        os: "Mac OS",
        screenSize: "1440x900",
        memoryCapacity: "1 TB",
        manufacturer: "Apple"
      },
      {
        image: "assets/images/products/laptops/laptop-7.jpg",
        title: "Lenovo IdeaPad G789",
        price: "29 089",
        diagonal: "14''",
        os: "Linux",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Lenovo"
      }
    ];
  }

}
