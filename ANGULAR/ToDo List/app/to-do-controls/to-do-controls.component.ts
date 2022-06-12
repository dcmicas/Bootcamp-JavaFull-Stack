import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-controls',
  templateUrl: './to-do-controls.component.html',
  styleUrls: ['./to-do-controls.component.css']
})
export class ToDoControlsComponent implements OnInit {
@Output()

addTarefa: EventEmitter  <any> = new EventEmitter();
salvar (texto:string):void{
  this.addTarefa.emit(texto)
}

  constructor() { }

  ngOnInit(): void {
  }

}
