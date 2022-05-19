import { CounterModule } from './counter/counter.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    //Here we put components
    AppComponent,
  ],
  imports: [
    //here we put other modules (set of components)
    HeroesModule,
    CounterModule,
    BrowserModule
  ],
  providers: [
    //Here we put services
  ],
  bootstrap: [
    //here we put the central module
    AppComponent
  ]
})
export class AppModule { }
