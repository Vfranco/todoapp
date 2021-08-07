import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TasksComponent],
  exports: [TasksComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class TasksModule { }

