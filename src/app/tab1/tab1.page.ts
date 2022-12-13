import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  numero:number = 0;

  constructor() {}

  ngOnInit(): void {
    this.numero = 10;
    //debugger;
    this.numero = 20;
    this.numero+= 15;
    console.log(this.numero);
    console.log("Hola Mundo");
  }

}
