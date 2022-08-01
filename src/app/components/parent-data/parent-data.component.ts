import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  // " ! " Syntaxe de TS para deixar propriedade pronta para iniciar os dados.
  @Input() userData!: { email: string; role: string };

  constructor() {}

  ngOnInit(): void {}
}
