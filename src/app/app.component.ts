import { splitClasses } from '@angular/compiler';
import { Component, enableProdMode } from '@angular/core';
import { task } from './TasksList/interfaces/tareas.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasksList: task[] = [];
  taskName: string = '';
  isEditar: boolean = false;
  indice:number=0;
  tituloBoton:string='Guardar Tarea';
  
  addTask(): void {
    if (!this.isEditar) {
      this.tituloBoton='Guardar Tarea';
      if (this.taskName != '') {
            let task: task = {
          dato: this.taskName,
        };
        this.tasksList.push(task);
        this.taskName = '';
      } else {
        console.log('Dato no agregado');
      }
      this.isEditar=false;
    }else{
      let taskDelete: task = {
        dato: this.taskName, //dato ingresado por el usuario por defecto espacio en blanco
      };
       this.tasksList.splice(this.indice, 1, taskDelete);
       this.isEditar=false;
       this.tituloBoton='Guardar Tarea';
       this.taskName='';
       console.log(this.tasksList);
    }
  } //fin addTask

  editTask(indice: number, nombre: string): void {
    this.isEditar=true;
    this.tituloBoton='Editar Tarea';
    this.taskName = nombre;
    this.indice=indice;
    console.log(this.tasksList);
  } //fin editTask

  deleteTask(indice: number): void {
    this.tasksList.splice(indice, 1);
    console.log('Indice de Dato Eliminado' + ' ' + indice);
    console.log(this.tasksList);
  } //fin editTask

}
