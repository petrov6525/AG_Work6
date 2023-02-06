import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeirdHobbyComponent } from './weird-hobby/weird-hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    WeirdHobbyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
