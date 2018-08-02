import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service';
import { Router } from '@angular/router'
import { Productos } from '../models/productos.models'


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: Array<any>;
  prods: Productos[];

  constructor(private router: Router, private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getAll().subscribe(data => {
      this.productos = data._embedded.productoses;
   });
  }

  // deleteProducto(producto: Productos): void {
  //   this.productosService.deleteProducto(producto)
  //     .subscribe( data => {
  //       this.productos = this.productos.filter(u => u !== producto);
  //     })
  // };
  delete(producto: Productos): void {
    this.productos = this.productos.filter(h => h !== producto);
    this.productosService.deleteProducto(producto)
    .subscribe( data => {
      alert("Producto Borrado");
    });
  }
}