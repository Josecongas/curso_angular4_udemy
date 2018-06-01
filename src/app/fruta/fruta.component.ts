import { Component } from '@angular/core';

@Component({

	selector: 'fruta',
	templateUrl: './fruta.component.html'
	

	})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayordeEdad:boolean;
	public trabajos:Array<any>;


	constructor(){
		this.nombre = "Jose";
		this.hola();

	}

	ngOnInit() {
		this.cambiarNombre();
	}

	hola(){
		console.log("Hola " + this.nombre)
	}

	cambiarNombre() {
		this.nombre = "Mariano";
	}

}