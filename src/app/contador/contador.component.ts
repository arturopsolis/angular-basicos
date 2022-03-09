import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})

export class ContadorComponent {
  title   : string = 'myNewApp';
  counter : number = 20;
  base    : number = 5;

  change( value: number ){
    this.counter += value;
  }

}
