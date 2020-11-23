import {Drawable} from "./drawable";

export class Net implements Drawable {
  constructor(private nrColumn: number, private nrRows: number) {
  }

  draw(ctx: CanvasRenderingContext2D): any {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(1, 0)
    ctx.lineTo(1, ctx.canvas.height);

    let step = ctx.canvas.width / this.nrColumn;
    for (let i = 1; i <= this.nrColumn; ++i) {
      ctx.moveTo(step * i, 0);
      ctx.lineTo(step * i, ctx.canvas.height);
    }

    ctx.moveTo(0, 1);
    ctx.lineTo(ctx.canvas.width, 1);
    step = ctx.canvas.height / this.nrRows;
    for (let i = 1; i <= this.nrRows; ++i) {
      ctx.moveTo(0, step * i);
      ctx.lineTo(ctx.canvas.width, step * i);
    }
    ctx.stroke();
  }
}
