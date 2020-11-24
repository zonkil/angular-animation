import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasAnimationComponent } from './canvas-animation/canvas-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CanvasWithGsapComponent } from './canvas-with-gsap/canvas-with-gsap.component';
import { PixiComponent } from './pixi/pixi.component';
import { PixiWithBoardComponent } from './pixi-with-board/pixi-with-board.component';
import { PixiWithAnimejsComponent } from './pixi-with-animejs/pixi-with-animejs.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasAnimationComponent,
    CanvasWithGsapComponent,
    PixiComponent,
    PixiWithBoardComponent,
    PixiWithAnimejsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
