import { Component, OnInit } from '@angular/core';
import { Formulario } from '../models/formulario.models';
import { FormulariosService } from '../formularios.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
  
  export class FormularioComponent {

    user: Formulario = new Formulario();
  
    constructor(private router: Router, private formularioService: FormulariosService) {
  
    }
  
    createUser(): void {
      this.formularioService.escribir(this.user)
          .subscribe( data => {
            alert("Producto Ingresado");
          });
  
    };
  

}
