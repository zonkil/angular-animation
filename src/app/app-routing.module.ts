import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanvasAnimationComponent} from "./canvas-animation/canvas-animation.component";
import {CanvasWithGsapComponent} from "./canvas-with-gsap/canvas-with-gsap.component";
import {PixiComponent} from "./pixi/pixi.component";

const routes: Routes = [
  {path: "canvas", component: CanvasAnimationComponent},
  {path: "canvas-gasp", component: CanvasWithGsapComponent},
  {path: "pixi", component: PixiComponent},
  {path: "**", component: CanvasAnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
