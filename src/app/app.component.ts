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
  isEdit: boolean = false;
  indice:number=0;
  tituloBoton:string='Guardar Tarea';
  
  addTask(): void {
    if (!this.isEdit) {
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
      this.isEdit=false;
    }else{
      let taskDelete: task = {
        dato: this.taskName, 
      };
       this.tasksList.splice(this.indice, 1, taskDelete);
       this.isEdit=false;
       this.tituloBoton='Guardar Tarea';
       this.taskName='';
       console.log(this.tasksList);
    }
  } //fin addTask

  editTask(indice: number, nombre: string): void {
    this.isEdit=true;
    this.tituloBoton='Editar Tarea';
    this.taskName = nombre;
    this.indice=indice;
    console.log(this.tasksList);
  } //fin editTask

  deleteTask(indice: number): void {
    this.tasksList.splice(indice, 1);
    console.log(this.tasksList);
  } //fin editTask

}
