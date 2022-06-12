import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ToDoControlsComponent } from './to-do-controls/to-do-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ToDoControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
