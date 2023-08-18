import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CharacterRoutingModule
  ],
  providers: [],
  bootstrap: [CharacterComponent]
})

export class CharacterModule { }
