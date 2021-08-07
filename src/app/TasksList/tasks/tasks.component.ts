import { Component, Input} from '@angular/core';
import { task } from '../interfaces/tareas.interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',

})
export class TasksComponent {

  @Input() tasksList:task[] = [];
  
}
