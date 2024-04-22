import { Component } from '@angular/core';
import { Celular } from './producto.interface';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrCells:Celular[] = [];

  formData:FormGroup;

  ngOnInit(){
    this.formData = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      precio: new FormControl(),
      almacenamiento: new FormControl()
    })
  }


  agregarTelefono(){
      let celular: Celular = {
        marca: this.formData.get('marca')?.value,
        modelo: this.formData.get('modelo')?.value,
        precio: this.formData.get('precio')?.value,
        almacenamientoInterno: this.formData.get('almacenamiento')?.value
      };

      this.arrCells.push(celular);
      this.formData.reset();
  }

  mostrarArrays(){
    console.log(this.arrCells);
  }

  

}
