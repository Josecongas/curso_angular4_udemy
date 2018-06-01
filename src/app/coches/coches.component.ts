import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent {
  public coche: Coche;
  public coches = [];
  public articulos;

  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche('', '', '');
    this.coches = [];
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;

        if (!this.articulos) {
          console.log('Error en el servidor');
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    alert('Se ha agregado el coche ' + this.coche.nombre);
    this.coche = new Coche('', '', '');
  }
}
