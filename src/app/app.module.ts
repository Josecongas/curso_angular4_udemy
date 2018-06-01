import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import {ContactoComponent} from './contacto/contacto.component';
import {HomeComponent} from './home/home.component';
import {ConversorPipe} from './pipes/conversor.pipe';
import {CochesComponent} from './coches/coches.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {PlantillasComponent} from './plantillas/plantillas.component';





@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
