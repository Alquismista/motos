import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string; 
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  
  private products: Product[] = [
    {
      id: 5,
      nombre: 'Yamaha R1',
      descripcion: 'Deportiva de alto rendimiento',
      precio: 15800,
      imagen: 'img5.jpg'
    },
    {
      id: 6,
      nombre: 'Harley Davidson Sportster',
      descripcion: 'Estilo clásico y potente',
      precio: 13400,
      imagen: 'img6.jpg'
    },
    {
      id: 7,
      nombre: 'BMW GS 1200',
      descripcion: 'Aventura y confort en carretera',
      precio: 16200,
      imagen: 'img7.jpg'
    },
    {
      id: 8,
      nombre: 'Ducati Panigale V4',
      descripcion: 'Diseño italiano y velocidad',
      precio: 18900,
      imagen: 'img8.jpg'
    },
    {
      id: 9,
      nombre: 'Triumph Bonneville',
      descripcion: 'Retro y elegante',
      precio: 11200,
      imagen: 'img9.jpg'
    },
    {
      id: 10,
      nombre: 'KTM Duke 390',
      descripcion: 'Ligera y agresiva',
      precio: 7200,
      imagen: 'img10.jpg'
    },
    {
      id: 11,
      nombre: 'Royal Enfield Classic 500',
      descripcion: 'Estilo vintage y robustez',
      precio: 8500,
      imagen: 'img11.jpg'
    },
    {
      id: 12,
      nombre: 'Suzuki Hayabusa',
      descripcion: 'Velocidad extrema y diseño aerodinámico',
      precio: 17800,
      imagen: 'img12.jpg'
    },
    {
      id: 13,
      nombre: 'Aprilia RSV4',
      descripcion: 'Tecnología de competición',
      precio: 16500,
      imagen: 'img13.jpg'
    }
  ];

  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}
