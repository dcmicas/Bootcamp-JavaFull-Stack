import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  caracateresRestantes: number = 60

  constructor() { }

  ngOnInit(): void {
  }

  atualizarCaracateresRestantes (qtd: number): void {
    this.caracateresRestantes = 60 - qtd
  }

}
