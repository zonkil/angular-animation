import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Net} from "../drawable/net";
import {Rectangle} from "../drawable/rectangle";

@Component({
  selector: 'app-canvas-animation',
  templateUrl: './canvas-animation.component.html',
  styleUrls: ['./canvas-animation.component.scss']
})
export class CanvasAnimationComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  net: Net = new Net(7, 5);
  rect = new Rectangle(5, 5, 50, 50, "red");

  animateId: number;
  lastTime: number;

  constructor(private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.ctx = f(this.canvas.nativeElement.getContext('2d'));
    this.net.draw(this.ctx);
  }

  animate(time: any) {

    this.clearCanvas();
    this.net.draw(this.ctx);

    const move = time - this.lastTime > 10;
    if (move) {
      this.rect.move(1, 0);
    }
    this.rect.draw(this.ctx);

    this.lastTime = time;
    this.animateId = window.requestAnimationFrame((ttt) => {
      this.animate(ttt)
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  start() {
    this.ngZone.runOutsideAngular(() => window.requestAnimationFrame((ttt) => {
      this.animate(ttt)
    }));
  }

  stop() {
    window.cancelAnimationFrame(this.animateId);
  }
}

function f<T>(zm: T | null): T {
  if (!zm) {
    throw new Error("dupa")
  }
  return zm;
}
