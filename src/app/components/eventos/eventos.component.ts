import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  //1º Cria classe "showMessage" para trabalhar com o evento (click) no .html
  //2º alterar sua propriedade definida no NgIf
  showMessage(): void {
    this.show = !this.show; //toggle
  }
}
