import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  // Valor(name) da classe diferente do Valor(name) que componente definido no If
  // na tela mensagem de else definido no .html
  name = 'g uSt4v0';

  constructor() {}

  ngOnInit(): void {}
}
