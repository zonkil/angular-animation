import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Rectangle} from "../drawable/rectangle";
import {Net} from "../drawable/net";
import { TweenLite } from 'gsap';

@Component({
  selector: 'app-canvas-with-gsap',
  templateUrl: './canvas-with-gsap.component.html',
  styleUrls: ['./canvas-with-gsap.component.scss']
})
export class CanvasWithGsapComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  net: Net = new Net(7, 5);
  rect = new Rectangle(5, 5, 50, 50, "red");
  rect2 = new Rectangle(5, 150, 50, 50, "blue");

  animateId: number;
  // lastTime: number;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ctx = f(this.canvas.nativeElement.getContext('2d'));
    this.net.draw(this.ctx);
    this.rect.draw(this.ctx);
    this.rect2.draw(this.ctx);
  }

  animate(time: any) {
    this.clearCanvas();
    this.net.draw(this.ctx);

    // const move = time - this.lastTime > 10;
    // if (move) {
    //   this.rect.move(1, 0);
    // }
    this.rect.draw(this.ctx);
    this.rect2.draw(this.ctx);

    // this.lastTime = time;
    this.animateId = window.requestAnimationFrame((ttt) => {
      this.animate(ttt)
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  start() {
    TweenLite.to(this.rect, 5, {x: 500, onComplete: () => {this.stop()}, onUpdate: () => {console.log(this.rect.x)}});
    TweenLite.to(this.rect2, 3, {x: 500, y: 250});
    this.ngZone.runOutsideAngular(() => window.requestAnimationFrame((ttt) => {
      this.animate(ttt)
    }));
  }

  stop() {
    console.log("stop");
    window.cancelAnimationFrame(this.animateId);
  }
}

function f<T>(zm: T | null): T {
  if (!zm) {
    throw new Error("dupa")
  }
  return zm;
}
