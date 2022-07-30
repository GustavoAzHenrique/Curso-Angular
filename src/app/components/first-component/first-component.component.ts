import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {

//Dados
  name: string = 'Gustavo';
  age: number = 26;
  job: string = 'Programador';
  hobbies = ['Correr', 'Futebol', 'Poker'];
  car = {
    name: 'EcoSport',
    year: 2014,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
