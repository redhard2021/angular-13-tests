import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CounterComponent } from './countComponent/counter.component';


@NgModule({
    declarations:[
        CounterComponent,
    ],
    exports:[
        CounterComponent,
    ],
    imports:[
        CommonModule
    ]

})
export class CounterModule{

}