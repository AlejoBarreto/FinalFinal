import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductosService } from './productos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
