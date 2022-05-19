import { Component } from '@angular/core'

@Component({
    selector: 'counter-app',
    template: `
        <h1>Hi! Welcome to {{ title }}</h1>
        <div>La base es <strong>{{base}}</strong></div>
        <button (click)="modifyNumber(base)">Increase +{{base}}</button>
        <span>{{number}}</span>
        <button (click)="modifyNumber(-base)">Decrease -{{base}}</button>
    `

})
export class CounterComponent {

    title:string = 'AppCounter';
    number:number=0;
    base:number = 5;

    modifyNumber = (modify:number) =>{
    this.number += modify
    }
}