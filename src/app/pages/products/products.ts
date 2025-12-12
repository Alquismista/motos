import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos, Product1 } from '../../services/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  productos: Product1[] = [];
  productosService = inject(Productos);

  ngOnInit() {
    console.log('✅ Products component cargado');
    this.productos = this.productosService.getProducts();
    console.log('Productos:', this.productos);
  }

  verDetalles(producto: Product1) {
    alert(`Detalles: ${producto.nombre}`);
  }

  solicitarPrueba(producto: Product1) {
    alert(`Prueba: ${producto.nombre}`);
  }

  cotizarProducto(producto: Product1) {
    alert(`Cotizar: ${producto.nombre}`);
  }

  filtrarProductos(event: any) {
    console.log('Filtrar:', event.target.value);
  }

  filtrarPorTipo(tipo: string) {
    console.log('Tipo:', tipo);
  }
}