import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from '../character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }