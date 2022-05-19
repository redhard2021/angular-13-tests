import { Component } from '@angular/core';


@Component({
    selector: 'heroe-component',
    templateUrl: './heroe.component.html'

})
export class HeroeComponent{
    name:string = 'Ironman';
    age:number = 27;

    
    concat():string{
        return `${this.name} + ${this.age}`
    }

    get capitalizeName():string{
        return this.name.toUpperCase();
    }

    changeHero():void{
        this.name = 'Spiderman'
    }

    changeAge():void{
        this.age = 20;
    }

}