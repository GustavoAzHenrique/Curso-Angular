import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  //Importante adicionar os iniciadores as propriedades não iniciadas.
  size: 40 = 40;
  font: 'Arial' = 'Arial';
  color: 'yellow' = 'yellow';

  //Classes a serem adicionadas de forma dinâmica.
  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() {}

  ngOnInit(): void {}
}
