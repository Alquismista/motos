import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  motor?: string;
  potencia?: string;
  velocidad?: string;
  tipo?: string;
  nuevo?: boolean;
  descuento?: number;
  precioOriginal?: number;
  financiacion?: number;
}

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Moto Deportiva RS 1000',
      descripcion: 'Alta performance, diseño aerodinámico, ideal para pista.',
      precio: 25999000,
      imagen: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      nombre: 'Moto Naked Streetfighter',
      descripcion: 'Diseño agresivo, maniobrabilidad urbana, tecnología avanzada.',
      precio: 18999000,
      imagen: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      nombre: 'Moto Adventure XT',
      descripcion: 'Todo terreno, suspensión larga, perfecta para exploración.',
      precio: 22999000,
      imagen: 'https://motos.honda.com.co/images/cms/x-adv-negro.png'
    },
    {
      id: 4,
      nombre: 'Moto Sport 600',
      descripcion: 'Entry level deportiva, fácil manejo, excelente relación precio-calidad.',
      precio: 14999000,
      imagen: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80'
    },
    {
      id: 5,
      nombre: 'Moto Custom Chopper',
      descripcion: 'Estilo americano, motor V-Twin, personalización completa.',
      precio: 32999000,
      imagen: 'https://http2.mlstatic.com/D_Q_NP_622046-MCO91239401682_092025-F.webp'
    },
    {
      id: 6,
      nombre: 'Moto Naked Urban',
      descripcion: 'Para el día a día, económica, bajo consumo, diseño moderno.',
      precio: 12999000,
      imagen: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  getProducts(): Product1[] {
    return this.productos;
  }

  getProductById(id: number): Product1 | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  addProduct(producto: Product1): void {
    this.productos.push(producto);
  }

  updateProduct(id: number, updates: Partial<Product1>): void {
    const index = this.productos.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productos[index] = { ...this.productos[index], ...updates };
    }
  }

  deleteProduct(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}