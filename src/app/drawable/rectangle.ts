import {Drawable} from "./drawable";

export class Rectangle implements Drawable {
  constructor(public x: number, private y: number, private width: number, private height: number, private color: string) {
  }

  draw(ctx: CanvasRenderingContext2D): any {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(x:number, y:number) {
    this.x += x;
    this.y += y;
  }

}
