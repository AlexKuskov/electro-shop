import { Injectable } from '@angular/core';
import { ProductItem } from '../model/product-item';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor() { }

  get categories(): Category[] {
    return [
      { title: "Laptops", categoryProducts: this.laptops },
      { title: "Tablets", categoryProducts: this.tablets },
      { title: "Phones", categoryProducts: this.phones },
      { title: "TVs", categoryProducts: this.tvs },
      { title: "E-Books", categoryProducts: this.eBooks },
      { title: "Video Game Consoles", categoryProducts: this.videoGameConsoles },
      { title: "Smart Watches", categoryProducts: this.smartWatches }
    ];
  }

  get slides(): String[] {
    return [
      "assets/images/slides/slide-1.jpg",
      "assets/images/slides/slide-2.jpg",
      "assets/images/slides/slide-3.jpg"
    ]
  }

  get parameters(): String[] {
    return [
      "Category:",
      "Manufacturer:",
      "Diagonal:",
      "OS:",
      "Screen Size:",
      "Memory Capacity:"
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
        image: "assets/images/products/laptops/laptop-1.jpg",
        title: "ASUS VivoBook EA89S",
        price: "23 333",
        diagonal: "15''",
        os: "Linux",
        screenSize: "1600x900",
        memoryCapacity: "1 TB",
        manufacturer: "ASUS"
      },
      {
        image: "assets/images/products/laptops/laptop-1.jpg",
        title: "Acer Aspiron H6",
        price: "15 999",
        diagonal: "13''",
        os: "Windows 10",
        screenSize: "1366x768",
        memoryCapacity: "512 GB",
        manufacturer: "Acer"
      },
      {
        image: "assets/images/products/laptops/laptop-1.jpg",
        title: "HP Notebook 87",
        price: "34 799",
        diagonal: "15.6''",
        os: "Windows",
        screenSize: "1440x900",
        memoryCapacity: "128 GB",
        manufacturer: "HP"
      },
      {
        image: "assets/images/products/laptops/laptop-2.jpg",
        title: "MacBook Pro 13",
        price: "67 640",
        diagonal: "14''",
        os: "Mac OS",
        screenSize: "1440x900",
        memoryCapacity: "1 TB",
        manufacturer: "Apple"
      },
      {
        image: "assets/images/products/laptops/laptop-1.jpg",
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

  get tablets(): ProductItem[] {
    return [
      {
        image: "assets/images/products/tablets/tablet-1.jpg",
        title: "Yuntab GTT89",
        price: "2 799",
        diagonal: "14''",
        os: "Android 6",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Yuntab"
      },
      {
        image: "assets/images/products/tablets/tablet-2.jpg",
        title: "Prestigio 550",
        price: "1 099",
        diagonal: "14''",
        os: "Android 7",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Prestigio"
      },
      {
        image: "assets/images/products/tablets/tablet-1.jpg",
        title: "Lenovo 333",
        price: "2 799",
        diagonal: "14''",
        os: "Android 7",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Lenovo"
      },
      {
        image: "assets/images/products/tablets/tablet-2.jpg",
        title: "ASUS YH33",
        price: "799",
        diagonal: "14''",
        os: "Android 5",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "ASUS"
      }
    ];
  }

  get phones(): ProductItem[] {
    return [
      {
        image: "assets/images/products/phones/phone-1.jpg",
        title: "Samsung G10",
        price: "10 799",
        diagonal: "4''",
        os: "Android 5",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Samsung"
      },
      {
        image: "assets/images/products/phones/phone-2.jpg",
        title: "ASUS YH33",
        price: "5 555",
        diagonal: "6''",
        os: "Android 9",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "ASUS"
      },
      {
        image: "assets/images/products/phones/phone-1.jpg",
        title: "Meizu E5",
        price: "3 799",
        diagonal: "6''",
        os: "Android 9",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Meizu"
      },
      {
        image: "assets/images/products/phones/phone-2.jpg",
        title: "iPhone 7",
        price: "11 599",
        diagonal: "5''",
        os: "iOS",
        screenSize: "1440x900",
        memoryCapacity: "512 GB",
        manufacturer: "Apple"
      },
      {
        image: "assets/images/products/phones/phone-1.jpg",
        title: "Honor 5",
        price: "3 799",
        diagonal: "6''",
        os: "Android 9",
        screenSize: "1440x900",
        memoryCapacity: "256 GB",
        manufacturer: "Honor"
      }
    ];
  }

  get tvs(): ProductItem[] {
    return [
      {
        image: "assets/images/products/tvs/tv-1.jpg",
        title: "Samsung G599 Full HD",
        price: "13 799",
        diagonal: "64''",
        os: "",
        screenSize: "1440x900",
        memoryCapacity: "",
        manufacturer: "Samsung"
      },
      {
        image: "assets/images/products/tvs/tv-2.jpg",
        title: "LG 2555",
        price: "16 799",
        diagonal: "56''",
        os: "",
        screenSize: "1440x900",
        memoryCapacity: "",
        manufacturer: "LG"
      },
      {
        image: "assets/images/products/tvs/tv-1.jpg",
        title: "Phillips 202YJO",
        price: "10 799",
        diagonal: "22''",
        os: "",
        screenSize: "1440x900",
        memoryCapacity: "",
        manufacturer: "Phillips"
      },
      {
        image: "assets/images/products/tvs/tv-2.jpg",
        title: "Sony AA7",
        price: "17 799",
        diagonal: "36''",
        os: "",
        screenSize: "1440x900",
        memoryCapacity: "",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/tvs/tv-1.jpg",
        title: "Panasonic P223",
        price: "23 799",
        diagonal: "26''",
        os: "",
        screenSize: "1440x900",
        memoryCapacity: "",
        manufacturer: "Panasonic"
      }
    ];
  }

  get eBooks(): ProductItem[] {
    return [
      {
        image: "assets/images/products/ebooks/ebook-1.jpg",
        title: "PocketBook Touch Lux",
        price: "3 799",
        diagonal: "5''",
        os: "",
        screenSize: "800x600",
        memoryCapacity: "4 GB",
        manufacturer: "PocketBook"
      },
      {
        image: "assets/images/products/ebooks/ebook-2.jpg",
        title: "AirBook Pro 8S",
        price: "4 599",
        diagonal: "5''",
        os: "",
        screenSize: "1024x600",
        memoryCapacity: "6 GB",
        manufacturer: "AirBook"
      },
      {
        image: "assets/images/products/ebooks/ebook-1.jpg",
        title: "Amazon Kindle Whitepaper",
        price: "5 799",
        diagonal: "5''",
        os: "",
        screenSize: "800x600",
        memoryCapacity: "8 GB",
        manufacturer: "Amazon"
      }
    ];
  }

  get videoGameConsoles(): ProductItem[] {
    return [
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 4 Pro",
        price: "10 799",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "1 TB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-2.jpg",
        title: "Microsoft XBOX One",
        price: "8 799",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "1 TB",
        manufacturer: "Microsoft"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 4",
        price: "9 999",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "512 GB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 3",
        price: "6 599",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "512 GB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-2.jpg",
        title: "Microsoft XBOX 360",
        price: "5 799",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "256 GB",
        manufacturer: "Microsoft"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 2",
        price: "2 199",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "128 GB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 4 Slim",
        price: "13 199",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "128 GB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-1.jpg",
        title: "PlayStation 1",
        price: "999",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "64 GB",
        manufacturer: "Sony"
      },
      {
        image: "assets/images/products/videoGameConsoles/console-2.jpg",
        title: "Microsoft XBOX Pro",
        price: "3 799",
        diagonal: "",
        os: "",
        screenSize: "",
        memoryCapacity: "128 GB",
        manufacturer: "Microsoft"
      }
    ];
  }

  get smartWatches(): ProductItem[] {
    return [
      {
        image: "assets/images/products/smartWatches/watch-1.jpg",
        title: "Amazfit Verge Gray",
        price: "2 199",
        diagonal: "1.6''",
        os: "Android",
        screenSize: "",
        memoryCapacity: "",
        manufacturer: "Amazfit"
      },
      {
        image: "assets/images/products/smartWatches/watch-2.jpg",
        title: "Huawei Watch GT",
        price: "4 199",
        diagonal: "1.5''",
        os: "Android",
        screenSize: "",
        memoryCapacity: "",
        manufacturer: "Huawei"
      },
      {
        image: "assets/images/products/smartWatches/watch-1.jpg",
        title: "Samsung Galaxy Watch",
        price: "3 899",
        diagonal: "1.5''",
        os: "Android",
        screenSize: "",
        memoryCapacity: "",
        manufacturer: "Samsung"
      },
      {
        image: "assets/images/products/smartWatches/watch-2.jpg",
        title: "KMITX T11",
        price: "7 999",
        diagonal: "1.6''",
        os: "Android",
        screenSize: "",
        memoryCapacity: "",
        manufacturer: "KMITX"
      },
      {
        image: "assets/images/products/smartWatches/watch-2.jpg",
        title: "IWO 11",
        price: "2 999",
        diagonal: "1.6''",
        os: "Android",
        screenSize: "",
        memoryCapacity: "",
        manufacturer: "IWO"
      }
    ];
  }

  get mostPopular(): ProductItem[] {
    return [
      this.laptops[1],
      this.laptops[4],
      this.tablets[2],
      this.phones[0],
      this.tvs[2],
      this.tvs[3],
      this.eBooks[0],
      this.eBooks[1],
      this.videoGameConsoles[0],
      this.smartWatches[1]
    ]
  }

}
