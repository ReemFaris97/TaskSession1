import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChildComponentComponent } from './my-child-component/my-child-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChildComponentComponent,
    MySecondComponentComponent,
    MyFirstComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
