import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  //Propriedade
  myNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //Lógica para ativar o Output gerado no evento filho dentro do evento Pai.
  onChangeNumber() {

    //Função para alterar a propriedade myNumber dentro da regra definida.
    this.myNumber = Math.floor(Math.random() * 1000);
  }

}
