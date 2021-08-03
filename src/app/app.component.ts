import { Component } from '@angular/core';
import { task } from './TasksList/interfaces/tareas.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      tasksList:task[] = [];
  taskName:string='';
   
  addTask():void {
     if(this.taskName!=''){
      let task:task={
         dato:this.taskName
      };
       this.tasksList.push(task);
       this.taskName='';
     }else{
     console.log("Dato no agregado");
   }
   }//fin addTask

   editTask(indice:number):void {
    console.log("Editar");
    

  }//fin editTask

  deleteTask(indice:number):void {
     this.tasksList.splice(indice,1);
    console.log("Indice de Dato Eliminado"+" "+indice);
    console.log(this.tasksList);      
  }//fin editTask
}

