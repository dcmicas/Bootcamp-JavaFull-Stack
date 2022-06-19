import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  @Input()
  texto!: string 

  @Output()
  deletarTarefa: EventEmitter<any> = new EventEmitter();

  deletar():void{
  this.deletarTarefa.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

/*    add(todo: string): void{
    this.todos.push(todo)
  }

  clear(list:string):void{
    this.todos.pop()
  } */

}
