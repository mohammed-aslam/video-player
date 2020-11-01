import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './componets/main/main.component';
import { PlayerComponent } from './componets/player/player.component';
import { LecturesComponent } from './componets/lectures/lectures.component';

@NgModule({
  declarations: [
    MainComponent,
    PlayerComponent,
    LecturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }