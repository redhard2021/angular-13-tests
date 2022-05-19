import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Batman','Batgirl', 'Harry Potter'] 
  
  lastHero!:string;

  mostrarLog():void{
    console.log(this.lastHero) ;
  }

  deleteLastItem(){
    this.lastHero = this.heroes.pop() || '';
  }

}
