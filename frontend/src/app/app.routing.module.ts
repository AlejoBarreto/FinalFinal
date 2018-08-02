import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductoComponent } from './producto/producto.component';
import {FormularioComponent} from './formulario/formulario.component'

const routes: Routes = [
  { path: 'productos', component: ProductoComponent },
  { path: 'agregar', component: FormularioComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }