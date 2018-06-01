import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({

	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
	

	})

export class EmpleadoComponent{
	public titulo = 'Componente empleados';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;


	constructor(){
		this.empleado = new Empleado('David Lopez',45,'Cocinero',true);
		this.trabajadores = [
			new Empleado('David Lopez',45,'Cocinero',true),
			new Empleado('Ana Lopez',25,'Cocinera',true),
			new Empleado('Victor Lopez',66,'Encargado',false),
		];
		this.trabajador_externo = true;
		this.color = 'green';
		this.color_seleccionado = '#ccc';
	}



	ngOnInit(){
	console.log(this.empleado);
		console.log(this.trabajadores);

}

cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
}

