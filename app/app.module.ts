import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { Comp1Component } from './comp1/comp1.component';
import { Directive1Directive } from './directives/directive1.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    Comp1Component,
    Directive1Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
